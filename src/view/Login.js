import { useState } from 'react';
import { auth } from '../firebase.js';
import * as colors from '../colors/index.js';
import SignInWithGoogle from '../services/SignInWithGoogle.js';

// Immagini
import desireLogo from "../images/desire_logo.png"
import desireLogoText from "../images/desire_logo_text.png"
import googleLogo from "../images/google_logo.png"

export default function Login() {
   // Variabili di stato
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [securePassword, setSecurePassword] = useState(true);
   const [isLoading, setIsLoading] = useState(false);

   const signIn = async () => {
      if (email && password) {
         try {
            setIsLoading(true);
            await auth.signInWithEmailAndPassword(email, password);
            setIsLoading(false);

            console.log("Authenticated user");
         } catch (error) {
            alert(error.message);
            setIsLoading(false);
         }
      } else {
         alert("Enter email and password");
      }
   };

   return (
      <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: colors.PRIMARY }}>

         <div className="max-w-md w-full p-6 space-y-6 rounded-lg" >
            <div className="text-center">
               <img
                  src={desireLogo}
                  alt="Logo"
                  className="w-40 h-40 mx-auto"
               />
               <img
                  src={desireLogoText}
                  alt="Logo Text"
                  className="w-60 h-20 mx-auto"
               />
            </div>
            <form className="space-y-4">
               <div>
                  <label htmlFor="email" className="block text-white">Email</label>
                  <input
                     type="email"
                     id="email"
                     className="w-full p-2 border rounded-md text-black focus:outline-none focus:border-secondary"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                  />
               </div>

               <div>
                  <label htmlFor="password" className="block text-white">Password</label>
                  <input
                     type={securePassword ? 'password' : 'text'}
                     id="password"
                     className="w-full p-2 border rounded-md text-black focus:outline-none focus:border-secondary"
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                  />
                  <button
                     type="button"
                     className="mt-2 text-secondary font-bold text-gray-300"
                     onClick={() => setSecurePassword(!securePassword)}
                  >
                     {securePassword ? 'Show Password' : 'Hide Password'}
                  </button>
               </div>

               <button
                  type="button"
                  className="w-full p-2 text-black rounded-md hover:bg-opacity-80"
                  style={{ backgroundColor: colors.SECONDARY }}
                  onClick={signIn}
                  disabled={isLoading}
               >
                  {isLoading ? 'Signing In...' : "Sign In"}
               </button>

               <button
                  type="button"
                  className="flex items-center justify-center w-full p-2 text-white bg-royalblue rounded-md"
                  style={{ backgroundColor: colors.MALE }}
                  onClick={SignInWithGoogle}
               >
                  <img
                     src={googleLogo}
                     alt="Google Logo"
                     className="w-5 h-5 mr-2"
                  />
                  Sign in with Google
               </button>

               <button
                  type="button"
                  style={{ color: colors.SECONDARY }}
               // onClick={() => router.push('/ResetPassword')}
               >
                  "Forgot password?"
               </button>
            </form>
         </div>
      </div>
   )
}
