import { useNavigate } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar(){

    const router = useNavigate();

    return(
        <div className="parentdiv">
            
        <div className="Navbar2">
                <div className="leftNavbar2">
                    <div id='leftnavbarimg'><img alt="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AYuFGgIsA4rAJQx8PHoRfNMynIBvjhE6svCNXovlw6qmiaDi98LKXHFM_pCmrmGYOkA&usqp=CAU"/></div>
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