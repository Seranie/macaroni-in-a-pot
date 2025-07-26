import type { boundaryType } from "./types";

export function limit(x: number, y: number, boundary: boundaryType): {x: number, y: number} {
    var dist = distance([x, y], boundary.center);
    if (dist <= boundary.radius) {
        return {x: x, y: y};
    } 
    else {
        x = x - boundary.center[0];
        y = y - boundary.center[1];
        var radians = Math.atan2(y, x)
           return {
               x: Math.cos(radians) * boundary.radius + boundary.center[0],
               y: Math.sin(radians) * boundary.radius + boundary.center[1]
           }
    } 
}

export function distance(dot1: Array<number>, dot2: Array<number>): number {
    var x1 = dot1[0],
        y1 = dot1[1],
        x2 = dot2[0],
        y2 = dot2[1];
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}