import { Grid } from "@mui/material"
import "./ImgContainer.css"



const ImgContainer = ({img, children, align}) => {
  return (
    <Grid xs={12} item md={5}  className="at-img-container">
       <img className="at-img" src={img} alt="calendar renda" /> 
       <div style={{textAlign: align}}>
        {children}
       </div>
    </Grid>
  )
}

export default ImgContainer