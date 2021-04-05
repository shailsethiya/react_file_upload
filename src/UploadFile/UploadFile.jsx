import React,{ useEffect, useState} from 'react';
import { IconButton, Stack, ProgressIndicator, ProgressIndicatorBase } from '@fluentui/react';

export default function UploadFile(props) {
    return(
        <Stack style={{ width: 500}} >
            <hr style={{ width: 500, borderStyle: 'inset', borderWidth: 1, marginBottom: 30, marginTop:40 }}/>
           {
               props.files.length > 0 ? renderFileInfo(props.files)
               : <div />
           }
        </Stack>
    )
}

function renderFileInfo(files) {
    return files.map((data, index)=>{
        return(
            <Stack key={index} style={containerStyle} >
                 <div style={{ display: 'flex', alignItems: 'start' }}>
                   <img src="https://www.pikpng.com/pngl/b/467-4678349_image-free-girl-tumblr-tumblrgirl-draw-cute-flow.png" alt="img" width="100" height="70" />
                   <div style={{ paddingLeft: 10, width: 400, lineHeight: 0.5 }}>
                       <p style={{ fontSize: 12, fontWeight: 700, fontFamily: 'monospace' }}>{data.name}</p>
                       <p style={{ fontSize: 12, fontWeight: 500, fontFamily: 'monospace', marginBottom: 2, color: '#bfbfbf' }}>{data.size} KB</p>
                       <ProgressIndicator barHeight={2}/>
                       <p style={{ fontSize: 12, fontWeight: 700, marginTop: 2, fontFamily: 'monospace', color: '#5ae649' }}>100% Completed</p>
                   </div>
                   </div> 
            </Stack>
        )
    })  
}

const containerStyle ={
    width: 500,
    padding: '1%'
}