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
            <div className='divMiddleFooter'><img src={i} alt="" /> <img src={f} alt="" /></div>
            <div></div>
        </footer></>);
}

export default Footer;