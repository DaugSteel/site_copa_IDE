import styles from './style.module.css'

export default function Footer()
{
    return (
        <div className={styles.container}>
            <div className={styles.cbf}>
                <img src="/cbf1.png" alt="Foto do logo da CBF"/>
                <div>
                    Confederação Brasileira de Futebol © x IDE © Todos os direitos reservados. 
                    <br/>
                    <br/>
                    Termos de Uso | Politica de Privacidade | Política de Cookies
                </div>
                
                <div>
                    Realização:
                    <br/>
                    <img src="/IDE.png" alt="Foto do logo da IDE"/>    
                </div>
            </div>
                

        </div>
    )
}