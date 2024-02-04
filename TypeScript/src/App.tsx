import relogodeveloper from './assets/relogo.png';
import './App.css'
import Form from './components/Form';
import Task from './components/Task';

function App() {

  return (
    <div className='general-app-container'>
      <img 
        src={relogodeveloper}
        className='redeveloper-logo'
        alt='redeveloper-logo'
      />
      <h1 className='app-title'>Todo-List</h1>
      <div className='app-container'>
        <Form />
        <Task/>
      </div>
      
    </div>
  )
}

export default App
