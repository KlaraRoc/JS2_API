import './index.css'


export const WorkshopIntro = (props) => {
    return (
            <div className="course">
                <p className="course__title">Kurz:</p>
                <p className="course__name">{props.title}</p>
                <p className="course__detail">{props.description}</p>
            </div>
    )
}