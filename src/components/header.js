import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbNewsAppNews {
        distinct(field: category)
      }
    }
  `);

  const categories = data.allMongodbNewsAppNews.distinct;

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        flexDirection: `column`, // Stack items vertically on mobile
        alignItems: `center`,    // Center items horizontally on mobile
        justifyContent: `space-between`,
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: `var(--font-lg)`,
          textDecoration: `none`,
          marginBottom: '10px',  // Add margin for spacing on mobile
        }}
      >
        {props.siteTitle}
      </Link>

      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexWrap: 'wrap',        // Allow items to wrap into multiple lines
          justifyContent: 'center', // Center items horizontally
        }}
      >
        {categories.map((category, i) => (
          <Link
            to={`/${category}`}
            key={i}
            style={{
              display: 'inline-block',
              margin: '5px',
            }}
          >
            {capitalizeFirstLetter(category)}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
