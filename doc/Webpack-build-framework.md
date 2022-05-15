# Webpack build framework Documentation 

- Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
- Aside from applications, Webpack can also be used to bundle JavaScript libraries, hence the decision to use it to build this project.

### Building the library 
- make `webpack.config.js` file and set the required configs 
- a build command is added to `package.json`. Run `npm build`
- a new file is created: `dist/domurl-lib.js`, this file will be shipped to the end-user
