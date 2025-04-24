import React from "react";

const Card = (props) => {
    return (
        <div>
            <div>   </div>
            
                    <div className="card border-secondary gx-4"  style={{ width:"14rem" , height: '400px' }}>
                        <img src={props.img} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt="..." />
                        <div className="card-body align-center">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text ">{props.description}</p>
                            <div>
                            <a href="#" className="btn btn-light mb-0">Seguir leyendo...</a>
                            </div>
                           
                        </div>
                    </div>
                </div>
            
       
    )
}

export default Card;

/* col-12 col-sm-6 col-md-4 col-lg-3 mb-4"*/