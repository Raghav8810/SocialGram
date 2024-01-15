
import AuthLayout from './_Auth/Form/AuthLayout'
import SignInForm from './_Auth/Form/SignInForm'
import SignUpForm from './_Auth/Form/SignUpForm'
import { AllUsers, CreatePost, EditPost, Explore, Home, PostDetails, Profile, Saved, UpdateProfile } from './_root/pages'
import RootLayout from './_root/pages/RootLayout'
import './global.css'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
  <main className='flex h-screen'>
       <Routes>
             {/* publics route - for everybody can see */}
                 <Route element={<AuthLayout/>}>
                     <Route path='/sign-in' element={<SignInForm/>} />
                     <Route path='/sign-up' element={<SignUpForm/>} />
                 </Route>

             {/* private routes -- this can ve visible only if sign in */}
                <Route element={<RootLayout/>}>
                <Route index element={<Home />} />
                           <Route path="/explore" element={<Explore/>}/>
                           <Route path="/saved" element={<Saved/>}/>
                           <Route path="/all-users" element={<AllUsers/>}/>
                           <Route path="/create-post" element={<CreatePost/>}/>
                           <Route path="/update-post/:id" element={<EditPost/>}/>
                           <Route path="/posts/:id" element={<PostDetails/>}/>
                           <Route path="/profile/:id/*" element={<Profile/>}/>
                           <Route path="/update-profile/:id" element={<UpdateProfile/>}/>
                </Route>
       </Routes>
       <Toaster/>
  </main>
  )
}

export default App
