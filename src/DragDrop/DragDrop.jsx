import React,{ useEffect, useState} from 'react';
import { IconButton, Stack } from '@fluentui/react';

export default function DragDrop() {
    return(
        <Stack horizontalAlign='center' style={{ height:160, fontSize: 14, width: 500, fontWeight: 700, fontFamily: 'monospace', backgroundColor: '#f1f1f1' , border: `dashed 2px #00e7ff`, marginBottom: 20 }}>
            <IconButton iconProps={{ iconName: 'trash',
            style: {fontSize: 24}}} />
             <IconButton iconProps={{ iconName: 'Orientation2',
            style: {fontSize: 24}}} />
             <IconButton iconProps={{ iconName: 'Orientation2',
            style: {fontSize: 24}}} />
          Drag and Drop or tap/click to chose file from location
        </Stack>
    )
}
