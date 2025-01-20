import Card from '../card';
import './Livro.css'
import { BsFillStarFill } from "react-icons/bs"; 

export default function Livro({img, titulo, desc, rate, rateNum,num}) {
    return (
        <Card link={true}>
            <div className='livro'>
                <img src='https://m.media-amazon.com/images/I/917lhjWV6kL._UF894,1000_QL80_.jpg'></img>
                <div className='texto'>
                    <h2>Para Todos os garotos que já amei</h2>
                    <div className='info'>
                        <p>Jenny Han (2015)</p>
                    </div>
                    <p>Lara Jean guarda suas cartas de amor em uma caixa azul-petróleo que ganhou da mãe. Não são cartas que ela recebeu de alguém, mas que ela mesma escreveu. Uma para cada garoto que amou — cinco ao todo. São cartas sinceras, sem joguinhos nem fingimentos, repletas de coisas que Lara Jean não diria a ninguém, confissões de seus sentimentos mais profundos. Até que um dia essas cartas secretas são misteriosamente enviadas aos destinatários, e de uma hora para outra a vida amorosa de Lara Jean sai do papel e se transforma em algo que ela não pode mais controlar. “Lara Jean, com seu humor e inocência, confere uma individualidade singular a esta charmosa história de amor.” Publishers Weekly “Os leitores vão se lembrar das irmãs Song e dos garotos de suas vidas mesmo depois de virar a última página deste belo romance.</p>
                </div>
                <div className='avaliacao'>
                    <BsFillStarFill/>
                    <h3>3.5/5</h3>
                    <p>(11)</p>
                </div>
            </div>
        </Card>
        
    )
}