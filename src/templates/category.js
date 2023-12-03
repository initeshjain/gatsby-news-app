import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout"

const CategoryTemplate = ({ data }) => {
  const newsarray = data.allMongodbNewsAppNews.nodes;

  const category = data.category.nodes && data.category.nodes[0] && data.category.nodes[0].category;


  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Layout>
      <h1>{capitalizeFirstLetter(category)} Top Headlines</h1>
      <div className="news-container">
        {newsarray.map(news =>
          <div className="news">
            <a href={news.url} target="_blank" rel="noreferrer">
              <img src={news.urlToImage} alt={news.title} />
              <h2>{news.title}</h2>
            </a>
            <p>{news.description}</p>
            <hr />
          </div>
        )}
      </div>
    </Layout>
  )
};

export const query = graphql`
 query ($category: String!) {
  allMongodbNewsAppNews(
    filter: {category: {eq: $category}}
    sort: {publishedAt: DESC}
  ) {
    nodes {
        id
        title
        author
        description
        url
        urlToImage
        publishedAt
        category
    }
  }
  category: allMongodbNewsAppNews(
      filter: { category: { eq: $category } }
      limit: 1
    ) {
      nodes {
        category
      }
    }
}
`

export default CategoryTemplate;
