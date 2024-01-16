export default function Card(props) {
    return (
        <div className="card-container">
            <div className="card-img-container">
                <img src={props.imageUrl} alt="picture of mount fuji" className="card-img"/>
            </div>
            <div className="card-info-container">
               <img src="/assets/pin.png" alt="pin icon" className="card-icon"/>
               <span className="card-country">Japan</span>
               <span><a className="card-link" href={props.googleMapsUrl}>View on GoogleMaps</a></span>
               <h1 className="card-country-name">{props.title}</h1>
               <p className="card-dates">{props.startDate}-{props.endDate}</p>
               <p className="card-description">{props.description}</p>
            </div>
        </div>
    );
};