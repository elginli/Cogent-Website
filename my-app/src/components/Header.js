import { Link } from 'react-router-dom';

export default function Header(props){
    return(
        <nav>
            <p>Header</p>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

