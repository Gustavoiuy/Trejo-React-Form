
import reactLogo from './assets/react.svg'

import './App.css'
import CustomForm from './Components/CustomForm/CustomForm'

function App() {

  return (
    <>
      
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      
      <CustomForm />

    </>
  )
}

export default App
