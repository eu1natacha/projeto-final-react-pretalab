import { Alien, BracketsCurly, AddressBook } from 'phosphor-react'
import { HeaderProfile } from '../Components/HeaderProfile'
import homeImg from '../assets/Natacha Img.jpg'

import styles from '../styles/pages/inicio.module.css'

export function Inicio() {
  return (
    <>
     <HeaderProfile text="Olá, eu sou Natacha!" image={homeImg}/>
      <div className={styles.homeContainer}>
      <a href="Sobre" target="_self"><div className={styles.cardContainer}>
        <Alien size={150} color="#686AAC" weight="thin" />
        <h2 className={styles.cardTitle}>Vida</h2>
        <p className={styles.cardText}> Conto um pouco sobre mim, minha formação, a história da minha migração de carreira, gostos e curiosidades.</p>
      </div></a>
      <a href="Portfolio" target="_self"><div className={styles.cardContainer}>
        <BracketsCurly size={150} color="#686AAC" weight="thin"/>
        <h2 className={styles.cardTitle}>Código</h2>
        <p className={styles.cardText}>Meu portfólio. Meus aprendizados até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação.</p>
      </div></a>
      <a href="Contato" target="_self"><div className={styles.cardContainer}>
        <AddressBook size={150} color="#686AAC" weight="thin"/>
        <h2 className={styles.cardTitle}>Fale comigo</h2>
        <p className={styles.cardText}>Meus canais de comunicação. Seja para entrevistas de emprego na área de tecnologia ou para trocarmos ideias sobre os estudos.</p>
      </div></a>
     </div>
    </>
  )
}
