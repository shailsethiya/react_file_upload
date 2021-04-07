import React,{useCallback, useState, useEffect} from 'react';
import { IconButton, Stack } from '@fluentui/react';
import {useDropzone} from 'react-dropzone'

import TakeSelfie from "../TakeSelfie/TakeSelfie";
import UploadFile from "../UploadFile/UploadFile"

export default function DragDrop() {
   
    const [files, setfilesData] = useState([]);
    const [fileSizeAlert, setfileSizeAlert] = useState('');
    const onDrop = useCallback(acceptedFiles => {
        let filesArr = []
        // acceptedFiles.length > 0 && acceptedFiles.map((data, i)=>{
        //     if(data.size > 100000){
        //         setfileSizeAlert(data.name+ 'file is too large')
        //     }
        // })
        console.log('files', ...files, ...acceptedFiles)
        setfilesData(current => [...current, ...acceptedFiles]);
        
    }, [])

    function onClose(data, id){
        var filtered = files.filter((value, index, arr)=>{ 
            return index !== id;
        });
        setfilesData(filtered)
    }

    const {getRootProps, getInputProps, isDragReject, rejectedFiles} = useDropzone({onDrop});
    // const maxSize = 100000
    const isFileTooLarge = rejectedFiles && rejectedFiles.length > 0 && rejectedFiles[0].size > 100000
    return(
        <Stack horizontalAlign='center' style={{ height:160, fontSize: 14, fontWeight: 700, width: 500, fontFamily: 'monospace', backgroundColor: '#f1f1f1' , border: `dashed 2px #409adf` }}>
           <div {...getRootProps()} {...isDragReject} {...rejectedFiles} style={{ width: 500, justifyContent: 'center', alignItems: 'center', marginBottom: 20}} >
                
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
            <UploadFile files={files} onClose={onClose}/>
        </Stack>
    )
}
