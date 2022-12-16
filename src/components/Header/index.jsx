import styles from './style.module.css'

export default function Header() 
{
    /*Fonte: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    return (
        <div className={styles.header} id="home">
            <a className={styles.link} href="#home">HOME</a>
            <a className={styles.link} href="#sobre">SOBRE</a>
            <a className={styles.link} href="#jogadores">JOGADORES</a>
            <a className={styles.link} href="#jogos">JOGOS</a>
        </div>
    )
}
