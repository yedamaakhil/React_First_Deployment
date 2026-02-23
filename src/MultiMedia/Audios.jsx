import Audio1 from "../MultiMedia/Audio1.mp3";
import Audio2 from "../MultiMedia/Audio2.mp3";
import Audio3 from "../MultiMedia/Audio3.mp3";
import Audio4 from "../MultiMedia/Audio4.mp3";
export function Audios() {
    const styling = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
    return (
        <>
        <h1 style={{textAlign:"center",color:"blue"}}>AUDIOS : </h1><br />
            <div style={styling}>
                <audio controls>
                <source src={Audio1}/>
                </audio>
                <audio controls>
                    <source src={Audio2}/>
                </audio>
                <audio controls>
                    <source src={Audio3}/>
                </audio>
                <audio controls>
                    <source src={Audio4}/>
                </audio>
            </div>
        </>
    );
}