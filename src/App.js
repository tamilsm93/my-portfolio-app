import logo from './logo.svg';
import './App.css';
import PersonalInfo from './components/PeronalInfo';
import IntroInfo from './components/IntroInfo';

function App() {
  return (
    <div className="app">
      <IntroInfo />
      <PersonalInfo />
    </div>
  );
}

export default App;
