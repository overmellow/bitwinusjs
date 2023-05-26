import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/common/Home'
import Layout from './components/common/Layout'
import Users from './components/users/Users'
import Profile from './components/auth/Profile';
import Signup from './components/auth/Signup';

function App() {

  return (
    // <>
    // <Home />
    // {/* <Profile /> */}
    // {/* <Users /> */}
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="users" element={<Users />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>    
  )
}

export default App
