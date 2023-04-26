import "./TermsOfService.css";
import { termsData } from "./TermsOfServiceData";

const TermsOfService = () => {
  return (
    <div className="page tc-page">
      <h1 className="tc-title">RendaHR - Terms Of Service</h1>
      <div className="tc-details-container">
        <p style={{marginBottom: "30px"}} className="intro-text">
          Welcome to RendaHR, a comprehensive human resources management
          software designed to simplify your HR processes. Please read these
          Terms of Service carefully before using our software. By using
          RendaHR, you agree to these Terms of Service.
        </p>

        {termsData?.map((term) => {
          return (
            <div key={term.title} style={{marginBottom: "30px"}}>
              <p className="tc-detail-title">{term.title} </p>
              <p className="tc-detail-desc">{term.desc}</p>

              {term.title === "Dispute Resolution" ? (
                <ol>
                  {term.descLists?.map((list) => {
                    return <li key={list}>{list}</li>;
                  })}
                </ol>
              ) : (
                <ul className="ul-list">
                  {term.descLists?.map((list) => {
                    return <li key={list}>{list}</li>;
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TermsOfService;
