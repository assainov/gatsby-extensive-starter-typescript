/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeoQuery
// ====================================================

export interface SeoQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
  description: string | null;
  author: string | null;
}

export interface SeoQuery_site {
  __typename: "Site";
  siteMetadata: SeoQuery_site_siteMetadata | null;
}

export interface SeoQuery {
  site: SeoQuery_site | null;
}
