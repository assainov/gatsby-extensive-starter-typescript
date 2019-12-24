declare module '*css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'typography-theme-wordpress-2016' {
  export function overrideThemeStyles(): IDefaultStyles;

  export interface IDefaultStyles {
    'a.gatsby-resp-image-link': {
      boxShadow: string;
    };
  }

  export const googleFonts: any;
}
