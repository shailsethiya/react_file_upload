import React,{ useEffect, useState} from 'react';
import { IconButton, Stack, ProgressIndicator, ProgressIndicatorBase } from '@fluentui/react';

export default function UploadFile() {
    return(
        <Stack style={{ width: 500}} >
            <hr style={{ width: 500, borderStyle: 'inset', borderWidth: 1, marginBottom: 30, marginTop:40 }}/>
            <div style={{ height: 120, display: 'flex', alignItems: 'start' }}>
            <img src="https://www.pikpng.com/pngl/b/467-4678349_image-free-girl-tumblr-tumblrgirl-draw-cute-flow.png" alt="img" width="100" height="70" />
            <div style={{ paddingLeft: 10, width: 400, lineHeight: 0.5 }}>
                <p style={{ fontSize: 12, fontWeight: 700, fontFamily: 'monospace' }}>DC_12345.PDF</p>
                <p style={{ fontSize: 12, fontWeight: 500, fontFamily: 'monospace', marginBottom: 2, color: '#bfbfbf' }}>546 KB</p>
                <ProgressIndicator  />
                <p style={{ fontSize: 12, fontWeight: 700, marginTop: 2, fontFamily: 'monospace', color: '#5ae649' }}>100% Completed</p>
            </div>
            </div>    
        </Stack>
    )
}
