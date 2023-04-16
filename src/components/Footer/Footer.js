import Logo from "../Logo/Logo"
import "./Footer.css"

const Footer = () => {

    const footerSections = [{
        title: "Products",
        content: ["Technical Hiring",
            "CoreHR Software",
            "Payroll Management",
            "People Management"]
    },

    {
        title: "Company",
        content: ["About us", "FAQs", "Talk to an expert"]
    },

    {
        title: "Legal",
        content: ["Terms & Conditions", "Privacy"]
    }

    ]

    const year = new Date().getFullYear()

    return (
        <div className="footer-container">
            <footer
            >
                <div className="row w-100">

                    <div className="col-12 col-lg-4 footer-logo">
                        <div>
                            <Logo height="50px" />
                        </div>
                        <p className="logo-text">ReendaHR is an AI Powered Core-HR Software for people management and everything in between.</p>
                    </div>

                    <div className="col-12 col-lg-7">


                        <div className="footer-sections">
                            {footerSections.map(section => {

                                return <div key={section.title}>
                                    <h6>{section.title}</h6>
                                    <ul>
                                        {section.content.map(content => {
                                            return <li key={content}>{content}</li>
                                        })}
                                    </ul>
                                </div>
                            })}


                        </div>


                    </div>

                </div>

                <hr />
                <div className="copyright">
                    <p>Copyright RendaHR. {year} All rights reserved.</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer