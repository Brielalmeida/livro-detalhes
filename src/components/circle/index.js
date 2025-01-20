import './Circle.css'

export default function Circle({icon, link}) {
    return (
            <a href={link} target='_blanck'>
                <div className='social-item'>
                    {icon}
                </div>     
            </a>
    )
}