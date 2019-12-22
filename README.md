<h1 align="center">
  Extensive TypeScript Starter for Gatsby
</h1>

This starter is based on my comprehensive tutorial series on [Migrating Gatsby Site to TypeScript](https://extensive.one/migrating-gatsby-to-typescript-series/).

The TypeScript boilerplate is converted from the popular gatsby-starter-blog.

_Have anything to add to this boilerplate? Just create an issue._

## 🚀 Quick start

1.  **Install all dependencies.**


    ```shell
    npm install
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    npm start
    ```

3.  **Type-check your code**

    Just before commiting, run the following code to type-check all your files.

    ```shell
    npm run type-check
    ```

4.  **Build the static website**

    Navigate into your new site’s directory and start it up.

    ```shell
    npm run build
    ```

## 🧐 What's inside?

- TypeScript for **all** Gatsby and React files
- Linting with ESLint & Prettier
- Plugin for SASS/SASS modules
- Automatic generation of GraphQL query interfaces
- GraphQL query result validation with [DeepPropertyAccess](https://github.com/assainov/gatsby-extensive-starter-typescript/blob/master/src/utils/deep-property-access.ts) and default props. Check the [example Bio component](https://github.com/assainov/gatsby-extensive-starter-typescript/blob/master/src/components/bio.tsx).

A quick look at the top-level files and directories you'll see in a Gatsby + TypeScript project.

    .
    ├── .vscode
    ├── node_modules
    ├── src
    ├── content
    ├── .gitignore
    ├── .prettierrcignore
    ├── .prettierrc.js
    ├── gatsby-config.js
    ├── gatsby-config.ts
    ├── gatsby-node.ts
    ├── tsconfig.json
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md