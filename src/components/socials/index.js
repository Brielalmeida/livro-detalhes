import Circle from '../circle'
import './socials.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Socials() {

    const iconStyle = {
        size: 40,
        color: "#000"
    }

    return (
        <div className='socials'>
            <Circle name="Linkedin" link='https://www.linkedin.com/in/gabriel-almeida-ferreira-79a43126b/' icon={<BsLinkedin {...iconStyle}/>}/>
            <Circle name="GitHub" link="https://github.com/Brielalmeida" icon={<BsGithub {...iconStyle}/>}/>
        </div>
    )
}