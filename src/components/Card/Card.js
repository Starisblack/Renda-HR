import "./Card.css"


const Card = ({title, img, desc}) => {
    return (
        <div className="card">
            <div>
                <img src={img} alt={title}/>
            </div>

            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>

        </div>
    )
}

export default Card