import React from "react";
export default class ClassComponentProps extends React.Component{
    render(){
        const styling = {
            display:"inline-flex",
            alignItems:"center",
            justifyContent:"center"
        }
        return(
            <>  
                <div style={styling}>
                <div style={{width:"410px",border:"2px solid",padding:"20px",margin:"20px",backgroundColor:"gray",borderRadius:"20px"}}>    
                    <h1>------- Employee Details -------</h1><hr style={{border: "1px solid black"}}/>
                    <h2>Name : {this.props.name}</h2>
                    <h2>Age : {this.props.age}</h2>
                    <h2>Designation : {this.props.designation}</h2>
                    <h2>Place : {this.props.place}</h2>
                    <h2>Experience : {this.props.experience}</h2>
                    <h2>Skills : {this.props.skills.map((skill) =>  
                        <ul>
                            <li>{skill}</li>
                        </ul>   
                    )}</h2>
                </div>
                </div>  
            </>
        )
    }
}

