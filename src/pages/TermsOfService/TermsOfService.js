import { useEffect } from "react";
import "./TermsOfService.css";
import { termsData } from "./TermsOfServiceData";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page tc-page">
      <h1 className="tc-title">RendaHR - Terms Of Service</h1>
      <div className="tc-details-container">
        <p style={{ marginBottom: "30px" }} className="intro-text">
          Welcome to RendaHR, a comprehensive human resources management
          software designed to simplify your HR processes. Please read these
          Terms of Service carefully before using our software. By using
          RendaHR, you agree to these Terms of Service.
        </p>

        {termsData?.map((term) => {
          return (
            <div key={term.title} style={{ marginBottom: "30px" }}>
              <p className="tc-detail-title">{term.title} </p>
              <p className="tc-detail-desc">{term.desc}</p>
              <p className="tc-detail-desc">{term.subDesc}</p>

              {/* present only at Transaction charge section */}
              <div>
                <p className="tc-detail-title">{term.subContent?.title}</p>
                <ul>
                  {term.subContent?.content.map((content) => {
                    return <li className="tc-transaction">{content}</li>;
                  })}
                </ul>
              </div>

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

              {/* Table for SLA commitment section */}

              {term.title === "SLA commitment for paid customers" && (
                <div >
                  <table className="tc-table">
                    <colgroup>
                      <col class="one" />
                      <col class="two" />
                      <col class="three" />
                      <col class="four" />
                    </colgroup>
                    <thead>
                      <tr className="tc-table-title">
                        <th>SN</th>
                        <th>Description</th>
                        <th>SLA Resolution time (*)</th>
                        <th>Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      {term.slaTable?.map((table) => {
                        return (
                          <tr key={table.sn} className="sla-details">
                            <th>{table.sn}</th>
                            <th>{table.desc}</th>
                            <th>{table.sla}</th>
                            <th>{table.exp.map(exp => {
                              return <p>{exp}</p>
                            })}</th>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  <div>
                    {term.extraDesc?.map((desc) => {
                      return <p className="tc-detail-desc">{desc}</p>;
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TermsOfService;
