import React from "react";
import passwordGenerator from "./assets/passwordGenerator.PNG"
import StoreNearby from "./assets/StoreNearby.PNG"
import workDaySchedule from "./assets/workDaySchedule.PNG"
import resume from "./assets/Simian Guo Resume.pdf"
import "./Test.css"

export default class Background extends React.Component {



    render() {
        return (
            <div>
                <section className="page-section section text-white mb-0" id="about" style={{height: '100vh', backgroundColor: 'lightblue', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="container" style={{flexBasis: 'content'}}>
                        <h2 className="page-section-heading text-center text-white">About Me</h2>
                        <div className="row">
                            <div className="col-lg-4 ml-auto">
                                <p className="lead">Experienced at Financial Statements Analysis, Sales Tax and International Business Operations. Highly effective communication and interpersonal skills; noted for
                                being versatile, self-motivated, stable and adapting well to challenging and diverse situations.
                    </p>
                            </div>
                            <div className="col-lg-4 mr-auto">
                                <p className="lead">Currently enrolled in Georgia Tech Coding Boot Camp.
                        Skill: Browser Based Technologies (HTML, CSS, JavaScript, jQuery, Bootstrap)</p>
                            </div>
                        </div>
                        <div className="text-center mt-4">
                            <a className="btn btn-xl btn-outline-light" href={resume} target="_blank" rel="noopener noreferrer"><i
                                className="fas fa-download mr-2"></i>Christy Guo Resume Download</a>
                        </div>
                    </div>
                </section>

                <section className="page-section section portfolio" id="portfolio" style={{backgroundColor: 'white' }}>
                    <div className="container">
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Project Portfolio</h2>
                        <div className="row projectRow">
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 picCss">
                                        <div className="text-center text-white">App to generate password</div>
                                    </div>
                                    <div className="imageContainer"><img className="img-fluid" src={passwordGenerator}
                                        alt="passwordGenerator" /></div>
                                </div>
                                <div><a href="https://github.com/mianmianguo2020/Password-Generator" target="_blank" rel="noopener noreferrer">GitHub
                            repository</a><br /><a href="https://mianmianguo2020.github.io/Password-Generator/"
                                        target="_blank" rel="noopener noreferrer">Deployed version</a></div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 picCss">
                                        <div className="text-center text-white">App to find the Stores nearby and receipts</div>
                                    </div>
                                    <div className="imageContainer"><img className="img-fluid" src={StoreNearby} alt="StoreNearby" />
                                    </div>

                                </div>
                                <div><a href="https://github.com/Miteshmodi003/StoresNearBy" target="_blank" rel="noopener noreferrer">GitHub
                            repository</a><br /><a href="https://miteshmodi003.github.io/StoresNearBy/"
                                        target="_blank" rel="noopener noreferrer">Deployed version</a></div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto">
                                    <div
                                        className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 picCss">
                                        <div className="text-center text-white">App to create work day schedule</div>
                                    </div>
                                    <div className="imageContainer"> <img className="img-fluid" src={workDaySchedule}
                                        alt="workDaySchedule" />
                                    </div>
                                </div>
                                <div><a href="https://github.com/mianmianguo2020/Work-Day-Scheduler" target="_blank" rel="noopener noreferrer">GitHub
                            repository</a><br /><a href="https://mianmianguo2020.github.io/Work-Day-Scheduler/"
                                        target="_blank" rel="noopener noreferrer">Deployed version</a></div>
                            </div>
                        </div>
                    </div>

                </section>

               
            </div>

        );

    }

}


