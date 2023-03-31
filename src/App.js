import './App.css'
import Formheader from './components/Formheader';
import Question_form from './components/Question_form';
import Centeredtabs from './components/Tabs';

function App() {
  return (
    <div className="header">
      <Formheader />
      <Centeredtabs />  
      <Question_form /> 
    </div>
  );
}

export default App;


