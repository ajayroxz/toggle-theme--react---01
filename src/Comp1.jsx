import React, { useState } from 'react';


const Comp1 = () => {
  const [theme , setTheme] =useState('light');
  const toggleTheme = () =>{
    setTheme((beforetheme => (beforetheme==="light" ? "dark" : "light")));
  }
    
   

  
  return (
    <div className={`comp1 ${theme}`}>
    <h1>Hello from comp1</h1>
    <p>This is a sample component.</p>
    <button className={`btn ${theme}`} onClick={
      toggleTheme
    } >click to change the theme</button> 
    </div >
  );
};

 


export default Comp1;
