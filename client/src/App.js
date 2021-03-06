import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { UserProvider } from './context/UserState'
import Navbar from './components/Navbar'
import About from './screens/About'
import Followings from './screens/Followings'
import Home from './screens/Home'
import MyProfile from './screens/MyProfile'
import SignIn from './screens/SignIn'
import Signup from './screens/Signup'
import UserProfile from './screens/UserProfile'
import Explore from './screens/Explore'
import CreatePost from './screens/CreatePost'
import Aos from 'aos';
import 'aos/dist/aos.css';
import LearnMore from './screens/LearnMore'
import Footer from './components/Footer'

const App = () => {

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <UserProvider>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
        <Route path="/learnmore" component={LearnMore} />
        <Route path="/myprofile" component={MyProfile} />
        <Route path="/explore" component={Explore} />
        <Route path="/profile/:userid" component={UserProfile} />
        <Route path="/followings" component={Followings} />
        <Route path="/create" component={CreatePost} />
      </Switch>
      <Footer />
    </UserProvider>



  )
}

export default App
