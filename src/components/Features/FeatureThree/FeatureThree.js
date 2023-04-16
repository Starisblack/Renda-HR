import Description from "../FeaturesCard/Description/Description"
import ImageContent from "../FeaturesCard/ImageContent/ImageContent"
import tax from "../../../assets/images/tax.jpg"
import "./FeatureThree.css"

import React from 'react'

const FeatureThree = () => {
    return (
        <section id="feature-three">

            <div className="row d-flex align-items-center">

                <div className="col-12 col-lg-6">
                    <ImageContent img={tax}
                        height="80%"
                        width="80%"
                    />
                </div>
                <div className="col-12 col-lg-6 desc-box-three" >
                    <Description
                        title="Leave Tax Filling & Other Remittances to Us"
                        desc="When it is time for Remittance, rest easy -we’ve got you covered. RendaHR takes care of all remittances for your staff - Health, Tax, Mortgage, Pensions Etc..."
                    />
                    <div className="amt-container">
                        <div className="amt-box">
                            <h1>$5B</h1>
                            <p>Salaries Disbursed</p>
                        </div>

                        <div className="amt-box">
                            <h1>$5M</h1>
                            <p>Remittances
                                Done</p>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default FeatureThree