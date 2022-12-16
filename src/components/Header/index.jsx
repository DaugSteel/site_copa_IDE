import './style.css'

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
        <div className='header' id="home">
            <a className='link' href="#home">HOME</a>
            <a className='link' href="#sobre">SOBRE</a>
            <a className='link' href="#jogadores">JOGADORES</a>
            <a className='link' href="#jogos">JOGOS</a>
        </div>
    )
}
