import { Header } from '../Components/Header';
import portfolioImg from '../assets/portfolio.svg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/pages/portfolio.module.css'
import siteModulo1 from '../assets/siteModulo1.png'
import siteModulo2 from '../assets/siteModulo2.png'
import siteModulo3 from '../assets/siteModulo3.png'

export function Portfolio() {
  return (
    <>
     <Header text=" Trabalhos " image={portfolioImg} />

     <div className={styles.cartoes}>

     <Card style={{ width: '18rem' }} className={styles.cartao}>
      <Card.Img variant="top" src={siteModulo1} />
      <Card.Body>

        <div className={styles.cartaoTexto}>
        <Card.Title>Pretalab - Módulo 1</Card.Title>
        <Card.Text>
          Projeto de Portfolio desenvolvido para aplicar os conceitos de HTML e CSS aprendidos no curso Pretalab.
        </Card.Text>
        </div>

        <div className={styles.botoes}>
        <a href="https://github.com/eu1natacha/Portfolio-Natacha-Carvalho-Pretalab" alt="Repositório Pretalab Módulo 1">
        <Button variant="secondary">GitHub</Button></a>
        <a href="https://portfolio-natacha-carvalho.netlify.app/" alt="Pretalab Módulo 1">
        <Button variant="secondary">Netlify</Button></a>
        </div>
      </Card.Body>
     </Card>

     <Card style={{ width: '18rem' }} className={styles.cartao}>
      <Card.Img variant="top" src={siteModulo2} />
      <Card.Body>

        <div className={styles.cartaoTexto}>
        <Card.Title>Pretalab - Módulo 2</Card.Title>
        <Card.Text>
          Projeto de lista de tarefas desenvolvido para aplicar os conceitos de JavaScript aprendidos no curso Pretalab.
        </Card.Text>
        </div>

        <div className={styles.botoes}>
        <a href="https://github.com/eu1natacha/modulo-dois-lista-de-tarefas" alt="Repositório Pretalab Módulo 2">
        <Button variant="secondary">GitHub</Button></a>
        <a href="https://listadetarefasnatacha.netlify.app/" alt="Pretalab Módulo 2">
        <Button variant="secondary">Netlify</Button></a>
        </div>
      </Card.Body>
     </Card>

     <Card style={{ width: '18rem' }} className={styles.cartao}>
      <Card.Img variant="top" src={siteModulo3} />
      <Card.Body>

        <div className={styles.cartaoTexto}>
        <Card.Title>Pretalab - Módulo 3</Card.Title>
        <Card.Text>
          Projeto de portfolio desenvolvido para aplicar os conceitos de React aprendidos no curso Pretalab.
        </Card.Text>
        </div>

        <div className={styles.botoes}>
        <a href="https://github.com/eu1natacha/projeto-final-react-pretalab" alt="Repositório Pretalab Módulo 3">
        <Button variant="secondary">GitHub</Button></a>
        <a href="https://projeto-final-react-pretalab-mocha.vercel.app/" alt="Pretalab Módulo 3">
        <Button variant="secondary">Vercel</Button></a>
        </div>
      </Card.Body>
     </Card>

     </div>
    </>
  )
}