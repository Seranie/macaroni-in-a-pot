import type ParentProps from "../ParentProps";
import styles from './Background.module.css';

export default function Background({ children }: ParentProps){
    return (
        <div className={ styles.background }> 
            { children }
        </div>
    )
}