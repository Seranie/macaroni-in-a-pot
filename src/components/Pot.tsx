import pot from '../assets/pot.webp';
import styles from './Pot.module.css';
import type { potRefType } from './types';

export default function Pot({ potRef }: potRefType) {
    
    return (
        <div className={ styles.flex }>
            <img src={ pot } alt='Pot' className={ styles.pot } width='1280' height='1280' ref={ potRef }/>
        </div>
    )
}