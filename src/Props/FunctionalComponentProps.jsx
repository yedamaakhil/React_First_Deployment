export default function FunctionalComponentProps({name,age,designation,place,experience,skills}){
    const styling = {
        display:"inline-flex",
        alignItems:"center",
        justifyContent:"center"
    }
    return(
        <>{
            <div style={styling}>    
            <div style={{width:"410px",border:"2px solid",padding:"20px",margin:"20px",backgroundColor:"gray",borderRadius:"20px"}}>
                <h1>------- Employee Details -------</h1><hr style={{border: "1px solid black"}}/>
                <h2>Name : {name}</h2>
                <h2>Age : {age}</h2>
                <h2>Designation : {designation}</h2>
                <h2>Place : {place}</h2>
                <h2>Experience : {experience}</h2>
                <h2>Skills : {skills.map((skill) => 
                    <ul>
                        <li>{skill}</li>
                    </ul>
                )}</h2>
            </div>
            </div>
            }
        </>
    )
}
