import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import { IPageProps } from '../types/page-props';
import { DeepPropertyAccess } from '../utils/deep-property-access';
import labels from '../../content/website/labels';
import { HomePageQuery } from './__generated__/HomePageQuery';

const { get } = DeepPropertyAccess;

class BlogIndex extends React.Component<IPageQuery & IPageProps> {
  render(): JSX.Element {
    const { data } = this.props;

    const siteTitle = get(data, 'site', 'siteMetadata', 'title') || labels.notAvailable;

    const posts = get(data, 'allMarkdownRemark', 'edges') || [];

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter', 'title') || get(node, 'fields', 'slug') || labels.notAvailable,
            slug = get(node, 'fields', 'slug') || labels.notAvailable,
            date = get(node, 'frontmatter', 'date') || labels.notAvailable,
            description = get(node, 'frontmatter', 'description') || '',
            excerpt = get(node, 'excerpt') || labels.notAvailable;

          return (
            <article key={slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={slug}>
                    {title}
                  </Link>
                </h3>
                <small>{date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description || excerpt,
                  }}
                />
              </section>
            </article>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

interface IPageQuery {
  data: HomePageQuery;
}

export const pageQuery = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
