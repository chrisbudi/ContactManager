import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
const Header = props => {
  const { branding } = props;
  return (
    // <div>
    //   <h1 style={HeaderStyle}>{props.branding}</h1>
    // </div>

    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact/Add" className="nav-link">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My Apps'
};

// const HeaderStyle = {
//   color: 'green',
//   fontSize: '50px'
// };

Header.propTypes = {
  branding: PropType.string.isRequired
};

export default Header;
