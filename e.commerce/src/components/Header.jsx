import React, { useState } from 'react'
import '../css/Header.css'
import { SlBasket } from "react-icons/sl";
import { IoSunnyOutline } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
function Header() {
    const [theme, setTheme]=useState(false);

    const changeTheme=()=>{
        const root=document.getElementById("root");
        
        if(theme){
            root.style.backgroundColor="black";
            root.style.color="#fff";
        }else{
            root.style.backgroundColor="#fff";
            root.style.color="black";
        }
        setTheme(!theme);
    }
  return (
    <div style={{display:"flex",flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingTop:"5px"}}>
        <div className='flex-row'>
            <img className='logo' src="./src/image/logo.png" alt="" />
            <p className='logo-text'>ARA BUL AL.COM </p>
        </div>
        <div className='flex-row'>
            <input className='search-input' type="text" placeholder='Ürün ara' />
            <div >
            {theme?<IoSunnySharp className='icon' onClick={changeTheme}/>:<IoSunnyOutline className='icon' onClick={changeTheme} />}
            <SlBasket className='icon' />
            </div>
            
        </div>
    </div>
  )
}

export default Header