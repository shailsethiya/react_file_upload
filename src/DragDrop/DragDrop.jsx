import React,{useCallback, useState, useEffect} from 'react';
import { IconButton, Stack } from '@fluentui/react';
import {useDropzone} from 'react-dropzone'

import TakeSelfie from "../TakeSelfie/TakeSelfie";
import UploadFile from "../UploadFile/UploadFile"

export default function DragDrop() {
    const onDrop = useCallback(acceptedFiles => {
        setfilesData(acceptedFiles)
        console.log("acceptedFiles", acceptedFiles)
        localStorage.setItem('fileInfo', JSON.stringify(acceptedFiles));
    }, [])
    const [files, setfilesData] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({onDrop});

    /*useEffect(() => {
        return () => {
            const data =  localStorage.setItem('fileInfo' , JSON.stringify(files));
            console.log("data===", data)
        }
    }, []) */

   /* useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input]) */
    return(
        <Stack horizontalAlign='center' style={{ height:160, fontSize: 14, fontWeight: 700, width: 500, fontFamily: 'monospace', backgroundColor: '#f1f1f1' , border: `dashed 2px #409adf` }}>
           <div {...getRootProps()} style={{ width: 500, justifyContent: 'center', alignItems: 'center', marginBottom: 20}} >
                <input {...getInputProps()} />
                <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
                    <IconButton iconProps={{ iconName: 'PresenceChickletVideo',
                    style: {fontSize: 30, color: '#409adf;', paddingRight: 20}}} />
                    <IconButton iconProps={{ iconName: 'FileImage',
                    style: {fontSize: 26, color: '#409adf', paddingLeft: 20}}} />
                </div>
                <div style={{  display: 'flex', flex: 1, justifyContent: 'center',  alignItems: 'center'}}>
                    <IconButton iconProps={{ iconName: 'CloudUpload',
                    style: {fontSize: 46, color:  '#409adf'}}} />
                </div>
                <p style={{textAlign: 'center', paddingBottom: 20}}>Drag and Drop or tap/click to chose file from location</p>
            </div>
            <TakeSelfie />
            <UploadFile files={files} />
        </Stack>
    )
}
