import{BrowserRouter,Routes,Route} from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Sighin from './pages/Sighin'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'

export default function App() {
  return 
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/sign-in" element={<Sighin/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/profile" element={<Profile/>} />
  </Routes>
  </BrowserRouter>
}
