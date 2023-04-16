import "./TestimonialCard.css"
import client from "../../../assets/images/client.png"
import client2 from "../../../assets/images/client2.png"

const TestimonialCard = () => {
    return (
        <div>
        <div className="testimonial-card">
            <p className="test-title">“Dependable, Responsive, Professional”</p>
            <p className="test-desc mobile-view-only">Fermin Apps has collaborated with Mixland team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond.</p>
            <p className="test-desc desktop-view-only">Our favourite things about RendaHR are the easy-to-use UI and its well-fit recruitment features. Their team is also always available to help whenever we are in need of support. It is worthy to note that their regular product update to solve customers' problems is another key reason why we enjoy using RendaHR.</p>
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
                <p className="client-title">CEO, ABC Corporation</p>
            </div>
        </div>
        </div>
    )
}

export default TestimonialCard