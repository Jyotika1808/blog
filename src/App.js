import React from 'react'
import Topbar from './components/topbar/Topbar'
import Home from './components/home/Home'
import Single from './components/single/Single'
import Write from './components/write/Write'
import Setting from './components/setting/Setting'
import Login from './components/login/Login'
import Register from './components/register/Register'

import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  const user = false
  return (
    <Router basename=''>
      <Topbar />
      <Routes>
        <Route exact path="/"
          element={<Home />}>
        </Route>

        <Route path="/register"
          element={user ? <Home /> : <Register />}>
        </Route>

        <Route path="/login"
          element={user ? <Home /> : <Login />}>
        </Route>

        <Route path="/write"
          element={user ? <Home /> : <Write />}>
        </Route>

        <Route path="/setting"
          element={user ? <Home /> : <Setting />}>
        </Route>

        <Route path="/post/:postId"
          element={user ? <Home /> : <Single />}>
        </Route>
        {/* <Route path="/setting">
            <Setting />
          </Route> */}
      </Routes>

    </Router>
  )
}
