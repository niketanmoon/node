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

## Diving deep into module.exports and require

- When you do `require` it will put all the code inside a function
  i.e. it will wrap the code in function to make it private
- That's why variables and functions are private
- All the code is wrapped inside a function (IIFE)
- IIFE - Immediately Invoked Function Expression
- You can do this by `(function(){})()`
- Node caches the `require`
- require steps
  - Resolving the module
  - Loading the module
  - Compile - Wraps inside IIFE
  - Evaluation of the module - module.exports
  - Caching -- most important

## Libuv and async IO

- Manages all the tasks and connects to OS
- File, timer, db, internet
- Libuv is a C program which makes async io simple
- sync code
- async code
- blocking main thread
- setTimeout(cbfn, 0)

## V8 JS Engine

- Parsing
  - Lexical analysis (Tokenization)
  - Syntax Analysis (AST)
- Ignition Interpreter
- Byte Code
- Execution

Parallel to Ignition Interpreter there is

- Turbofan Compiler
- Optimised Machine Code
- Execution

- The above step also deoptimizes and passed on to ignition interpreter if the type changes
