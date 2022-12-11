import styles from './style.module.css'

export default function Header() 
{
    return (
        <div className={styles.header}>
            <ul>
                <li> HOME </li>
                <li> SOBRE </li>
                <li> JOGADORES </li>
                <li> JOGOS </li>
            </ul>
        </div>
    )
}
