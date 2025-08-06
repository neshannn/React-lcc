import { FaHome } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";

const NavItem = [
    {
        id: 1,
        title: "Home",
        to: "/",
        icon: <FaHome />,
    },
    {
        id: 2,
        title: "About",
        to: "/about",
        icon: <FaPerson/>,
    },
    {
        id: 3,
        title: "Contact",
        to: "/contacts",
        icon: <FaPhoneAlt />,
    },
    {
        id: 4,
        title: "Blog",
        to: "/blog",
        icon: <FaBlog />,
    },
    {
        id: 5,
        title: "Movies",
        to: "/Movies",
        icon: <MdLocalMovies />,
    },
    {
        id: 6,
        title: "Register",
        to: "/register",
        icon: <IoIosContact />,
    },

];
export default NavItem