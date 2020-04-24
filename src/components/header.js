import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import heroImage from '../images/hero.jpg'
import logo from '../images/logo.png'
import NavMenu from './nav'

const Header = ({ siteTitle }) => (
  <header
    style={{
      maxWidth: 1200,
      margin: '0 auto',
      backgroundImage: `url(${heroImage})`,
      marginBottom: `1.45rem`,
      height: 460,
      position: 'relative',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        width: '100%',
        padding: `1.45rem 1.0875rem`,
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        justifyContent: 'space-between'
      }}>

      <h1 style={{ margin: 0 }}>
        <img style={{marginBottom: 0}} src={logo} alt=''/>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <NavMenu />

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
