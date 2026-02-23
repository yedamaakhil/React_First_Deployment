import React from "react";
import Video1 from "../MultiMedia/Video1.mp4";
import Video2 from "../MultiMedia/Video2.mp4";
export class Videos extends React.Component {
    render() {
        const styling = {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        }
        const videoStyle = {
            width: '600px',
            height: '300px',
            borderRadius: '10px',
        }
        return (
            <>
            <h1 style={{textAlign:"center",color:"green"}}>VIDEOS : </h1><br />
                <div style={styling}>
                    <video controls style={videoStyle}>
                        <source src={Video1} type="video/mp4" />
                    </video>
                    <video controls style={videoStyle}>
                        <source src={Video2} type="video/mp4" />
                    </video>
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Zg837tKfA0U" allowFullScreen></iframe> */}
                </div>
            </>
        );
    }
}