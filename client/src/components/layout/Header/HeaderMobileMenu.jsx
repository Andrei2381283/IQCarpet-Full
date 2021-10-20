import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const HeaderMobileMenu = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <Fragment>
            <div className="headerNavigation" onClick={() => setMenuOpened(!menuOpened)}>
                Home
                {/* <option>Home</option>
                <option>Sellers</option>
                <option>How it works</option>
                <option>Support</option>
                <option>My Profile</option>
                <option>Chats</option>
                <option>Terms of use</option>
                <option>Privacy Policy</option>
                <option>Help</option> */}
            </div>
            <div className="headerMobileMenuList" opened={menuOpened.toString()} onClick={() => setMenuOpened(false)}>
                <Link to="/">Home</Link>
                <Link to="/sellers">Sellers</Link>
                <Link to="/how-it-works">How it works</Link>
                <Link to="/support">Help</Link>
                <Link to="/dashboard">My Profile</Link>
                <Link to="/chat">Chats</Link>
                <Link to="">Terms of use</Link>
                <Link to="">Privacy Policy</Link>
            </div>
        </Fragment>
    )
}

export default HeaderMobileMenu