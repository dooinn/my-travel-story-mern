import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './screens/About'
import Followings from './screens/Followings'
import Home from './screens/Home'
import MyProfile from './screens/MyProfile'
import SignIn from './screens/SignIn'
import Signup from './screens/Signup'
import UserProfile from './screens/UserProfile'

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/about" exact component={About} />
        <Route path="/myprofile" exact component={MyProfile} />
        <Route path="//profile/:userid" exact component={UserProfile} />
        <Route path="/" exact component={Followings} />

      </Switch>

    </>
  )
}

export default App
