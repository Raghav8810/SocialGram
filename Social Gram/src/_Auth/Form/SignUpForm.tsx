
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {SignupValidation } from "@/lib/validation"
import { z } from "zod"
import Loader from "@/components/shared/Loader"
import { Link , useNavigate} from "react-router-dom"

import { useToast } from "@/components/ui/use-toast"
import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useCallback } from "react"





const SignUpForm = () => {
  // const isLoading = false; 
  const { toast } = useToast()
  const {checkAuthUser, isLoading: isUserLoading} = useUserContext();
  const navigate = useNavigate();

  const { mutateAsync: createUserAccount, isPending: isCreatingAccount } = useCreateUserAccount();
  const { mutateAsync: signInAccount, isPending: isSigningInUser } = useSignInAccount();

   // 1. Define your form.
   const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",

    },
  })
 
  // 2. Define a submit handler.
  const handleSignup = useCallback(() =>{

        async (values: z.infer<typeof SignupValidation>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    //create a new user
    try {
      const newUser = await createUserAccount(values);

      if (!newUser) {
        toast({ title: "Sign up failed. Please try again.", });
        
        return;
      }

      const session = await signInAccount({
         email: values.email,
         password: values.password,
      })

      if (!session) {
        toast({ title: "sign in failed. Please login your new account"});
        
        //navigate("/sign-in");
        
        return;
      }

      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        form.reset();
        navigate("/");
      } else{
        return toast({ title: "Login failed. Please try again.", });
     
      }
    } catch (error) {
      console.log({ error });
    }
  }
}, []) 

  return (
    <Form {...form}>
          <div className="sm:w-420 flex-center flex-col">
          <LazyLoadImage src="/assets/images/logo2.png" loading="lazy" className="w-20 h-30" alt="logo" />
             <h2 className="h3-bold md:h2-bold pt-5 sm:pt-4">Create a new account</h2>
             <p className="text-light-3 small-medium md:base-regular mt-2">Enter your details to start using Socialgram</p>
       
        <form onSubmit={form.handleSubmit(handleSignup)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" placeholder="Enter you Name" {...field} />
                </FormControl>
                <FormDescription>
                  {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
           {/* username */}
           <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" placeholder="Enter your username" {...field} />
                </FormControl>
                <FormDescription>
                  {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* email */}
           <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" placeholder="Enter your email" {...field} />
                </FormControl>
                <FormDescription>
                  {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* password */}

           <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" placeholder="Enter your password" {...field} />
                </FormControl>
                <FormDescription>
                  {/* This is your public display name. */}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
              {isCreatingAccount || isSigningInUser || isUserLoading ?  (
                <div className="flex-center gap-2">
                          <Loader/> Loading...
                </div>
              ): "Sign up"}
           
            </Button>
           <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account ?
            <Link to="/sign-in" className="text-small-semibold  ml -1 text-primary-500">Log in</Link>
           </p>
           
        </form>

        </div>
      </Form>
  
  )
}

export default SignUpForm
