import './App.css';
import Posts from './Posts';
import Example from './Example';
import Main from './ReactContext/Main';
import ContextConsumer from './ReactContext/ContenxtConsumer';

function App() {
  return (
    <Main>
      <div className="App">
        {/* <Posts /> */}
        {/* <Example /> */}
        <ContextConsumer/>
      </div>
    </Main>
  );
}

export default App;
