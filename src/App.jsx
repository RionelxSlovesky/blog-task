
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blog from './components/Sections/Blog/Blog'
import Events from './components/Sections/Events/Events'

function App() {

  return (
    <div className='max-w-[1700px] mx-auto'>
      <Navbar></Navbar>
      <Blog></Blog>
      <Events></Events>
    </div>
  )
}

export default App
