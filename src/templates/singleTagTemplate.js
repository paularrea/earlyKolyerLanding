import React from "react";
import { graphql, Link } from "gatsby";

const SingleTagsTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext;
  return (
    <div>
      <div>
        <h2>Posts about {`${tagName}`}</h2>
      </div>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SingleTagsTemplate;
