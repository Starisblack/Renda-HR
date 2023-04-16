import "./Description.css"

const Description = ({title, subTitle, desc}) => {
    return (
        <div className="desc-box">
            <h2>{title}</h2>
            <p className="subTitle" style={{marginBottom: "2rem", fontWeight: "500" }}>{subTitle}</p>
            <p>{desc}</p>
        </div>
    )
}

export default Description