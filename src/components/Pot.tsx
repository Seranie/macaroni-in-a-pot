import pot from '../assets/pot.webp';
import styles from './Pot.module.css';
import type { PotProps } from './types';

export default function Pot({ potRef }: PotProps) {
    
    return (
        <div className={ styles.flex }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1280" className={`${ styles.pot } ${ styles.absolute }`}>
                <path id="Selection" ref={ potRef }
                    fill="transparent"
                    d="M 617.00,403.42
                    C 642.91,400.27 685.17,406.73 710.00,415.00
                    747.28,427.42 779.46,445.74 808.00,473.04
                    874.71,536.85 900.84,635.45 875.57,724.00
                    865.00,761.05 846.58,794.12 821.15,823.00
                    801.80,844.98 777.26,864.61 751.00,877.75
                    706.98,899.78 672.12,907.57 623.00,907.00
                    623.00,907.00 613.00,906.09 613.00,906.09
                    592.87,904.62 573.16,900.72 554.00,894.33
                    515.23,881.41 479.37,859.62 451.04,830.00
                    381.33,757.12 361.00,646.44 401.86,554.00
                    429.17,492.23 480.32,442.40 544.00,419.05
                    562.02,412.45 579.96,407.79 599.00,405.28
                    599.00,405.28 617.00,403.42 617.00,403.42 Z" />
            </svg>
            <img src={ pot } alt='Pot' className={ styles.pot } width='1280' height='1280' />
        </div>
    )
}