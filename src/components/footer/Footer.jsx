import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import f from '../assets/img/f.png';
import i from '../assets/img/i.png';
import './footer.css';

const Footer = () => {


    return (<>
        <footer>
            <div className='divLeftSideFooter'> <Link to="/"><h2 className='clsLogo'><span>.</span>Mov</h2></Link>
            <a>Imprint</a></div>
            <div className='divMiddleFooter'><a href="https://www.instagram.com"><img src={i} alt="" /></a><a href="https://www.facebook.com"><img src={f} alt="" /></a></div>
            <div></div>
        </footer></>);
}

export default Footer;