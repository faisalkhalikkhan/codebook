import { Avatar } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import React, { useState } from 'react'
import '../CssOfComponents/MessageSender.css'
import { useDataLayerValue } from '../HelperTool/DataLayer';
import db from '../firebase'
import firebase from 'firebase'

function MessageSender() {
    
  const [{user}, dispatch] = useDataLayerValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    console.log(user);
    const handleSubmit = e => {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic : user.photoURL,
            username: user.displayName,
            image : imageUrl,
        })

        setInput("");
        setImageUrl("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input type="text" className="messageSender__input" value={input} onChange={e => setInput(e.target.value)} placeholder={`Whats on your mind, ${user.displayName}`} />
                    <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="Image Url (Optional)" />
                    <button type="submit" onClick={handleSubmit}>Hidden submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style= {{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style= {{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style= {{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
