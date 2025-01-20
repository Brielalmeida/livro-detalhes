import './Card.css'

export default function Card({children, link=false}) {

    const css = link? 'link' :'';

    return (
        <section className={`card ${css}`}>
            {children}
        </section>
    )
}