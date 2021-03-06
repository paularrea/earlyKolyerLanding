import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import {
    filter_post,
    posts_content,
    post_flex,
  } from "../../styles/blog.module.scss";

const RelatedBlogPosts = () => {

  const data = useStaticQuery(graphql`
    query relatedBlogPosts {
      all: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "YYYY MMMM Do")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

    const allPosts = (
        <Grid>
          <Row>
            {data.all.edges.slice(0, 3).map((edge) => {
              const { frontmatter } = edge.node;
              return (
                <Col md={4} sm={6} xs={6}>
                  <div className={filter_post} key={frontmatter.path}>
                    <Link to={frontmatter.path}>
                      <Img
                        fluid={frontmatter.featuredImage.childImageSharp.fluid}
                      />
                      <h5>{frontmatter.title}</h5>
                    </Link>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Grid>
      );
      
  return (
    <div>
      <div className={posts_content}>
        <div className={post_flex}>{allPosts}</div>
      </div>
    </div>
  );
};

export default RelatedBlogPosts;
