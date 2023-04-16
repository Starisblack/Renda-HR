import Card from "../Card/Card"
import "./Services.css"
import stress from "../../assets/images/stress.png"
import time from "../../assets/images/time.png"
import accurancy from "../../assets/images/accurancy.png"


const Services = () => {

    const servicesData = [
        {
            img: stress,
            title: "Stress-free employee data collection",
            desc: "This software is very easy for you to manage. You can use it as you wish."
        },

        {
            img: time,
            title: "Save your time",
            desc: "Upload, review and automatically send the right payslip to the right person - by email and on mobile."
        },
        {
            img: accurancy,
            title: "Accuracy",
            desc: "Say goodbye to manual approach to payroll management. "
        },
    ]


    return (
        <section id="services">
            <div>
                <h2 className="service-title">Prepare Payroll Automatically</h2>
                <div className="row">

                    {servicesData.map(service => {

                        return <div key={service.title} className="col-12 col-md-6 col-lg-4">
                            <Card
                                title={service.title}
                                img={service.img}
                                desc={service.desc}
                            />
                        </div>
                    })}

                </div>

            </div>
        </section>
    )
}

export default Services