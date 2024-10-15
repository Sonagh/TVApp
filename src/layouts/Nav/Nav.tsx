import { Link } from 'react-router-dom';
import './Nav.scss';
import {useEffect, useState} from "react";

function Nav() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(true);
    }, []);

  return (
    <nav className="nav">
        {isAuthenticated &&
          <div className="avatar-block">
            <img className="avatar" src="https://avatar.iran.liara.run/public" alt="name"/>
            <span className="name">Daniel</span>
          </div>
        }

        <div className="search-block">
            <div className="icon-wrapper">
                <i className="icon icon-search"/>
            </div>
            <input className="form-control" type="text" placeholder="Search"/>
        </div>

        <Link className="nav-item active" to="/">
            <div className="icon-wrapper">
            <div className="icon-wrapper">
                    <i className="icon icon-home"/>
                </div>
            </div>
                <span className="nav-item-text">Home</span>
        </Link>
        <Link className="nav-item" to="/tv-show">
            <div className="icon-wrapper">
                <div className="icon-wrapper">
                    <i className="icon icon-tv-shows"/>
                </div>
            </div>
            <span className="nav-item-text">TV Show</span>
        </Link>
        <Link className="nav-item" to="/movies">
            <div className="icon-wrapper">
                <div className="icon-wrapper">
                    <i className="icon icon-movies"/>
                </div>
            </div>
            <span className="nav-item-text">Movies</span>
        </Link>
        <Link className="nav-item" to="/genres">
            <div className="icon-wrapper">
                <div className="icon-wrapper">
                    <i className="icon icon-genres"/>
                </div>
            </div>
            <span className="nav-item-text">Genres</span>
        </Link>
        <Link className="nav-item" to="/watch-later">
            <div className="icon-wrapper">
                <div className="icon-wrapper">
                    <i className="icon icon-watch-letter"/>
                </div>
            </div>
            <span className="nav-item-text">Watch later</span>
        </Link>

        <div className="nav-bottom">
            <button>Language</button>
            <button>Get Help</button>
            <button>Exit</button>
        </div>
    </nav>
  )
}

export default Nav
