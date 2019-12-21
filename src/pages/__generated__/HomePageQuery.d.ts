/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageQuery
// ====================================================

export interface HomePageQuery_site_siteMetadata {
  __typename: "SiteSiteMetadata";
  title: string | null;
}

export interface HomePageQuery_site {
  __typename: "Site";
  siteMetadata: HomePageQuery_site_siteMetadata | null;
}

export interface HomePageQuery_allMarkdownRemark_edges_node_fields {
  __typename: "MarkdownRemarkFields";
  slug: string | null;
}

export interface HomePageQuery_allMarkdownRemark_edges_node_frontmatter {
  __typename: "MarkdownRemarkFrontmatter";
  date: any | null;
  title: string | null;
  description: string | null;
}

export interface HomePageQuery_allMarkdownRemark_edges_node {
  __typename: "MarkdownRemark";
  excerpt: string | null;
  fields: HomePageQuery_allMarkdownRemark_edges_node_fields | null;
  frontmatter: HomePageQuery_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface HomePageQuery_allMarkdownRemark_edges {
  __typename: "MarkdownRemarkEdge";
  node: HomePageQuery_allMarkdownRemark_edges_node;
}

export interface HomePageQuery_allMarkdownRemark {
  __typename: "MarkdownRemarkConnection";
  edges: HomePageQuery_allMarkdownRemark_edges[];
}

export interface HomePageQuery {
  site: HomePageQuery_site | null;
  allMarkdownRemark: HomePageQuery_allMarkdownRemark;
}
