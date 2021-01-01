import React from 'react';
import './KataClick.scss';
import {Link} from "react-router-dom";


function KataClick(props) {
  return (
    <Link to={props.path} className="kata-container">
    <div >
        <h2>{props.title}</h2>
        <p>{props.description} </p>
    </div>
    </Link>
    )
}

export default KataClick;