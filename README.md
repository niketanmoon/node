# node

- Added first file called as app.js
- Ran the code using `node app.js`

## Global Object

- global
- global != this (Empty object)
- globalThis - global in every js engine

## Module.export and require

### CommonJS Modules or cjs

- To use code from any other file or module you can use `require`
- `require(path to the file)`
- Function and variables are not accessible from the require path will not work from one module to another
- Modules are protected by default
- Modules protects their variables and functions from leaking
- For it to work, we need to export it first and then use it
- `module.exports` = {function name, variable}
- Non Strict mode
- Synchronous
- `module.exports` is an empty object

### ESModules or mjs

- By default common js module is configured, to use ES module, we can add package.json file
- Add `{"type": "module"}`
- Now you can use `import {calculateSum} from "./sum"
- Export using `export function calculateSum`
- Runs in Strict Mode
- Asynchronous
- We have to specify .js extension to module
- For index.js as well
