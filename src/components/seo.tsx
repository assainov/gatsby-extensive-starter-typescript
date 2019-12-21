/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { SeoQuery } from './__generated__/SeoQuery';
import { DeepPropertyAccess } from '../utils/deep-property-access';
import labels from '../../content/website/labels';

interface IProps {
  description?: string;
  lang?: string;
  meta?: any[]; // eslint-disable-line
  title: string;
}

const SEO: React.FC<IProps> = ({ description = ``, lang = `en`, meta = [], title }) => {
  const data = useStaticQuery<SeoQuery>(
    graphql`
      query SeoQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const siteDescription = DeepPropertyAccess.get(data, 'site', 'siteMetadata', 'description') || labels.notAvailable;
  const siteTitle = DeepPropertyAccess.get(data, 'site', 'siteMetadata', 'title') || labels.notAvailable;
  const siteAuthor = DeepPropertyAccess.get(data, 'site', 'siteMetadata', 'author') || labels.notAvailable;

  const metaDescription = description || siteDescription;
  const pageTitle = title || siteTitle;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteAuthor,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
