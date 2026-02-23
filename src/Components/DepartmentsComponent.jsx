import React from "react";
class DepartmentComponent extends React.Component{
    render(){
        return(
        <>
            <h1>- List of departments:</h1>
            <ol>
                <li>Computer Science</li>
                <li>Electronics</li>
                <li>Mechanical</li>
                <li>Civil</li>
            </ol>
        </>
        )
    }
}
export default DepartmentComponent;