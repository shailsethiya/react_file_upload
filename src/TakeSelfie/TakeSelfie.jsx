import React,{ useEffect, useState} from 'react';
import { IconButton, Stack, Modal } from '@fluentui/react';
// import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css'; 
export default function TakeSelfie() {
    const [image, setImage] = useState(null);
    const [isModal, setModal] = useState(true)
    function handleTakePhoto (dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
      }
    return(
        <Stack  horizontal verticalAlign='center' style={{ height:40, fontSize: 14, fontWeight: 700, width: 500, fontFamily: 'monospace', backgroundColor: '#f1f1f1' ,  paddingLeft: 60, border: `dashed 2px #409adf` }}>
            <div  style={{justifyContent: 'center', alignItems: 'center'}}>
            <IconButton iconProps={{ iconName: 'camera' , 
            style: {fontSize: 24, color:  '#409adf', paddingRight: 10 }}} />
          You can also tap/Click to take a picture
          {/* <Camera
            onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
            /> */}
          </div>
            <div>
                <Modal isOpen={isModal}>
                    <div display='flex'>
                    <IconButton iconProps={{ iconName: 'camera' , 
                    style: {fontSize: 24, color:  '#409adf', paddingRight: 10 }}} />
                     <IconButton iconProps={{ iconName: 'camera' , 
                    style: {fontSize: 24, color:  '#409adf', paddingRight: 10 }}} />
                    </div>
                </Modal>
            </div>
        </Stack>
    )
}
