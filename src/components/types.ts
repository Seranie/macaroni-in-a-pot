import type { RefObject } from "react";

export interface potRefType {
    potRef: RefObject<SVGPathElement | null>;
}

export interface circleCenterType {
    x: number;
    y: number;
}

export interface boundaryType {
    width: number;
    height: number;
    top: number;
    left: number;
    center: Array<number>;
    radius: number;
}