/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NotFoundPageQuery
// ====================================================

export interface NotFoundPageQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface NotFoundPageQuery_site {
  __typename: "Site";
  siteMetadata: NotFoundPageQuery_site_siteMetadata | null;
}

export interface NotFoundPageQuery {
  site: NotFoundPageQuery_site | null;
}
