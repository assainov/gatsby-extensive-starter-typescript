/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';
import { BioQuery } from './__generated__/BioQuery';
import { DeepPropertyAccess } from '../utils/deep-property-access';
import labels from '../../content/website/labels';

const Bio: React.FC = () => {
  const data = useStaticQuery<BioQuery>(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const author = DeepPropertyAccess.get(data, 'site', 'siteMetadata', 'author') || labels.notAvailable;
  const twitter = DeepPropertyAccess.get(data, 'site', 'siteMetadata', 'social', 'twitter') || labels.notAvailable;
  const { width, height, src, srcSet } = {
    width: DeepPropertyAccess.get(data, 'avatar', 'childImageSharp', 'fixed', 'width') || 0,
    height: DeepPropertyAccess.get(data, 'avatar', 'childImageSharp', 'fixed', 'height') || 0,
    src: DeepPropertyAccess.get(data, 'avatar', 'childImageSharp', 'fixed', 'src') || labels.notAvailable,
    srcSet: DeepPropertyAccess.get(data, 'avatar', 'childImageSharp', 'fixed', 'srcSet') || labels.notAvailable,
  };

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={{ width, height, src, srcSet }}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong> who lives and works in San Francisco building useful things.
        {` `}
        <a href={`https://twitter.com/${twitter}`}>You should follow him on Twitter</a>
      </p>
    </div>
  );
};

export default Bio;
