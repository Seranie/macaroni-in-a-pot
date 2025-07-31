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

export function createSpeedCalculator() {
    const MAX_SPEED = 20;
    const MIN_SPEED = 0;
    const MAX_RATE = 3;
    const MIN_RATE = 0.5;

    let smoothedSpeed = 0;
    const alpha = 0.2;

    return function smoothenSpeed(deltaX: number, deltaY: number): number {
        const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY); // use abs()?
        const clampedSpeed = Math.min(Math.max(MIN_SPEED, speed), MAX_SPEED);
        // normalize speed to percentage
        const normalizedSpeed = clampedSpeed / MAX_SPEED;
        // interpolate to playBackRate, between 0.5-3.0 times speed
        const rate = MIN_RATE + (MAX_RATE - MIN_RATE) * normalizedSpeed;
        smoothedSpeed = smoothedSpeed * (1 - alpha) + rate * alpha;

        return smoothedSpeed;
    }
}