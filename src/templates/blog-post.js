import * as React from "react"
import { Link, withPrefix } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          {post.frontmatter.cover && (
            <img
              style={{ maxWidth: "100%", marginBottom: "16px" }}
              src={withPrefix("/covers/" + post.frontmatter.cover)}
              alt="Cover"
            />
          )}
          <p>{post.frontmatter.date}</p>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          {post.frontmatter.author && (
            <p style={{
              fontSize: "16px",
              fontWeight: "normal",
              margin: "-16px 0px 32px",
              color: "#222",
            }}>By {post.frontmatter.author}</p>
          )}
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate