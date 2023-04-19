import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();

  const footerSections = [
    {
      title: "Products",
      content: [
        { title: "Technical Hiring", url: "/" },
        { title: "CoreHR Software", url: "/" },
        { title: "Payroll Management", url: "/payroll" },
        { title: "People Management", url: "/" },
      ],
    },

    {
      title: "Company",
      content: [
        { title: "About us", url: "/" },
        { title: "FAQs", url: "/faqs" },
        { title: "Talk to an expert", url: "/" },
      ],
    },

    {
      title: "Legal",
      content: [
        { title: "Terms & Conditions", url: "/" },
        { title: "Privacy", url: "/" },
      ],
    },
  ];


  const year = new Date().getFullYear();

  let footerBgColor;

  if (location.pathname === "/pricing") {
    footerBgColor = "#F4F7FA";
  }

  return (
    <div style={{ background: footerBgColor }} className="footer-container">
      <footer>
        <div className="row w-100">
          <div className="col-12 col-lg-4 footer-logo">
            <div>
              <Logo height="50px" />
            </div>
            <p className="logo-text">
              ReendaHR is an AI Powered Core-HR Software for people management
              and everything in between.
            </p>
          </div>

          <div className="col-12 col-lg-7">
            <div className="footer-sections">
              {footerSections.map((section) => {
                return (
                  <div key={section.title}>
                    <h6>{section.title}</h6>
                    <ul>
                      {section.content.map((content) => {
                        return (
                          <li key={content.title}>
                            <a href={content.url}>{content.title}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
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
  );
};

export default Footer;
