import { useRef } from 'react';
import styles from './Background.module.css';
import Pot from './Pot';
import Spoon from './Spoon';

export default function Background(){
    const potRef = useRef<HTMLImageElement>(null);

    return (
        <div className={ styles.background }> 
            <Spoon potRef={ potRef }/>
            <Pot potRef={ potRef }/>
        </div>
    )
}