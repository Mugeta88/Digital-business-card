import { MdEmail } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";



function PersonalInfo() {
    return (
        <main>
            <img src="src/assets/profile-pic.jpeg" alt="" />

            <h1>Mugeta Mugeta</h1>
            <h5>Full Stack Software Engineer - MERN</h5>

            <button className="email-btn">
                <MdEmail className="email-icon" size={15} />
                Email
                </button>

            <button className="linkedIn-btn">
                <BiLogoLinkedinSquare className="linkedIn-icon" size={17}/>
                LinkedIn
                </button>
        </main>
    )
}

export default PersonalInfo