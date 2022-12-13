import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from './Firebase';

function signInWithGoogle () {
    signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
    }).catch((error) => console.log(error))
}

export default function Login () {
    return (
        <div>
            <center>
                <button className="my-auto" onClick={signInWithGoogle}>Sign In with Google</button>
            </center>
        </div>
    );
}
