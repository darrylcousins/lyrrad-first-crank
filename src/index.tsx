/** @jsx createElement */
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
    <section className='some-area fill-height-or-more'>
      { children }
    </section>
  );
};

function Frame ({children}: {children: Children}) {
  return (
    <div className='center-content'>
      { children }
    </div>
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
      <Frame>
        <Greeting name="World"/>
      </Frame>
    </Page>
  );
};

const rootEl = document.getElementById('app');

renderer.render(<App />, rootEl);
