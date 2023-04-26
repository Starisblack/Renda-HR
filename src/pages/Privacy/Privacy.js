import "./Privacy.css";
import { useEffect } from "react";
import { privacyData } from "./privacyData";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page pr-page">
        <h1 className="tc-title"> Privacy Policy for RendaHR</h1>
      <div className="tc-details-container">
        
        <p className="intro-text">
          {" "}
          RendaHR is committed to protecting the privacy of its users. This
          Privacy Policy explains how RendaHR collects, uses, and discloses
          information about you when you use our website or services.
        </p>

        {privacyData.map((privacy) => {
          return (
            <div key={privacy.title}>
              <p className="tc-detail-title">{privacy.title} </p>

              <p className="tc-detail-desc">{privacy.desc}</p>

              <ul className="ul-list">
                {privacy.descLists?.map((list) => {
                  return <li key={list}>{list}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Privacy;
