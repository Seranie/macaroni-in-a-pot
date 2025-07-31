import type { RefObject } from "react";

export interface potElementType {
    potElement: SVGPathElement | null;
}

export interface boundaryType {
    width: number;
    height: number;
    top: number;
    left: number;
    center: Array<number>;
    radius: number;
}

export interface AudioProps {
    macaroniRef: RefObject<HTMLAudioElement | null>;
    stirringRef: RefObject<HTMLAudioElement | null>;
}

export type SpoonProps = potElementType & AudioProps;

export interface PotProps {
    potRef: (node: SVGPathElement | null) => void;
}