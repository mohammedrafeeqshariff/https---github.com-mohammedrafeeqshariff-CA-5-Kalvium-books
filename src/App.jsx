import './App.css'
import Navbar from './components/navbar-component/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, useLocation } from 'react-router-dom'
import Books from './components/books-component/Books'
import Form  from './components/form-component/Form'
import { useState } from 'react'
import Search from './components/search-component/search';



function App() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState(null)
  const location = useLocation()

  const sendDataToBooks = (userData)=>{
    setData(userData)
  }

  return (
    <>
     <div className="app-container">
      <ToastContainer autoClose={4000} position='top-center' closeOnClick={true}/>
      <Navbar/>
      <div className="content-container">
        {location.pathname !== "/register" && <Search setSearch={setSearch}/>}  {/*condition that checks the path and removes the search bar*/}
        <Routes>
          <Route path='/' element={<Books search={search} data={data}/>} />
          <Route path='/register' element={<Form sendDataToBooks={sendDataToBooks} />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
