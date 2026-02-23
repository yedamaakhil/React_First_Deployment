import React from "react";
import "./PropsTask.css";
export default class PropsCardsTask extends React.Component{
    render(){
    const styling = {
    display:"inline-flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"15px"
    }
    const imagestyling = {
        width:"300px",
        height:"380px",
        borderRadius:"10px"
    }
        return(
            <>
               <div style={styling}>
                <div className="card">
                    <img style={imagestyling} src={this.props.image} alt="" />
                    <p style={{fontSize:"20px"}}>{this.props.description}</p>
                    <h2>{this.props.price}</h2>
                    <div className="deliverybtn">{this.props.delivery}</div>
                    <div style={styling}>
                        <div className="ratingbox">{this.props.rating}</div>
                        <p style={{fontSize:"20px"}}>{this.props.reviews}</p>
                    </div>
                </div>
               </div>
            </>
        )
    }
}
