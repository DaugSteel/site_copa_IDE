import React from 'react';
import styles from './style.module.css'

export default function Capa()
{
  return (
    <div className={styles.headerImg}>
      
      <div className={styles.containerLogo}>

        <img src="https://s3-alpha-sig.figma.com/img/78c0/e64f/55acaedc1718d950383079d49bda3b49?Expires=1671408000&Signature=PKOUQl98hYrUzmIwRos1QXjEKjEgy-ZJHzXGUFfMQ8~~XvkHRhjQeP-3xVh6UWilpx6RWXKBPNnlNj2TPd1v2XHVY6pUjHM8ndpgrBhB4jPRBfpMh19lKZH42lvsuqymFbQNNH-TNEKgXkYrntncUE5mifS06nPMTEIPj5qi~c~kE3uRHHQcR1SWORL5jBajlIUBDrQWPUVdN~~Vi6MPMB9~jJU5JGmWDsAp3p5UjUByjtR2V6qtThiFQZ1ME3NPRDXZIeCPPRS-lKukFxyvlk7NOCIfYOEcM5luEvI6FTBP~B8RQIS-dv3g1-rVkAnc34WhmNdTarSqxOSoHFR8Mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" 
        alt="IDE Logo" className={styles.logo}></img>
        <p className={styles.x}> X </p>
        <img src="https://s3-alpha-sig.figma.com/img/a8e0/374c/fc9527e5659d3ff28cf085be7282c792?Expires=1671408000&Signature=XWci6sJgUOgrqfeCr3GagB5J5S8MtxkZGeWB4UptiWQ9u0ypnGOzceu5rtcWbjMmc8nJLeYOM317xeR7PWgFqaKKo2LkgXqowX~YqAFsl~QHgn~DsnkdqffYQSNz6zRBL493UeHZ~Z~4V6PZl-Pm8eVqU1rsuHqf8fEN23P2KD3QfXKSgAQnFYOXfnq~vgcEHzAhdHpuKikYetWyCOkd5pEyZo1Pk7mWgCj3zIFDJ~A-nbN~YUeQ0r-~YkdO2p3ymKELbc78aYLccVJHaSyq~5RywSNlc2Swh45-0A8y8gBthvVAJzjbe80weuoTAoS8-phz3OKFfLq1uE~OdWKrUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" 
        alt="CBF Logo" className={styles.logo}></img>

      </div>

      <div className={styles.containerTitle}>
        <h1 className={styles.title}>Seleção Brasileira de Futebol</h1>
      </div>

    </div>
  )
}