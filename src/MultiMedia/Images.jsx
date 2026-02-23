import CarImage from '../MultiMedia/Car.png';
import BikeImage from '../MultiMedia/Bike.png';
import ShipImage from '../MultiMedia/Ship.png';
import AreoplaneImage from '../MultiMedia/Aeroplane.png';
export function Images() {

    const styling = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
    const ImgStyle = {
        width: '350px',
        height: '350px',
        borderRadius: '10px',
    }

    return(
        <>
        <h1 style={{textAlign:"center",color:"orange"}}>IMAGES : </h1><br />
        <div style={styling}>
            <img style={ImgStyle} src={BikeImage} alt="Bike" />
            <img style={ImgStyle} src={CarImage} alt="Car" />
            <img style={ImgStyle} src={ShipImage} alt="Ship" />
            <img style={ImgStyle} src={AreoplaneImage} alt="Aeroplane" />
        </div>
        </>
    )
}