import type { RefObject } from "react";

export interface potRefType {
    potRef: RefObject<SVGPathElement | null>;
}

export interface circleCenterType {
    x: number;
    y: number;
}