import f from '../assets/img/f.png';
import i from '../assets/img/i.png';
import './footer.css';

const Footer = () => {
    return (<>
        <footer>
            <div className='divLeftSideFooter'><h2><span>.</span>Mov</h2><a href="">Imprint</a></div>
            <div className='divMiddleFooter'><img src={i} alt="" /> <img src={f} alt="" /></div>
            <div></div>
        </footer></>);
}

export default Footer;