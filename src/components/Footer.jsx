import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";





function SocialLinks() {
    return (
        <>
            <footer>
                <a href="https://x.com/bigmoo_m5809" target="_blank" rel="noopener noreferrer" aria-label="Visit my Twitter profile">
                <RiTwitterXFill size={30} />
                </a>

                <a href="https://www.facebook.com/mmugeta" target="_blank" rel="noopener noreferrer" aria-label="Visit my Facebook profile">
                <FaFacebookSquare size={30} />
                </a>

                <a href="https://www.instagram.com/mugeta23/" target="_blank" rel="noopener noreferrer" aria-label="Visit my Instagram profile">
                <FaInstagram size={30} />
                </a>

                <a href="https://github.com/Mugeta88" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile">
                <FaGithub size={30} />
                </a>
            </footer>
        </>
    )
}

export default SocialLinks