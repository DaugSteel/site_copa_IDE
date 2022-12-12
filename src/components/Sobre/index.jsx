import styles from './style.module.css'

export default function Sobre() 
{
  return (
    <div id="sobre" className={styles.container2}>

      <h2 className={styles.title2}>SOBRE A SELEÇÃO</h2>

      <div>
        A Seleção Brasileira de Futebol representa o Brasil nas competições de futebol da CONMEBOL e FIFA.<br></br> <br></br> Formada em 1915 e considerada um dos maiores símbolos do país, é chamada de "Seleção", "Seleção Canarinho", "Verde-Amarela", além de outras alcunhas. É a seleção mais bem-sucedida da história do futebol mundial,sendo a recordista em conquistas em Copas do Mundo.
      </div>

      <div className={styles.textContainer}>
        <em>Tem 5 títulos invictos (1958, 1962, 1970, 1994 e 2002) e quatro títulos da Copa das Confederações FIFA (1997, 2005, 2009 e 2013). </em>
      </div>

      <div className={styles.imgContainer}>
        <img className={styles.img2} src="https://s3-alpha-sig.figma.com/img/165f/b503/139d04a1c67ffe751465b55dd3275190?Expires=1671408000&Signature=ZaMh5~O1bCJBDQgvdX-OIFm-ohCXKToKPUxSgy37LSU~JagtoRBklVzPHPNFPK6OQIwP0Y0-w0Kk1gcPDaybcrlGU81lD~9jiRpvOP1zH1OrHwr8Z7Yy-6eXMMX5FTfpf5RGJ2Fkf~VoiygXNGVaE~UbOI~isT4zviKJMYUZgvKBynmGcUxuaC8ev3kuFBqe~PBhLqbCYbvB5KRhSHIPafvTC~Dlv25l~T2dwKfGm68pTPf8wzmawrua79vg8ytG4cW1ZxOnihBYte9G4~TDO2nryP3M9miCMSrHpDR4eHbmAayYyEazB6BMmFX3lI1mtfwO-pzjk24YBJ2-9kQsNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
        <p className={styles.img2Text}>MAIS QUE 5 ESTRELAS, 200 MILHÕES DE CORAÇÕES<br></br>É taça na raça Brasil</p>
      </div>

    </div>
  )
}
