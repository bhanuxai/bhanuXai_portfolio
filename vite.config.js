import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Load .env variables locally on server startup
try {
  const envPath = path.resolve(process.cwd(), '.env');
  if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
      const parts = line.split('=');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
        if (key && !key.startsWith('#')) {
          process.env[key] = value;
        }
      }
    });
  }
} catch (err) {
  console.error('Error parsing .env file:', err);
}

// Local API dev middleware to run serverless functions locally
function localApiPlugin() {
  return {
    name: 'local-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/contact' && req.method === 'POST') {
          try {
            let body = '';
            req.on('data', chunk => {
              body += chunk.toString();
            });
            req.on('end', async () => {
              try {
                const apiPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), './api/contact.js');
                const handlerModule = await server.ssrLoadModule(apiPath);
                
                // Mocks for serverless request and response
                const mockReq = {
                  method: 'POST',
                  body: JSON.parse(body)
                };
                
                let responseSent = false;
                const mockRes = {
                  setHeader(name, value) {
                    res.setHeader(name, value);
                    return this;
                  },
                  status(statusCode) {
                    res.statusCode = statusCode;
                    return this;
                  },
                  json(data) {
                    if (responseSent) return;
                    responseSent = true;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                  },
                  end() {
                    if (responseSent) return;
                    responseSent = true;
                    res.end();
                  }
                };

                await handlerModule.default(mockReq, mockRes);
              } catch (err) {
                console.error("Local API Handler error:", err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message || 'API crash occurred.' }));
              }
            });
          } catch (err) {
            next(err);
          }
        } else {
          next();
        }
      });
    }
  }
}

export default defineConfig({
  plugins: [react(), localApiPlugin()],
})
