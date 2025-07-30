import { useRef } from 'react';
import styles from './Background.module.css';
import Pot from './Pot';
import Spoon from './Spoon';
import Audio from './Audio';

export default function Background(){
    const potRef = useRef<SVGPathElement>(null);

    const macaroniRef = useRef<HTMLAudioElement>(null);
    const stirringRef = useRef<HTMLAudioElement>(null);

    return (
        <div className={ styles.background }> 
            <Spoon potRef={ potRef } macaroniRef={ macaroniRef } stirringRef={ stirringRef }/>
            <Pot potRef={ potRef }/>
            <Audio macaroniRef= { macaroniRef } stirringRef={ stirringRef }/>
        </div>
    )
}