import "./FeatureOne.css"
import employee from "../../../assets/images/employee.jpg"
import ImageContent from "../FeaturesCard/ImageContent/ImageContent"
import Description from "../FeaturesCard/Description/Description"

const FeatureOne = () => {
    return (
        <section id="featureOne">
            <div className="row d-flex align-items-center">
                <div className="col-12 col-lg-6">
                    <ImageContent img={employee}
                      height="80%"
                      width="80%"
                     />
                </div>
                <div className="col-12 col-lg-6">
                    <Description 
                        title="Compute Payroll Automatically"
                        subTitle="Get rid of the pitfalls that comes with manual payroll computations."
                        desc="With RendaHR, you can compute allowances and deductions quickly, seamlessly and easily."
                    />
                </div>

            </div>
        </section>
    )
}

export default FeatureOne