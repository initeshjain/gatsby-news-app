import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = (props) => {
  const newsarray = props.data.allMongodbNewsAppNews.edges || [];

  return (
    <Layout>
      <h1>Top Headlines</h1>
      <div className="news-container">
        {newsarray.map(news =>
          <div className="news">
            <a href={news.node.url} target="_blank" rel="noreferrer">
              <img src={news.node.urlToImage} alt={news.node.title} />
              <h2>{news.node.title}</h2>
            </a>
            <p>{news.node.description}</p>
            <hr />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
  allMongodbNewsAppNews(sort: {publishedAt: DESC}) {
    edges {
      node {
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
  }
}
`