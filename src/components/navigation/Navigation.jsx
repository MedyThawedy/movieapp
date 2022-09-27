import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import sr from '../assets/img/search.png';
import { useNavigate } from 'react-router-dom';
import './navigation.css';


const Navigation = () => {

    const navigate = useNavigate();
    let urlString = '/searchresults/';
    let strSearchName = "";

    const clickHandler = (event) => {
        console.log("Hey! ");
        strSearchName += document.getElementsByTagName('input')[0].value;
        if(strSearchName !== ''){
          navigate(urlString + strSearchName + '');
        console.log("Navi 1 ", strSearchName)  
        }else{
            return;
        }
        
    }

    const onchangeHandler = () => {
        strSearchName += document.getElementsByTagName('input')[0].value;
        navigate(urlString + strSearchName + '');
        console.log("Navi  2 ", strSearchName);
    }

    return (<>
        <nav>
            <div className='navLeft'>
                <Link to="/"><h2 className='clsLogo'> <span>.</span> Mov</h2> </Link>
            </div>
            <div className='navCenter'>
                {/*    <Link to="detailspage">Detailspage</Link> */}
                <div className='navCenterSearchDiv'>
                <img src={sr} onClick={clickHandler} alt="Search"/>
                <input type="text" onChange={onchangeHandler} />
                </div>
            </div>
            <div className='navRight'></div>
        </nav>
    </>);

}

export default Navigation;