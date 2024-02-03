import Ai from "./img/ai.jpg";
import Vr from "./img/vr.jpg";
import Hardware from "./img/hardware.jpg";


function About() {


    return (
        <>
            <div className="about-box">
                <h2 className="page-heading">About me</h2>

                <div className="info-small">
                    <span>Peter Penev</span>
                    <span>Plovdiv | Haskovo</span>
                    <span>Bulgaria</span>
                </div>
                <div className="current-employment">
                    <p className="bold employment-text">Currently studying Software Technologies and Design at the University of Plovdiv</p>
                </div>
                <div className="info-main">
                    <p className="info-main-text">
                        Certified Fullstack Developer with expertise in both C# and Python, willing to take on complex programming challenges. My programming journey began at the Mathematics High School in Haskovo, which I graduated in 2021. Further honing my skills, I excelled at SoftUni, graduating in 2023 and consistently ranking among the top students.
                    </p>
                    <p className="info-main-text">Focused on improving my skills and exploring new technology or even other fields beside programming. But I can't replace programming with anything else and never will!</p>
                </div>
                <div className="interests-box">
                    <h3 className="page-heading-secondary">Interests</h3>
                    <div className="interests-main">
                        <div className="interest">
                            <div className="interest-wrapper">
                                <p className="interest-text">Artificial Intelligence</p>
                                <img className="interest-pic" src={Ai} alt="AI"></img>
                            </div>
                        </div>
                        <div className="interest">
                            <div className="interest-wrapper">
                                <p className="interest-text">Virtual Reality</p>
                                <img className="interest-pic" src={Vr} alt="VR"></img>
                            </div>
                        </div>
                        <div className="interest">
                            <div className="interest-wrapper">
                                <p className="interest-text">Hardware</p>
                                <img className="interest-pic" src={Hardware} alt="Hardware"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="final-text">
                    <p>Thank you for taking the time to learn more about me 😊</p>
                </div>
            </div>
        </>
    );
}

export default About;