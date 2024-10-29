import Question from './components/question';
import { RecoilRoot } from 'recoil';

function App() {
 
  return(
    <>
      <RecoilRoot>
      <div className='App'>
        <header>
          <h1>Quiz Game</h1>
        </header>
        <Question/>
      </div>
      </RecoilRoot>
    </>
  );
}

export default App
