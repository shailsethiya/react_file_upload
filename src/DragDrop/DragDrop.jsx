import React,{ useEffect, useState} from 'react';
import { IconButton, Stack } from '@fluentui/react';

export default function DragDrop() {
    return(
        <Stack horizontalAlign='center' style={{ height:160, fontSize: 14, width: 500, fontWeight: 700, fontFamily: 'monospace', backgroundColor: '#f1f1f1' , border: `dashed 2px #00e7ff`, marginBottom: 20 }}>
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
          Drag and Drop or tap/click to chose file from location
        </Stack>
    )
}
