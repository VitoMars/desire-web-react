import { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import * as colors from '../colors/index.js';

// Immagini
import desireLogo from "../images/desire_logo.png"
import desireLogoText from "../images/desire_logo_text.png"

const Dashboard = () => {

   const { currentUser } = auth;

   const [showModal, setShowModal] = useState(false);

   useEffect(() => {
      // getUserInfo();
   }, [])

   const handleDeleteAccount = () => {
      // Qui dovresti inserire la logica per eliminare l'account, ad esempio inviando una richiesta al server.
      // In questo esempio, mostriamo solo il modal di conferma.
      setShowModal(true);
   };


   const getUserInfo = async () => {
      // Informazioni sull'utente
      try {
         const userDoc = await db
            .collection('users')
            .doc(currentUser.uid)
            .get();
         const userData = userDoc.data();

      } catch (error) {
         console.log(
            "Si è verificato un errore durante il recupero dei dati dell'utente:",
            error,
         );
      }
   };


   return (
      <div
         className="flex flex-col justify-around items-center p-5 min-h-screen"
         style={{ backgroundColor: colors.PRIMARY }}
      >
         <div className="max-w-md w-full p-6 space-y-8 rounded-lg" >
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

            <div className='text-white font-bold'>
               Il tuo account
            </div>

            <div className="flex justify-center items-center space-x-4">
               <img
                  src={currentUser.photoURL}
                  alt="Immagine del profilo"
                  className="w-20 h-20 rounded-full"
               />
               <div>
                  <p style={{ color: colors.SECONDARY }} className="font-semibold">{currentUser.displayName}</p>
                  <p className="text-white">{currentUser.email}</p>
               </div>
            </div>

            <div className='flex flex-col items-center space-y-5'>
               <button
                  className="w-40 px-4 py-2 rounded text-white bg-gray-700"
                  onClick={() => auth.signOut()}
               >
                  Disconnettiti
               </button>

               <button
                  className="w-40 mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={handleDeleteAccount}
               >
                  Elimina Account
               </button>
            </div>
         </div>

         {showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
               <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-lg font-semibold">Conferma Eliminazione Account</p>
                  <p>Sei sicuro di voler eliminare il tuo account?</p>
                  <div className="mt-4 flex justify-end space-x-4">
                     <button
                        className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
                        onClick={() => setShowModal(false)}
                     >
                        Annulla
                     </button>
                     <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => {
                           // Qui dovresti inserire la logica per l'eliminazione dell'account
                           // Una volta completata, puoi reindirizzare l'utente alla pagina di login o fare altre azioni necessarie.
                           // Ad esempio, puoi utilizzare react-router-dom per la navigazione.
                        }}
                     >
                        Conferma
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>

   )
}

export default Dashboard