import { Grid } from "@mui/material"
import "./DescContainer.css"


const DescContainer = ({title, desc, children}) => {
  return (
    <Grid  item  xs={12} md={7}>
         <h1>{title}</h1>
          <p>
            {desc}
          </p>
        <div>
            {children}
        </div>
    </Grid>
  )
}

export default DescContainer