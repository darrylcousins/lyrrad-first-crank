# first-crank

```bash
npm init -y
npm install --save parcel@next
npm install --save @bikeshaving/crank
npm install --save-dev @babel/preset-env @babel/preset-react @babel/preset-typescript babel-preset-crank
mkdir src && touch src/index.tsx
mkdir scss && touch scss/index.scss
touch .scss
touch .babelrc
touch index.html
```

## package.json

```json
...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "parcel build index.html",
    "start": "parcel serve index.html",
  },
...
```

## .babelrc

```json
{
  presets: [
     "@babel/preset-env",
     "@babel/preset-react",
     "@babel/preset-typescript",
     "crank",
  ]
}

```

## .scss

```json
{
  "includePaths": ["node_modules"]
}
```

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>First Crank</title>
  </head>

  <body>
    <div id="app"></div>
    <script src="src/index.tsx"></script>
  </body>
</html>
```

## src/index.tsx

```typescript
import {
  createElement,
  Children,
  Element,
} from '@bikeshaving/crank';
import {renderer} from '@bikeshaving/crank/dom';
import './../scss/index.scss';

if (module.hot) {
  module.hot.accept()
};

function Page ({children}: {children: Children}) {
  return (
    <section className='page'>
      { children }
    </section>
  );
};

function Greeting ({name}: {name: string}) {
  return (
    <div>Hello {name}</div>
  );
};

function App(): Element {
  return (
    <Page>
      <Greeting name="World"/>
    </Page>
  );
};

const rootEl = document.getElementById('app');

renderer.render(<App />, rootEl);
```

## start server

```bash
npm run start
```

Visit `http://localhost:1234/`.

