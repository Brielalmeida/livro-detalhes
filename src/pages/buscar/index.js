

import Circle from '../../components/circle'
import Livro from '../../components/livro';
import Search from '../../components/search'
import './Buscar.css'
import { BsFilter} from "react-icons/bs"; 

export default function Buscar() {

    const qualquer = [1, 2, 3, 4, 5]

    return (
        <div className='buscar'>
            <div className='pesquisa'>
                <Search/>
                <Circle icon={<BsFilter size={24}/>} ></Circle>
            </div>
            <div className='lista'>
                {qualquer.map(num => <Livro/>)}
            </div>

        </div>
    )
}