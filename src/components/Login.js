'use client'
// import '../styles/globals.css'
// import Button from '@mui/material/Button';
// import useSignInWithGoogle from 'react-firebase-hooks/auth';
// import auth from '../utils/firebase';

// export default function Login() {
//   const [ signInWithGoogle ] = useSignInWithGoogle(auth);
//   return (
//     <div className="app">
//       <div className="login">
//         <div className="login__background" />

//         <div className="login__container">
//           <img src="/logo.png" alt="logo" />
//           <div className="login__text">
//             <h1>Sign in to Epic Chat</h1>
//           </div>
//           <Button onClick={signInWithGoogle}>
//             Sign in with Google
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

import '../styles/globals.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Button from '@mui/material/Button';
import { auth } from '../utils/firebase';

export default function Login() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <div className="app">
      <div className="login">
        <div className="login__background" />

        <div className="login__container">
          <img src="/logo.png" alt="logo" />
          <div className="login__text">
            <h1>Sign in to Epic Chat</h1>
          </div>
          <Button onClick={() => signInWithGoogle()}>
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  )
}