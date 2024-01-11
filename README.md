# ai-cli

## setup
make a new dir  
inside of that new dir clone the `ai-cli` repo  
in the new dir, ***NOT*** the `ai-cli` repo, make a `package.json` file and a `keys.js` file and put your API key in it. It is in the git ignore, but still, put it in the parent Dir of ai-cli, not inside of `ai-cli`.

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
from inside the `ai-cli` dir run the following.

```bash

npm i
npm start

```