import './index.css'


export const Instructor = (props) => {
    return (
            <div className="instructor">
                <p className="instructor__title">Instruktor:</p>
                <p className="instructor__name">{props.name}</p>
                <p className="instructor__detail">{props.profession}</p>
            </div>
    )
}