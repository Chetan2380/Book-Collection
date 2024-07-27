import { useNavigate } from "react-router-dom";
import './Navbar.css'

function Navbar(){

    const router = useNavigate();

    return(
        <div className="parentdiv">
            
        <div className="Navbar2">
                <div className="leftNavbar2">
                    <div id='leftnavbarimg'><img alt="icon" src="https://www.freeiconspng.com/thumbs/book-icon/book-icon-black-good-galleries--24.jpg"/></div>
                </div>
                <div className="rightNavbar2">
                    <div className="options">
                        <div onClick={()=>router("/")}>All Books</div>
                        <div onClick={()=>router("/add-book")}>Add Book</div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Navbar;