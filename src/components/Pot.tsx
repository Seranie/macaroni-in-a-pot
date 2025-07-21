import pot from '../assets/pot.webp';
import styles from './Pot.module.css';

export default function Pot(){
    return (
        <div className={ styles.flex }>
            <img src={ pot } alt='Pot' className={ styles.pot } width='1280' height='1280'/>
        </div>
    )
}