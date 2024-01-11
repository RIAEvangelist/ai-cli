# node-ai-cli

## setup
make a new dir  
inside of that new dir clone the `node-ai-cli` repo  
in the new dir, ***NOT*** the `node-ai-cli` repo, make a `package.json` file and a `keys.js` file and put your API key in it. It is in the git ignore, but still, put it in the parent Dir of node-ai-cli, not inside of `node-ai-cli`.

### ../keys.js file
```js

export const OPENAI_API_KEY='your-key-example';
export default OPENAI_API_KEY;

```

### ../package.json file
```js

{
  "type":"module"
}

```



### Run it
from inside the `node-ai-cli` dir run the following.

```bash

npm i
npm start

```