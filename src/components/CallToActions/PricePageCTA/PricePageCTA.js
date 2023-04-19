import { Grid } from "@mui/material"
import "./PricePageCTA.css"

const  PricePageCTA = () => {
  return (
    <div className="price-cta">
        <Grid container>
           <Grid item xs={12} md={5} >
                <h2>Free for small teams</h2>
           </Grid>

           <Grid item xs={12} md={7} >
                <h3>RendaHR is Free for teams less than 10 employees. Get started now!</h3>
             <div className="price-cta-btns">
                <button className="free-btn">Start for Free</button>
                <a href="https://calendly.com/reactng/rendahr" target="_blank" rel="noreferrer" className="sales-btn">Speak to Sales</a>
             </div>
           </Grid>
        </Grid>
    </div>
  )
}

export default PricePageCTA