
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"





import {SigninValidation } from "@/lib/validation"
import { z } from "zod"
import Loader from "@/components/shared/Loader"
import { Link , useNavigate} from "react-router-dom"

import { useToast } from "@/components/ui/use-toast"
import {useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"
import { LazyLoadImage } from "react-lazy-load-image-component"





const SignInForm = () => {
  // const isLoading = false; 
  const { toast } = useToast()
  const {checkAuthUser, isLoading: isUserLoading} = useUserContext();
  const navigate = useNavigate();

  const { mutateAsync: signInAccount} = useSignInAccount();

   // 1. Define your form.
   const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",

    },
  })
 
  // 2. Define a submit handler.
  const handleSignin = async (user: z.infer<typeof SigninValidation>) => {
    const session = await signInAccount(user);

    if (!session) {
      toast({ title: "Login failed. Please try again." });
      
      return;
    }

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      form.reset();

      navigate("/");
    } else {
      toast({ title: "Login failed. Please try again.", });
      
      return;
    }
  };

  return (
    <Form {...form}>
          <div className="sm:w-420 flex-center flex-col">
           <LazyLoadImage src="/assets/images/logo2.png" loading="lazy" className="w-40 h-30" alt="logo"  />
             <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Log in to your account</h2>
             <p className="text-light-3 small-medium md:base-regular mt-2">Welcome! back Please enter your details</p>
       
        <form onSubmit={form.handleSubmit(handleSignin)} className="flex flex-col gap-5 w-full mt-4">
          
          {/* email */}
           <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" placeholder="Enter your email" {...field}  />
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
              {isUserLoading ? (
                <div className="flex-center gap-2">
                          <Loader/> Loading...
                </div>
              ): "Sign in"}
           
            </Button>
           <p className="text-small-regular text-light-2 text-center mt-2">
            Don't have an account?
            <Link to="/sign-up" className="text-small-semibold  ml -1 text-primary-500">Sign up</Link>
           </p>
           
        </form>

        </div>
      </Form>
  
  )
}

export default SignInForm
