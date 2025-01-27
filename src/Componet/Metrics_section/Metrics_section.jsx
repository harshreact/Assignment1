import "./Metrics_section.css";

const Metrics_section = () => {
  return (
    <section className='metrics_section'>
        <div className='container'>
            <div className='metrics_section_main'>
                <div className='metrics_section_certificate'>
                    <div className="left-panel"></div>
                    <div className="certificate_content">
                        <h3>Key Insights From<br/>The National Customer<br/> Rage Survey</h3>
                        <p className="subtitle">A Longitudinal Survey Of Customer Sentiments<br/>Regarding Complaint-handling In The United States</p>
                    </div>
                    <div className="bottom-panel"></div>
                    <p className="certificate_description">
                        Conducted By Customer Care Measurement & Consulting (CCMC).<br/><br/>
                        In Collaboration With The Center for Services Leadership (CSL) in the W. P. Carey School of Business<br/>
                        at Arizona State University. January 2023
                    </p>
                </div>
                <div className="metrics_section_right">
                    <p>READ THE LATEST NATIONAL CUSTOMER RAGE SURVEY FROM OUR PARTNER: CCMC</p>
                    <div className="right_title">
                        <h4>National Customer Rage Study</h4>
                        <p>A longitudinal Survey of Customer Sentiments Regarding Complaint-<br/>handling in the United State</p>
                    </div>
                    <div className="download_report_btn">
                    <a className='download_report' href="">Download Report</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Metrics_section
