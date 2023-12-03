import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query staticVercelpath0SrccomponentsheaderJs2435595840 {
      allMongodbNewsAppNews {
      distinct(field: {category: SELECT})
    }
}
  `);

  const categories = data.allMongodbNewsAppNews.distinct;

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <footer
      style={{
        marginTop: `var(--space-5)`,
        fontSize: `var(--font-sm)`,
        textAlign: 'center',
      }}
    >
      © {new Date().getFullYear()} &middot; News source
      {` `}
      <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">
        NewsAPI.org
      </a>

      <div style={{ marginTop: '10px' }}>
        {/* Categories */}
        {categories.map((category, i) => (
          <Link
            to={`/${category.toLowerCase()}`}
            key={i}
            style={{ margin: '0 5px', textDecoration: 'none' }}
          >
            {capitalizeFirstLetter(category)}
          </Link>
        ))}

        <br />

        {/* Additional Links */}
        <Link to="/about-us" style={{ margin: '0 5px', textDecoration: 'none' }}>
          About Us
        </Link>
        <Link to="/contact-us" style={{ margin: '0 5px', textDecoration: 'none' }}>
          Contact Us
        </Link>
        <Link to="/terms-and-conditions" style={{ margin: '0 5px', textDecoration: 'none' }}>
          Terms and Conditions
        </Link>
        <Link to="/privacy-policy" style={{ margin: '0 5px', textDecoration: 'none' }}>
          Privacy Policy
        </Link>
        <Link to="/disclaimer" style={{ margin: '0 5px', textDecoration: 'none' }}>
          Disclaimer
        </Link>
        <Link to="/sitemap" style={{ margin: '0 5px', textDecoration: 'none' }}>
          Sitemap
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
