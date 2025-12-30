import { MdEmail } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import profilePic from "../assets/profile-pic.jpeg";




function PersonalInfo() {
    return (
        <main>
            <img src={profilePic} alt="Profile picture of Mugeta" />

            <h1>Mugeta Mugeta</h1>
            <h5>Full Stack Software Engineer - MERN</h5>

            <a href="mailto:mugeta88@gmail.com">
                <button className="email-btn">
                    <MdEmail className="email-icon" size={15} />
                    Email
                </button>
            </a>

            <a href="https://www.linkedin.com/in/mugeta-mugeta-68b486245/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile">
                <button className="linkedIn-btn">
                    <BiLogoLinkedinSquare className="linkedIn-icon" size={17}/>
                    LinkedIn
                </button> 
            </a>
        </main>
    )
}

export default PersonalInfo