import { Route, Routes, Navigate } from "react-router"
import Navbar from "./components/Navbar/Navbar"
import Users from "./pages/Users"
import Posts from "./pages/Posts"
import Todos from "./pages/Todos"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          
          <Route path="/users" element={<Users/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/todos" element={<Todos/>}/>
          
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App