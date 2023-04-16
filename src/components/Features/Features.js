import "./Features.css"
import FeatureOne from "./FeatureOne/FeatureOne"
import FeatureTwo from "./FeatureTwo/FeatureTwo"
import FeatureThree from "./FeatureThree/FeatureThree"

const Features = () => {
    return (
        <div className="features">

         <FeatureOne />
         <FeatureTwo />
         <FeatureThree />
         
        </div>
    )
}

export default Features