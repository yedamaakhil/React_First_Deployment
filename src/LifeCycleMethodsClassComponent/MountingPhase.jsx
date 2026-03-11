import React from "react"

export default class MountingPhase extends React.Component{

    constructor(){
        super();
        this.state = {
            name : "Akhil"
        }
        console.log("Con");
        
    }
    changename = ()=>{
        setTimeout(()=>{
            this.setState({
                name : "Akhil yadav"
            })
        },2000)
    }
    componentDidMount(){
        console.log("did Mount");
        
    }
    render(){
        console.log("rend");
        
        return(
            <>
            <h1>Name : {this.state.name}</h1>
            <button className="button1" onClick={this.changename}>Change Name</button>
            </>
        )
    }
}

