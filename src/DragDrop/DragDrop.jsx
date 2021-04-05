import React,{useCallback, useState} from 'react';
import { IconButton, Stack } from '@fluentui/react';
import {useDropzone} from 'react-dropzone'

import TakeSelfie from "../TakeSelfie/TakeSelfie";
import UploadFile from "../UploadFile/UploadFile"

export default function DragDrop() {
    const onDrop = useCallback(acceptedFiles => {
        console.log('file info', acceptedFiles)
        setfilesData(acceptedFiles)
    }, [])
    const [files, setfilesData] = useState([]);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    return(
        <Stack horizontalAlign='center' style={{padding: 20, height:160, fontSize: 14, width: 500, fontWeight: 700, fontFamily: 'monospace', backgroundColor: '#f1f1f1' , border: `dashed 2px #00e7ff`, marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'start', paddingTop: 30 }}>
                <IconButton iconProps={{ iconName: 'PresenceChickletVideo',
                style: {fontSize: 30, color: '#00e7ff', paddingRight: 20}}} />
                <IconButton iconProps={{ iconName: 'FileImage',
                style: {fontSize: 26, color: '#00e7ff', paddingLeft: 20}}} />
            </div>
            
            <div style={{paddingTop: 10, paddingBottom: 10}}>
                <IconButton iconProps={{ iconName: 'CloudUpload',
                style: {fontSize: 46, color:  '#00e7ff'}}} />
            </div>
            <div  {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag and Drop or tap/click to chose file from location</p>
                }
            </div>
            <TakeSelfie />
            <UploadFile files={files} />
        </Stack>
    )
}
