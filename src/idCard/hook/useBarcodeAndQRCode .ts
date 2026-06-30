// useBarcodeAndQrTextures.ts
import { useEffect, useState, useMemo } from "react";
import JsBarcode from "jsbarcode";
import QRCodeStyling from "qr-code-styling";
import { CanvasTexture, Texture, TextureLoader } from "three";

const QR_DIMENSIONS = { width: 300, height: 300 };
const BARCODE_DIMENSIONS = { width: 512, height: 100 };

const qrCode = new QRCodeStyling({
    ...QR_DIMENSIONS,
    image: "/images//logo.svg",
    dotsOptions: { color: "#242424", type: "rounded" },
    imageOptions: {
        crossOrigin: "anonymous",
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 0,
    },
    qrOptions: {
        typeNumber: 4,
        errorCorrectionLevel: "H",
    },
    backgroundOptions: {
        color: "#24242400",
        round: 1
    },
});

const blobToBase64 = async (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () =>
            typeof reader.result === "string"
                ? resolve(reader.result)
                : reject(new Error("Failed to convert blob to base64."));
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

const createBarcodeTexture = (upc: string, color: string): CanvasTexture => {
    const barcodeCanvas = document.createElement("canvas");
    const tempCanvas = document.createElement("canvas");

    Object.assign(barcodeCanvas, BARCODE_DIMENSIONS);

    try {
        JsBarcode(tempCanvas, upc, {
            format: "CODE128",
            width: 2,
            height: 35,
            margin: 0,
            displayValue: true,
            textAlign: "center",
            fontSize: 15,
            fontOptions: "bold",
            textMargin: 4,
            font: "sans-serif",
            lineColor: color,
            background: "transparent",
        });
    } catch (e) {
        console.error("Barcode generation error, attempting fallback:", e);
        try {
            JsBarcode(tempCanvas, "000000000000", {
                format: "CODE128",
                width: 2,
                height: 35,
                margin: 0,
                displayValue: true,
                textAlign: "center",
                fontSize: 15,
                fontOptions: "bold",
                textMargin: 4,
                font: "sans-serif",
                lineColor: color,
                background: "transparent",
            });
        } catch (innerErr) {
            console.error("Barcode fallback failed:", innerErr);
        }
    }

    const ctx = barcodeCanvas.getContext("2d")!;
    ctx.clearRect(0, 0, barcodeCanvas.width, barcodeCanvas.height);

    const x = (barcodeCanvas.width - tempCanvas.width) / 2;
    const y = (barcodeCanvas.height - tempCanvas.height) / 2;
    ctx.drawImage(tempCanvas, x, y);

    const texture = new CanvasTexture(barcodeCanvas);
    texture.needsUpdate = true;
    return texture;
};

export function useBarcodeAndQrTextures({
    upc = "123456789012",
    color = "#242424",
}) {
    const [textures, setTextures] = useState<{
        barcodeTexture?: CanvasTexture;
        qrTexture?: Texture;
    }>({});

    const barcodeTexture = useMemo(() =>
        createBarcodeTexture(upc, color),
        [upc, color]
    );

    useEffect(() => {
        const qrCanvas = document.createElement("canvas");
        Object.assign(qrCanvas, QR_DIMENSIONS);

        qrCode._domCanvas = qrCanvas;
        qrCode.update({ data: upc });

        (async () => {
            try {
                const rawData = await qrCode.getRawData();
                const base64Data = await blobToBase64(rawData);
                const qrTexture = new TextureLoader().load(base64Data);
                qrTexture.needsUpdate = true;
                setTextures({ barcodeTexture, qrTexture });
            } catch (error) {
                console.error('Error generating QR texture:', error);
            }
        })();
    }, [upc, barcodeTexture]);

    return textures;
}
