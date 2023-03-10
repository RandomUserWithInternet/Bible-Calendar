import Popup from 'reactjs-popup';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from "./Firebase"
import { useState } from 'react';

export default function UserSettings() {
    const [name, setName] = useState('');
    const [pfp, setPfp] = useState(undefined);

    return(
    <Popup trigger={<button className="button"> <img className="h-12 w-12"src="https://img.icons8.com/material-sharp/512/user.png"/></button>} modal>
        <div id='pfp' className='border-2 border-black'>
            <input type="file" value={pfp} onChange={(e)=>setPfp(e.target.files[0])} accept="image/jpeg, image/png" />
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            {/* <button onClick={saveUserInfo(name, pfp)}>Submit O:</button> */}
        </div>
    </Popup>
    );
  }

// async function saveUserInfo(name, pfp) {
//     try {
//         const docRef = await addDoc(collection(db, "Users"), {
//           name: sldkfj
//         });
      
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
// }