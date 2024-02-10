import React,{useState} from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [btn, setbtn] = useState('Enable Dark-Mode');
  const fun=()=>{
    if(props.mode==='light')
    {
      setbtn('Enbale Light-Mode');
     // document.body.style.backgroundImage="url(https://media.istockphoto.com/id/1414981473/photo/futuristic-flight-through-a-digital-line-landscape-blue-dust-particle-abstract-background-3d.webp?b=1&s=170667a&w=0&k=20&c=nR3IdRbSFibEagWhoCRY_d-WyEJJSv0BLcIsmJJYN5M=)";
    }
    else{
      setbtn('Enbale Dark-Mode');
     // document.body.style.backgroundImage="url(https://img.freepik.com/free-vector/realistic-bokeh-background_23-2148987168.jpg)";
    }
  }
  

  return (
    <div>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link  className="nav-link" to="/about">About</Link>
      </li>
    </ul>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggle}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={fun}>{btn}</label>
</div>
  </div>
  
</nav>
    </div>
  )
}

Navbar.defaultProps={
    title:'set karo bhai'
}