import React, { useState } from 'react';


const Comp1 = () => {
  const [theme , setTheme] =useState('light');
  const toggleThemeeeee = () =>{
    setTheme((beforetheme => (beforetheme==="light" ? "dark" : "light")));
  }
    
   //second things.........

  
  return (
    <div className={`comp1 ${theme}`}>
    <h1>Hello from comp1</h1>
    <p>This is a sample component.</p>
    <button className={`btn ${theme}`} onClick={
      toggleThemeeeee
    } >switch to  {theme==="light"?"dark":"light  "} mode  </button> 
    </div >
  );
};


 


export default Comp1;
