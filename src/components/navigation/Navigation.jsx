import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import sr from '../assets/img/search.png';
import { useNavigate } from 'react-router-dom';
import './navigation.css';
import mi from '../assets/img/menu-icon.png';
import { useEffect } from 'react';


const Navigation = () => {

    const navigate = useNavigate();
    let urlString = '/searchresults/';
   const[strSearchName, setStrSearchName] = useState('');

    const clickHandler = (event) => {
        if(strSearchName !== ''){
          navigate(urlString + strSearchName + '');
        console.log("Navi 1 ", strSearchName)  
        }else{
            return;
        }
        
    }

    useEffect(
        ()=>{
            if(strSearchName){
             console.log('Jetzt! ')
             navigate(urlString + strSearchName + '');
            }
        }
        ,
        [strSearchName]
    )

  
        const handleRefresh = () => {
            navigate("/");
          window.location.reload();
        };

    return (<>
        <nav>
            <div className='navLeft'>
                <Link to="/"><h2 className='clsLogo' onClick={handleRefresh}> <span>.</span> Mov</h2> </Link>
            </div>
            <div className='navCenter'>
                {/*    <Link to="detailspage">Detailspage</Link> */}
                <div className='navCenterSearchDiv'>
              <img  src={sr} onClick={clickHandler} alt="Search"/>
                <input type="text" onChange={(e)=>{setStrSearchName(e.target.value)}} />
                </div>
            </div>
            <div className='navRight'></div>
        </nav>
    </>);

}

export default Navigation;