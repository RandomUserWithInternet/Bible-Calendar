import Popup from 'reactjs-popup';
import { doc, setDoc } from 'firebase/firestore';
import { auth } from "./Firebase"
import { useState } from 'react';

export default function UserSettings() {
    const [name, setName] = useState('');
    const [pfp, setPfp] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        const userInfo = {name, pfp};
        saveUserInfo(userInfo);
    }

    return(
    <Popup trigger={<button className="button"> <img className="h-12 w-12"src="https://img.icons8.com/material-sharp/512/user.png"/></button>} modal>
        <div id='pfp' className='border-2 border-black'>
            <form onSubmit={handleSubmit}>
                <label>Image:</label>
                <input type="file" value={pfp} onChange={(e)=>setPfp(e.target.value)} required /><br/>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required /><br/>
                <input type="submit" value="Submit"/>
            </form>

            
        </div>
    </Popup>
    );
  }

function saveUserInfo(info) {
    
}