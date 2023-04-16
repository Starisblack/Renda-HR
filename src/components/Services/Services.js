import Card from "../Card/Card"
import "./Services.css"
import stress from "../../assets/images/stress.png"
import time from "../../assets/images/time.png"
import accurancy from "../../assets/images/accurancy.png"


const Services = () => {

    const servicesData = [
        {
            img: stress,
            title: "Save and Secure Data Collection",
            desc: "Your payroll&staff data is yours to manage and use at anytime. "
        },

        {
            img: time,
            title: "Save your time",
            desc: "Upload, review and automatically send the right payslip to the right person - by email and on whatsapp."
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
                <h2 className="service-title">Payrolls, Remmitance and Everything In-Between</h2>
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