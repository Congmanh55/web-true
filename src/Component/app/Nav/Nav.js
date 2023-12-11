import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faSearch } from '@fortawesome/free-solid-svg-icons';
import "./Nav.css";
import logo from "../../Image/2022.08 1.png"

const Nav = () => {
    const location = useLocation();

    const [isSearch, setIsSearch] = useState(false);

    const handleSearch = () => {
        setIsSearch(!isSearch)
    }

    return (
        <div>
            <div className="nav-container">
                <div className="nav-img">
                    <img src={logo} />
                </div>
                <div className="nav-header">
                    <Link to= "/" className={location.pathname === '/' ? 'link-1' : 'link'}>
                        Trang chủ
                    </Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'link-1' : 'link'}>
                        Về chúng tôi
                    </Link>
                    <Link to = "/product" className={location.pathname === '/product' ? 'link-1' : 'link'}>
                        Sản phẩm và dịch vụ
                    </Link>
                    <Link to = "/news" className={location.pathname === '/news' ? 'link-1' : 'link'}>
                        Tin tức
                    </Link>
                    <Link to= "/experience" className={location.pathname === '/experience' ? 'link-1' : 'link'}>
                        Trải nghiệm
                    </Link>
                    <Link to = "/contact" className={location.pathname === '/contact' ? 'link-1' : 'link'}>
                        Liên hệ
                    </Link>

                </div>
                <div className="nav-mobile">
                    
                    {isSearch ?
                        <div>
                            <input className="ip-nav"/>
                        </div>
                    :
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faBars} className="icon-nav" />
                        </div>
                    }
                    <div className="search-bar">
                        <FontAwesomeIcon icon={faSearch} className="icon-nav" onClick={handleSearch}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Nav;