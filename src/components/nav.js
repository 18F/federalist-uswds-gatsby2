import { Link } from "gatsby"
import React from "react"
import close from "../../node_modules/uswds/dist/img/close.svg"

const Nav = ({ navigation, secondaryLinks }) => (
  <nav role="navigation" className="usa-nav">
    <div className="usa-nav__inner">
      <button className="usa-nav__close">
        <img src={close} alt="close" />
      </button>
      <ul className="usa-accordion usa-nav__primary">
        {navigation.map((navGroup, idx) => (
          <li key={idx} className="usa-nav__primary-item">
            {navGroup.items.length > 1 ? (
              <>
                <button
                  className={`usa-accordion__button usa-nav__link ${
                    idx === 0 ? "usa-current" : ""
                  }`}
                  aria-controls={`extended-nav-section-${idx}`}
                  aria-expanded={false}
                >
                  <span>{navGroup.title}</span>
                </button>
                <ul
                  id={`extended-nav-section-${idx}`}
                  className="usa-accordion__content usa-nav__submenu"
                  hidden
                >
                  {navGroup.items.map((navItem, idx) => (
                    <li key={idx} className="usa-nav__submenu-item">
                      <Link to={navItem.link}>{navItem.text}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                className="usa-nav__link"
                activeClassName="usa-current"
                to={navGroup.items[0].link}
              >
                <span>{navGroup.items[0].text}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className="usa-nav__secondary">
        <ul className="usa-nav__secondary-links">
          {secondaryLinks.map((secondaryLink, idx) => (
            <li key={idx} className="usa-nav__secondary-item">
              <Link to={secondaryLink.link}>{secondaryLink.text}</Link>
            </li>
          ))}
        </ul>
        <form className="usa-search usa-search-small">
          <div role="search">
            <label
              className="usa-sr-only"
              htmlFor="extended-search-field-small"
            >
              Search
            </label>
            <input
              className="usa-input"
              id="extended-search-field-small"
              type="search"
              name="search"
            />
            <button className="usa-button" type="submit">
              <span className="usa-sr-only">Search</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </nav>
)

export default Nav
