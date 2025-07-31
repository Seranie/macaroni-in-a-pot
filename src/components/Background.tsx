import { useCallback, useRef, useState } from 'react';
import styles from './Background.module.css';
import Pot from './Pot';
import Spoon from './Spoon';
import Audio from './Audio';
import Volume from './Volume';

export default function Background(){
    const [ potElement, setPotElement ] = useState<SVGPathElement | null>(null); //need to use state to update when potElement becomes available in DOM to get position

    // This callback is used to update potElement that it is available once the pot SVG is painted into DOM.
    const potRef = useCallback((node: SVGPathElement | null) => {
        if (node !== null) {
            setPotElement(node);
        }
    }, []);

    const macaroniRef = useRef<HTMLAudioElement>(null);
    const stirringRef = useRef<HTMLAudioElement>(null);

    return (
        <div className={ styles.background }> 
            <Volume macaroniRef={ macaroniRef } stirringRef={ stirringRef }/>
            <Spoon potElement={ potElement } macaroniRef={ macaroniRef } stirringRef={ stirringRef }/>
            <Pot potRef={ potRef }/>
            <Audio macaroniRef= { macaroniRef } stirringRef={ stirringRef }/>
        </div>
    )
}