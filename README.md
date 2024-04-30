# mapc-components
## Overview
This repository contains general-purpose React components for use when building web apps at MAPC. It uses [Storybook](https://storybook.js.org/) to showcase them (see the currently available components [here](https://mapc.github.io/mapc-components/)), and [Rollup](https://rollupjs.org/) to efficiently package them for use in other projects.

## Guiding Principles
Components should be generally useful, configurable, performant, and they should adhere to our current [branding guidelines](#TODO) and [style guide](#TODO). One typical pattern is to develop components as needed in other projects, then pulling them into this repository and making them more generalized.

Many of our projects make liberal use of [React Bootstrap](https://react-bootstrap.github.io/); if these components work well enough in our projects, we likely don't need to create a similar component here. That said, if there's a particular customization of those components that we'd like to repeatedly use, this is the place to add that. [styled-components](https://styled-components.com/) is another often-used library at MAPC, and it can be used here as well. Since this is a component library, we should be thoughtful about (and try to minimize the number of) dependencies we add here.

In general, configuration should be driven by props passed to the component; this allows us to manage state outside the component as needed. Components can have internal state where appropriate, but we should aim to make components in this repository "presentational" to the extent possible.

[eslint](https://eslint.org/) and [prettier](https://prettier.io/) are used to enforce code style (see `.eslintrc.js` and `.prettierrc.js` for specific configuration details)

## Usage
TODO: Notes on how to incorporate these components into other web apps

TODO: npm vs github packages

## Contributing
### Local development
Install dependencies using `yarn`.

To run Storybook locally, use `yarn storybook`, and follow the instructions in the terminal output to open Storybook in your browser (by default, it runs on port `6006` and can be accessed at [http://localhost:6006/](http://localhost:6006/)) .

### Adding a new component
1. Define the component to be built and name it. The examples ahead use the name `MyComponent`.

2. Clone this repository if you haven't already, and create a new branch off of the `main` branch, using kebab-case (e.g., `my-component`)
   
   `git checkout -b my-component`

3. In your new branch, create a new directory under `./src/components/` with that name, using PascalCase (e.g., `./src/components/MyComponent/`
  
   `mkdir ./src/components/MyComponent/`

4. In that directory, create a new React functional component for your component (e.g., `MyComponent.jsx`). This can start by just returning a simple [Fragment](https://react.dev/reference/react/Fragment):
   ```JSX
   import React from "react";

   export const MyComponent: React.FC = () => {
     return (<></>);
   };

   export default MyComponent;
   ```

5. In that same directory, set up a new [story](https://storybook.js.org/docs/get-started/whats-a-story) for the component (e.g. `MyComponent.stories.jsx`). To start, this can also just be a simple placeholder:
   ```JSX
   import React from "react";

   import { MyComponent } from './MyComponent';

   const meta = {
     component: MyComponent,
   };

   export default meta;

   /*
    *👇 Render functions are a framework specific feature to allow you control on how the component renders.
    * See https://storybook.js.org/docs/api/csf
    * to learn how to use render functions.
    */
   export const Primary = {
     render: () => <MyComponent />,
   };
   ```
   and export your component by creating an `index.ts` file in that directory (e.g., `./src/components/MyComponent/index.ts`) and using a named export:
   ```JavaScript
   export { MyComponent } from "./MyComponent";
   ```
   and add your component as a named export from the `index.js` files in the `component` and `src` directories as well.

6. Continue developing your component, adding props to configure it as needed, and testing its functionality by running Storybook locally. Use other components in this repository as an example if it's helpful. 

   Make sure to export your component using a [named export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) from `./src/components/index.ts` so it can be bundled properly by Rollup. You should also bump the `version` in `package.json` (new components warrant a [minor version change](https://semver.org/#spec-item-7)).

7. Once the component is finished (or close to it), open a new [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) (PR) for review. Feel free to open a [draft PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests) if you want to share in-progress code with other collaborators for additional feedback.

8. Once the code is reviewed, approved, and merged to `main`, [GitHub Actions](https://docs.github.com/en/actions) will automatically deploy the updated Storybook. An administrator for this repository can then manually build the distribution artifacts and publish them on [npm](https://www.npmjs.com/).
