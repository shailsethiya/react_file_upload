import React,{ useEffect, useState} from 'react';
import { IconButton, Stack } from '@fluentui/react';
import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';

export default function TakeSelfie() {
    return(
        <Stack  horizontal verticalAlign='center' style={{ height:40, fontSize: 14, fontWeight: 700, width: 500, fontFamily: 'monospace', backgroundColor: '#f1f1f1' ,  paddingLeft: 60, border: `dashed 2px #409adf` }}>
            <IconButton iconProps={{ iconName: 'camera' , 
            style: {fontSize: 24, color:  '#409adf', paddingRight: 10 }}} />
          You can also tap/Click to take a picture
        </Stack>
    )
}
