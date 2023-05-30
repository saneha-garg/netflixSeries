import React from "react";
import "./index.css";

function Card(props){
    return( 
  <>
  <div id="Services">
      <div class="services">
  <div className="col">
   <div className='card'>
<img src={props.imgsrc} alt="mypic" className="card-img-top" />
<div className="card-body">
<h5 className="card-title">{props.title}</h5>
<p className="card-text">{props.sname}</p>
<a href={props.link} target='_blank' className="btn-primary">
<button> Watch Now</button>
</a>
</div>
</div>  
</div>  
</div>
</div>
    </>
    );
  }
  export default Card;
