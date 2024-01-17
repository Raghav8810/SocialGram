import React, { Suspense } from 'react';
import AuthLayout from './_Auth/Form/AuthLayout'
import SignInForm from './_Auth/Form/SignInForm'
import SignUpForm from './_Auth/Form/SignUpForm'
//import { AllUsers, CreatePost, EditPost, PostDetails, Profile, Saved, UpdateProfile } from './_root/pages'
const Home = React.lazy(() => import('./_root/pages/Home')); 
const Explore = React.lazy(() => import('./_root/pages/Explore'));
const Saved = React.lazy(() => import('./_root/pages/Saved'));  
const AllUsers = React.lazy(() => import('./_root/pages/AllUsers')); 
const CreatePost = React.lazy(() => import('./_root/pages/CreatePost')); 
const EditPost = React.lazy(() => import('./_root/pages/EditPost')); 
const PostDetails = React.lazy(() => import('./_root/pages/PostDetails')); 
const Profile = React.lazy(() => import('./_root/pages/Profile')); 
const UpdateProfile = React.lazy(() => import('./_root/pages/UpdateProfile')); 

const RootLayout = React.lazy(() => import('./_root/pages/RootLayout'));
//import RootLayout from './_root/pages/RootLayout'

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
               <Route element={
                <Suspense fallback={<>Loading app...</>}>
               <RootLayout/>
               </Suspense>

               }> 
                <Route index element={<Suspense fallback={<>Loading app...</>}> <Home /></Suspense> } />


                         
                           <Route path="/explore" element={
                         
                           <Suspense fallback={<>Loading app...</>}> 
                                   <Explore/> 
                           </Suspense>
                           }/>

                           <Route path="/saved" element={
                          
                           <Suspense fallback={<>Loading app...</>}> 
                                    <Saved/>
                           </Suspense>
                           
                           }/>


                           <Route path="/all-users" element={
                         
                           <Suspense fallback={<>Loading app...</>}> 
                                      <AllUsers/>
                           </Suspense>
                          
                          }
                           
                           />
                           <Route path="/create-post" element={
                        
                           <Suspense fallback={<>Loading app...</>}> 
                             <CreatePost/>
                            </Suspense>
                           }
                           />


                           <Route path="/update-post/:id" element={
                           
                           <Suspense fallback={<>Loading app...</>}> 
                              <EditPost/>  
                          </Suspense>
                          
                          }
                           
                           />

                           <Route path="/posts/:id" element={
                           

                           <Suspense fallback={<>Loading app...</>}> 
                              <PostDetails/>
                          </Suspense>
                          
                          
                          }
                           
                           />


                           <Route path="/profile/:id/*" element={
                          
                           <Suspense fallback={<>Loading app...</>}> 
                           <Profile/>
                       </Suspense>
                           
                           }/>


                           <Route path="/update-profile/:id" element={
                        
                           <Suspense fallback={<>Loading app...</>}> 
                             <UpdateProfile/>
                       </Suspense>
                           }/>
                </Route>
       </Routes>
       <Toaster/>
  </main>
  )
}

export default App
