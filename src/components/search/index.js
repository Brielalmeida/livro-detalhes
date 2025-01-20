import { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import './Search.css'

export default function Search({maxWidth, minWidth}) {
    
    const [pesquisa, setPesquisa] = useState("")

    const handleMudanca = (e) => {
        setPesquisa(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(pesquisa)
    }

    const css = {
        maxWidth: maxWidth || '',
        minWidth: minWidth || '', 
    }


    return (
        <form onSubmit={handleSubmit} className='search' style={css}>
            <input type='text'placeholder='Pesquisar livro' value={pesquisa} onChange={handleMudanca} />
            <button><BsSearch size={24}/></button>
        </form>
    )
}