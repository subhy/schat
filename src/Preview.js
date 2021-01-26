import React, {useEffect} from "react";
import './Preview.css';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {resetCameraImage, selectcameraImage} from "./features/cameraSlice";
import CloseIcon from '@material-ui/icons/Close';
import TextFieldIcon from '@material-ui/icons/TextFields';
import NoteIcon from '@material-ui/icons/Note';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CropIcon from '@material-ui/icons/Crop';
import TimerIcon from '@material-ui/icons/Timer';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import CreateIcon from '@material-ui/icons/Create';
import SendIcon from '@material-ui/icons/Send';
import {db,storage} from './firebase';
import firebase from "firebase";
import {v4 as uuid} from "uuid";


function Preview() {
    const cameraImage = useSelector(selectcameraImage);
    const history = useHistory();
    const dispatch=useDispatch();
    useEffect(() => {
        if (!cameraImage) {
            history.replace("/");
        }
    }, [cameraImage, history]);

    const closePreview = () => {
      dispatch(resetCameraImage());

    };

    const sendPost=()=>{
        const id=uuid();
        const uploadTask=storage.ref(`posts/${id}`).putString(cameraImage,"data_url");

        uploadTask.on("state_changed",null,(error) => {
                console.log(error);
            },
            ()=>{
             storage.ref('posts').child(id).getDownloadURL().then((url)=>{
                 db.collection('posts').add({
                     image:url,
                     username:"Subhy",
                     read:false,
                     timestamp:firebase.firestore.FieldValue.serverTimestamp(),

                 });
                 history.replace("/chats");

             });
        }
   );
};

    return (
        <div className='preview'>
            <CloseIcon onClick={closePreview} className='preview_close'/>
            <div className="preview_toolbarRight">
                <TextFieldIcon/>
                <CreateIcon/>
                <NoteIcon/>
                <MusicNoteIcon/>
                <AttachFileIcon/>
                <CropIcon/>
                <TimerIcon/>
            </div>
            <img src={cameraImage} alt=""/>
            <div onClick={sendPost} className='preview_footer'>
                <h2>Send Now</h2>
                <SendIcon fontSize="small" className="preview_sendIcon"/>
            </div>
        </div>
    )
}

export default Preview;