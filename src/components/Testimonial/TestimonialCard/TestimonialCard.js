import "./TestimonialCard.css"
import client from "../../../assets/images/client.png"
import client2 from "../../../assets/images/client2.png"

const TestimonialCard = () => {
    return (
        <div>
        <div className="testimonial-card">
            <p className="test-title">“Dependable, Responsive, Professional”</p>
            <p className="test-desc mobile-view-only">Our favourite things about RendaHR are the easy-to-use Payroll Management System and its well-fit People Management features.  It is worthy to note that their regular product update to solve customers' problems is another key reason why we enjoy using RendaHR.</p>
            <p className="test-desc desktop-view-only">Our favourite things about RendaHR are the easy-to-use Payroll Management System and its well-fit People Management features. It is worthy to note that their regular product update to solve customers' problems is another key reason why we enjoy using RendaHR.</p>
        </div>

        <div className="client-container"> 
            <div className="client-img">
              <div className="desktop-view-only">
              <img src={client} alt="rendahr client"/>
              </div>
              <div className="mobile-view-only">
              <img src={client2} alt="rendahr client"/>
              </div>
            </div>
            <div className="client-details-box">
                <p className="client-name">Esther Howard</p>
                <p className="client-title">CEO, Howard LLC</p>
            </div>
        </div>
        </div>
        
    )
}

export default TestimonialCard