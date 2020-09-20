import React  from 'react';
import './App.css'
import { ReactComponent as HomeIcon } from "./icons/home.svg";
import { ReactComponent as DownArrowIcon } from "./icons/arrow_down.svg";
import { ReactComponent as ContactIcon } from "./icons/contact.svg";
import { ReactComponent as LeftArrowIcon } from "./icons/leftarrow.svg";
import { ReactComponent as HTML5Icon } from "./icons/html5.svg";
import { ReactComponent as JavaScriptIcon } from "./icons/javascript.svg";
import { ReactComponent as ReactIcon } from "./icons/react.svg";
import { ReactComponent as ModellingIcon} from "./icons/trading.svg"
import  {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
function App() {
  return (
    <div>
      <head><title>My Portfolio</title></head>
      <Navbar>
        <NavItem icon={<HomeIcon/>}><a href="#intro-section"></a></NavItem>
        <NavItem icon={<ContactIcon/>}><a href="#contact-section"></a></NavItem>
        <NavItem icon={<DownArrowIcon/>}>
        <DropdownMenu/>
        </NavItem>
      </Navbar>
      <div id="intro-section">
        <h1>I'm Ray</h1>
        <h2>a Programmer</h2>
      </div>
      <div id="projects">
        <h3>Featured Projects (Coming Soon)</h3>
        <div className="project-tile">
          <div className="tile1">

          </div>
        </div>
      </div>
      <div id="contact-section">
        <h4>Contact Me</h4>
        <a className="contact-link" style={{color:"rgb(48,48,72)"}} href="https://www.freecodecamp.org/fcc0075b6e1-a9d4-4f3f-8e53-e29ad6c74679" target="_blank">
          Free Code Camp
        </a>
        <a className="contact-link" style={{color:"rgb(48,48,72)"}} href="https://www.linkedin.com/in/raymond-thompson-816071165" target="_blank">
          LinkedIn
        </a>
        <a className="contact-link" style={{color:"rgb(48,48,72)"}} href="https://github.com/ray1842" target="_blank">
          Github
        </a>
    </div>
    </div>
  );
}
{/*Nav Bar code */}
function DropdownMenu(){
  const [activeMenu, setActiveMenu]=useState("main"); //settings
  const[menuHeight, setMenuHeight]=useState(null);

  function calcHeight(el){
    const height=el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props){
    return(
      <a href="#" className="menu-item"
      onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }
  return(
    <div className="dropdown" style={{height:menuHeight}}>
      <CSSTransition 
        in={activeMenu==="main"}
        unmountOnExit
        timeout={500} 
        classNames="menu-primary"
        onEnter={calcHeight}
        >
        <div className="menu">
          My Projects

          {/*HTML/CSS Tab */}
          <DropdownItem 
            leftIcon={<HTML5Icon/>} 
            rightIcon={<ContactIcon/>}
            goToMenu="HTML/CSS"
            >
            HTML/CSS
          </DropdownItem>

          {/*Javascript Tab */}
          <DropdownItem leftIcon={<JavaScriptIcon/>} className="menu-primary">
            <a href="https://github.com/ray1842/FreeCodeCamp-Javascript-Algos">JavaScript Algorithms</a>
          </DropdownItem>

          {/*React.js Tab */}
          <DropdownItem 
            leftIcon={<ReactIcon/>} 
            rightIcon={<ContactIcon/>}
            goToMenu="React.js"
            >
            React.js
          </DropdownItem>

          {/*PineScript Tab*/}
          <DropdownItem 
            leftIcon={<ModellingIcon style={{color:"black"}}/>} 
            rightIcon={<ContactIcon/>}
            goToMenu="PineScript"
            >
            Financial Models (PineScript)
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu==="HTML/CSS"} 
        unmountOnExit
        timeout={500} 
        classNames="menu-secondary"
        >
          <div className="menu">
          <DropdownItem 
          leftIcon={<LeftArrowIcon/>} 
          goToMenu="main"/>
            <DropdownItem ><a href="https://codepen.io/ray126/full/LYpdZKQ" className="dropdown-links">Product Landing Page</a></DropdownItem>
            <DropdownItem ><a href="https://codepen.io/ray126/full/MWazgQa" className="dropdown-links">Technical Document Page</a></DropdownItem>
            <DropdownItem ><a href="https://codepen.io/ray126/full/pojdypz" className="dropdown-links">Survey Page</a></DropdownItem>
            <DropdownItem ><a href="https://codepen.io/ray126/full/zYvPqjK" className="dropdown-links">Tribute Page</a></DropdownItem>
          </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu==="React.js"} 
        unmountOnExit
        timeout={500} 
        classNames="menu-secondary"
        >
          <div className="menu">
          <DropdownItem 
          leftIcon={<LeftArrowIcon/>} 
          goToMenu="main"/>
            <DropdownItem ><a href="https://codepen.io/ray126/full/qBZoaGo" className="dropdown-links">Drum Machine</a></DropdownItem>
            <DropdownItem ><a href="https://codepen.io/ray126/full/jOqarER" className="dropdown-links">Markdown Previewer</a></DropdownItem>
            <DropdownItem ><a href="https://codepen.io/ray126/full/yLOXmGG" className="dropdown-links">Random Quote Generator</a></DropdownItem>
            <DropdownItem ><a href="https://ray1842.github.io/Basic-Calculator/" className="dropdown-links">Calculator</a></DropdownItem>
            <DropdownItem ><a href="https://codepen.io/ray126/full/WNwgLEE" className="dropdown-links">Pomodoro Clock</a></DropdownItem>
          </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu==="PineScript"} 
        unmountOnExit
        timeout={500} 
        classNames="menu-secondary"
        >
          <div className="menu">
          <DropdownItem 
          leftIcon={<LeftArrowIcon/>} 
          goToMenu="main"/>
            <DropdownItem ><a href="https://www.tradingview.com/script/oDmKc1Ro-Alpha-Sutte-Model/" className="dropdown-links">α-Sutte Model</a></DropdownItem>
            <DropdownItem ><a href="https://www.tradingview.com/script/EjI1iGag-Binomial-Option-Pricing-Model/" className="dropdown-links">Binomial Options Pricing Model</a></DropdownItem>
            <DropdownItem ><a href="https://www.tradingview.com/script/zTL0HIBG-Black-Scholes-Model-for-American-Options/" className="dropdown-links">Black's Approximation</a></DropdownItem>
            <DropdownItem ><a href="https://www.tradingview.com/script/dgMumvhd-Black-Scholes-Options-Pricing-Model/" className="dropdown-links">Black-Scholes Model</a></DropdownItem>
            <DropdownItem ><a href="https://www.tradingview.com/script/bEpsKze3-Garch-1-1-Model/" className="dropdown-links">Garch (1,1)</a></DropdownItem>
            <DropdownItem ><a href="https://www.tradingview.com/script/E8zeTYik-Implied-Volatility-Suite/" className="dropdown-links">Implied Volatility Suite</a></DropdownItem>
          </div>
      </CSSTransition>
    </div>
  );
}

function Navbar(props){
 return(
   <nav className="navbar">
     <ul className="navbar-nav">{ props.children }</ul>
   </nav>
 );
}

function NavItem(props){

  const [open,setOpen]=useState(false);

  return(
    <li className="nav-item">
      <a href="#" className="icon-button" 
      onClick={() => setOpen(!open)}> {/*the ! allows you to toggle open and close*/}
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default App;
