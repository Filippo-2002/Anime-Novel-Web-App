import React, { useState, useEffect, useContext } from "react";
import { AnimeContext } from "../App";
import { Link, useLocation } from "react-router-dom";
import bookIcon from "../Assets/bookIcon.png";
import videoIcon from "../Assets/videoIcon.png";
import "../Styles/nav.css";

export default function Nav() {
    const location = useLocation();
    const [search, setSearch] = useState('');
    const { setAnimeData } = useContext(AnimeContext); 

    const getData = async () => {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
        const resData = await res.json();
        setAnimeData(resData.data); 
    }

    const getNavPositionClass = () => {
        switch (location.pathname) {
            case "/":
                return "nav-anime";
            case "/novels":
                return "nav-novels";
            default:
                return "";
        }
    };

    const getPageTitle = () => {
        switch (location.pathname) {
            case "/":
                return "ANIME";
            case "/novels":
                return "NOVELS";
            default:
                return "";
        }
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    },[search]);

    const navPositionClass = getNavPositionClass();
    const pageTitle = getPageTitle();

    const isCurrentPage = (navClass) => {
        return navClass === navPositionClass;
    };

    const renderNavLink = (to, imgSrc, altText, navClass) => {
        const isCurrent = isCurrentPage(navClass);
        //const linkClass = isCurrent ? "nav-link current" : "nav-link";

        return (
            <Link to={to} className="link-styles">
                <img src={imgSrc} alt={altText} />
                {isCurrent && <h1 style={{fontSize:20}}>{pageTitle}</h1>}
            </Link>
        );
    };

    return (
        <header className="body1">
            <h1 classname="page-title">MyAnimeApp</h1>
            <div className="header">
                <div className="search-box">
                    <input type="search" placeholder="Search your anime/novel"
                        onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <nav className={`nav ${navPositionClass}`}>
                {renderNavLink(
                    "/",
                    videoIcon,
                    "video icon",
                    "nav-anime"
                )}
                {renderNavLink("/novels", bookIcon, "book icon", "nav-novels")}
            </nav>
        </header>
    );
}