import './index.css'


export const Venue = (props) => {
    return (
            <div className="place">
                <p className="place__title">Konání:</p>
                <p className="place__detail">{props.street}</p>
                <p className="place__detail">{props.city}</p>
            </div>
    )
}