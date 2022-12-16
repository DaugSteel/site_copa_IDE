import styles from './style.module.css'

export default function Footer()
{
    return (
        <div className={styles.container}>
            <div className={styles.cbf}>

                <div className={styles.div1}>
                    <img className={styles.cbfLogo} src={require("./cbf1.png")} alt="Foto do logo da CBF"/>
                    <div className={styles.text}>
                        Confederação Brasileira de Futebol © x IDE © Todos os direitos reservados. 
                        <br/>
                        <br/>
                        Termos de Uso | Politica de Privacidade | Política de Cookies
                    </div>
                </div>
                
                <div className={styles.div2}> 
                    Realização:
                    <br/>
                    <img src={require("./IDE.png")} alt="Foto do logo da IDE"/>    
                </div>
            </div>
                

        </div>
    )
}