import { Header } from '../Components/Header'
import aboutImg from '../assets/about.svg'
import styles from '../styles/pages/sobre.module.css'

export function Sobre() {
  return (
    <>
     <Header text=" Sobre Natacha Carvalho" image={aboutImg} />
     <div className={styles.containerSobre}>
      <img src='src/assets/olamundo2.png'></img>
      <div className={styles.textoSobre}>
      <h2> Como tudo começou... </h2>
      <p> Possuo uma trajetória profissional extensa e estou no mercado de trabalho desde os 18 anos de idade. Minha primeira formação foi em técnico em patologia clínica e, na escola que fiz o ensino médio, FAETEC, tínhamos aula básica de programação, aprendi a estilizar meus blogs pessoais e pude ter a oportunidade de ter um primeiro contato bem positivo, porém, não segui por esse caminho. Entrei para a UFRJ e me graduei no curso de Letras – Português – Literaturas e foi no final da graduação de letras que reacendi minha paixão pela área de tecnologia, especificamente em programação. </p>
      <p> Durante a pandemia de 2020, participei de um projeto chamado Ubuntu Lab que tinha como incentivo tornar as partes marginalizadas da cidade mais inteligente e nele formamos grupos que criaram diversas ideias inclusivas. A partir disso, surgiu o Tela Preta Tech, projeto em que eu e mais três mulheres gerenciamos e esse projeto tinha como objetivo levar o conhecimento tecnológico para as favelas. Nele trabalhamos letramento tecnológico, inclusão digital e conhecimento básico em programação, durante esse projeto a vontade de aprender mais sobre tecnologia cresceu e fui estudando por conta própria, consultando amigos e vídeos no Youtube, aqui ao lado está meu primeiro “Olá mundo” em Java, foi um início tão excitante que até guardei o print. </p>
      <p> Atualmente estou em formação junto ao projeto PretaLab da organização Olabi no 6º ciclo de formação básica. A minha pretensão é aprender, me autodesenvolver e aplicar meus conhecimentos de modo a fazer da tecnologia um caminho de esperança e melhorias para a humanidade. </p>
      </div>
     </div>
    </>
  )
}