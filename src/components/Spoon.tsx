import { useEffect, useRef, useState } from 'react';
import woodenSpoon from '../assets/wooden-spoon.webp';
import styles from './Spoon.module.css';
import { DraggableCore } from 'react-draggable';
import { type boundaryType, type SpoonProps } from './types';
import { limit } from './utils';

export default function Spoon({ potRef, macaroniRef, stirringRef }: SpoonProps) {
    //Refs
    const nodeRef = useRef<HTMLDivElement>(null);
    const spoonBoundaryRef = useRef<SVGPathElement>(null);

    // states
    const [ positionState, setPositionState ] = useState({ x: 0, y:0 }); //position state to be used to calculate spoon's position
    const [ boundary, setBoundary ] = useState<boundaryType | null>(null);

    // effects
    useEffect(() => {
        if (potRef.current) {
            // places the bottom-left point of spoon into pot
            const { left, top, width, height } = potRef.current.getBoundingClientRect();
            setBoundary({ width: width, top:top, left: left, height: height, center: [left + (width / 2), top + (height / 2)], radius: (width / 2) });
            
        }
    }, [potRef.current])

    useEffect(() =>{
        if (boundary !== null){
            const { height: spoonHeight } = nodeRef.current!.getBoundingClientRect();
            setPositionState({x: boundary.center[0], y: boundary.center[1] - spoonHeight}); // subtracts center.y by spoonHeight so that spoon bottom-left is at center of pot
        }
    }, [boundary])

    // Sets spoon's initial position on mount
    useEffect(() => {
        nodeRef.current!.style.translate = `${positionState.x}px ${positionState.y}px`;
    }, [positionState])

    return (
        <DraggableCore
            nodeRef={ nodeRef }
            handle='.handle'
            onStart={(_e, _data) => {
                macaroniRef.current?.play();
                stirringRef.current?.play();
            }}
            onDrag={(_e, data) => {
                if (boundary !== null) {
                    const { left, top, width, height } = spoonBoundaryRef.current!.getBoundingClientRect();
                    const center = { x: left + width / 2, y: top + height / 2};
                    const result = limit(center.x + data.deltaX, center.y + data.deltaY, boundary);
                    const clampedDelta = { x: result.x - center.x, y: result.y - center.y };
                    setPositionState({ x: positionState.x + clampedDelta.x, y: positionState.y + clampedDelta.y });
                }
            }}
            onStop={(_e, _data) => {
                macaroniRef.current?.pause();
                stirringRef.current?.pause();
            }}
        >
            <div className={`${ styles.absolute } ${ styles.absoluteDiv }`} ref={ nodeRef }>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 645 604' className={ styles.absolute }>
                    <path id='Selection' fill='transparent' ref={ spoonBoundaryRef }
                        d='M 174.31,406.04
                        C 181.76,403.82 182.06,411.91 177.86,413.34
                        174.30,414.56 169.97,410.73 174.31,406.04 Z' />
                </svg>
                <img src={ woodenSpoon } alt="wooden spoon" className={ styles.img } width='645' height='604'/>
                <svg xmlns='http://www.w3.org/2000/svg' id='spoonSVG' className={ styles.absolute } viewBox='0 0 648 604'>
                    <path className={`${ styles.handle } handle`} fill='transparent'
                    d='M 105.00,410.00
                    C 106.73,400.77 112.10,394.27 117.82,387.27
                    130.64,371.59 153.43,360.15 173.00,355.52
                    173.00,355.52 191.00,352.72 191.00,352.72
                    207.13,350.60 220.18,347.96 235.00,340.96
                    244.50,336.47 256.63,326.96 265.00,320.42
                    265.00,320.42 307.00,285.28 307.00,285.28
                    307.00,285.28 351.00,247.72 351.00,247.72
                    351.00,247.72 428.00,180.13 428.00,180.13
                    428.00,180.13 473.00,140.85 473.00,140.85
                    473.00,140.85 493.00,123.08 493.00,123.08
                    493.00,123.08 502.99,115.58 502.99,115.58
                    508.87,111.23 512.66,106.89 519.71,113.34
                    523.95,117.21 532.85,127.93 531.57,134.00
                    529.98,141.53 516.85,151.10 511.00,156.13
                    511.00,156.13 455.00,202.87 455.00,202.87
                    455.00,202.87 318.00,317.72 318.00,317.72
                    300.07,333.11 273.27,350.17 258.32,368.00
                    252.99,374.37 246.99,381.58 243.27,389.00
                    243.27,389.00 226.49,434.00 226.49,434.00
                    218.91,450.87 205.76,464.67 189.00,472.60
                    189.00,472.60 171.00,478.63 171.00,478.63
                    171.00,478.63 160.00,480.00 160.00,480.00
                    160.00,458.30 153.63,437.61 138.00,422.00
                    133.60,417.62 129.83,414.46 124.00,412.09
                    117.26,409.36 112.06,410.00 105.00,410.00 Z' />
                </svg>

            </div>
        </DraggableCore>
    )
}
