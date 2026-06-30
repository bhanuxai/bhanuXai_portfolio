import { Text, TextProps } from "@react-three/drei";
import { Mesh } from "three";

interface CreateTextProps extends TextProps {
    preventWordBreak?: boolean;
    setTransform?: (e: Mesh, width: number, height: number) => void;
}

const CreateText = ({ children, preventWordBreak, setTransform, ...opts }: CreateTextProps) => {
    return (
        <Text
            scale={[1, -1, 1]}
            maxWidth={400}
            overflowWrap={preventWordBreak ? "normal" : "break-word"}
            font={opts.font || "/font/Bangers.ttf"}
            color={opts.color || "white"}
            onSync={(e) => {
                if (setTransform) {
                    const width = e.geometry.boundingBox?.max.x - e.geometry.boundingBox?.min.x;
                    const height = e.geometry.boundingBox?.max.y - e.geometry.boundingBox?.min.y;
                    setTransform(e, width!, height!);
                }
            }}
            {...opts}
        >
            {children}
        </Text>
    )
}

export default CreateText