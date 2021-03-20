import React,{ useEffect, useState} from 'react';
import { IconButton, Stack } from '@fluentui/react';

export default function TakeSelfie() {
    return(
        <Stack  horizontal verticalAlign='center' style={{ height:40, fontSize: 14, fontWeight: 700, width: 500, fontFamily: 'monospace', backgroundColor: '#f1f1f1' , border: `dashed 2px #00e7ff` }}>
            <IconButton iconProps={{ iconName: 'trash' ,
            style: {fontSize: 24}}} />
          You can also tap/Click to take a picture
        </Stack>
    )
}
