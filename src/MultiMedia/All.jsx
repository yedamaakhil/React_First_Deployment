import { Audios } from "./Audios";
import { Images } from "./Images";
import { Videos } from "./Videos";

export function All() {
    return (
        <div>
            <Images/><br /><br />
            <Audios/><br /><br />
            <Videos/>
        </div>
    )
}