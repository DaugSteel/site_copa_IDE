import styles from './style.module.css'

export default function Header() 
{
    return (
        <div className={styles.header}>
            <a className={styles.link} href="">HOME</a>
            <a className={styles.link} href="#sobre">SOBRE</a>
            <a className={styles.link} href="">JOGADORES</a>
            <a className={styles.link} href="">JOGOS</a>
        </div>
    )
}
