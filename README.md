# node-ai-cli

## From NPM

Install from NPM by running

```bash

npm i -g node-ai-cli

```

## setup from NPM

```bash

```

make a `keys.js` file in the root and put your API key in it. It is in the git ignore so it will never be committed to git.

### ../keys.js file

```js

export const OPENAI_API_KEY='your-key-example';
export default OPENAI_API_KEY;

```

### Run it

Now `node-ai-cli` can be used in your terminal or powershell, any where.

```bash

node-ai-cli

```

## Install from src (clone of this repo)

Follow the setup to create `keys.js` then run from the `node-ai-cli` dir run `npm install -g .` the dot signifying this folder is the module and the `node-ai-cli will be available`.

```bash

npm i -g .

```