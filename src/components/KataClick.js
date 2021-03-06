import React from 'react';
import './KataClick.scss';
import {Link} from "react-router-dom";


function KataClick(props) {
  return (
    <div className="kata-container">
    <Link to={props.path} name={props.title} className="kataclick-link">
    <div  >
        <h2>{props.title}</h2>
        <p>{props.description} </p>
    </div>
    </Link>
    </div>
    )
}

export default KataClick;