
import Card from '../../components/card'
import Search from '../../components/search'
import './Home.css'

export default function Home() {
    return (
        <div className='home'>
            <h1 className='titulo'>Encontre o livro perfeito para você!</h1>
            <Search maxWidth='45em' minWidth='20em' />
            <div className='cards'>
                <Card>
                    <h2>+15M</h2>
                    <p>DE LIVROS</p>
                </Card>
                <Card>
                    <img className='google-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Google_Books_logo_2015.svg/1920px-Google_Books_logo_2015.svg.png' alt='Logo do Google Books'></img>
                </Card>
                <Card>
                    <h2>+200</h2>
                    <p>PAÍSES</p>
                </Card>
            </div>

        </div>
    )
}