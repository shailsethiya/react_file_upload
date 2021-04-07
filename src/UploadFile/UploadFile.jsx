import React from 'react';
import { IconButton, Stack, ProgressIndicator } from '@fluentui/react';

export default function UploadFile(props) {
    return(
        <Stack style={{ width: 500}} >
            <hr style={{ width: 500, borderStyle: 'inset', borderWidth: 1, marginBottom: 30, marginTop:40 }}/>
           {
               props.files.length > 0 ? renderFileInfo(props.files, props)
               : <div />
           }
        </Stack>
    )
}

function removeFile(data, index, props){
    props.onClose(data, index)
}

function renderFileInfo(files, props) {
    return files.map((data, index)=>{
        let name = data.name.split(".");
        let filesInformation =  JSON.parse(localStorage.getItem('fileInfo'));
        console.log("filessss===", filesInformation, name)
        return(
            <Stack key={index} style={containerStyle} >
                {arr.map((idata, id)=>{
                return name[1] === idata.filetype ?
                 <div key={id} style={{ display: 'flex', alignItems: 'start' }}>
                    <div style={{ width: 50, padding: 15 }}>{idata.icon}</div>
                    <div style={{ paddingLeft: 10, width: 400, lineHeight: 0.5 }}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <p style={{ fontSize: 12, fontWeight: 700, fontFamily: 'monospace' }}>{data.name}</p>
                            <IconButton onClick={()=>{removeFile(data, index, props)}} iconProps={{ iconName: 'ChromeClose', style: { fontSize: 10, color: 'gray' }}} />
                        </div>
                        <p style={{ fontSize: 12, fontWeight: 500, fontFamily: 'monospace', marginBottom: 2, color: '#bfbfbf' }}>{data.size} KB</p>
                            <ProgressIndicator barHeight={3} percentComplete={100} value={20} />
                        {/* <p style={{ fontSize: 12, fontWeight: 700, marginTop: 2, fontFamily: 'monospace', color: '#5ae649' }}>100% Completed</p> */}
                    </div>
                </div>:
                <div>
                </div> })}
            </Stack>
            )
        })
    }  

    const arr = [
        {
            filetype: 'txt',
            icon: <IconButton iconProps={{ iconName: 'TextDocument', style: { fontSize: 46 }}} />
        },
        {
            filetype: 'application/pdf',
            icon: <IconButton iconProps={{ iconName: 'Pdf', style: { fontSize: 46 }}} />
        },
        {
            filetype: 'pdf',
            icon: <IconButton iconProps={{ iconName: 'Pdf', style: { fontSize: 46 }}} />
        },
        {
            filetype: 'docx' || 'doc',
            icon: <IconButton iconProps={{ iconName: 'WordDocument', style: { fontSize: 46 }}} />
        },
        {
            filetype: 'doc',
            icon: <IconButton iconProps={{ iconName: 'WordDocument', style: { fontSize: 46 }}} />
        },
        {
            filetype: 'xls',
            icon: <IconButton iconProps={{ iconName: 'ExcelDocument', style: { fontSize: 46 }}} />
        },
        {
            filetype: 'xlsx',
            icon: <IconButton iconProps={{ iconName: 'ExcelDocument', style: { fontSize: 46 }}} />
        },
        {
            filetype: 'jpg',
            icon: <IconButton iconProps={{ iconName: 'FileImage', style: { fontSize: 46 }}} />
        },
        {
            filetype: 'png',
            icon: <IconButton iconProps={{ iconName: 'image', style: { fontSize: 46 }}} />
        }
    ]


    const containerStyle ={
        width: 500,
        padding: '1%'
    }