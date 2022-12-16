import styles from './style.module.css'

export default function Jogo(props) 
{
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <img src='/brasil.png' alt='Escudo da Seleção Brasileira'/>
                <div> X </div>
                <img src={props.adversario} alt='Escudo da Seleção Adversária'/>
            </div>
            <div className={styles.bottom}>
                {props.dia} <br/>
                <div>
                    {props.data} <br/>
                    {props.horario}
                </div>
            </div>
        </div>
    )
}