import React from 'react'
import{ Box,Typography } from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors'

function ProductView() {
    return (
        <Box p="18px" bgcolor="white" 
            boxShadow="8ox" mx="4px"
            borderRadius="16px"
        >
            <img 
                style={{height:"120px",width:"120px",backgroundColor:grey[50]}}
            />
            <Typography>Title</Typography>
            <Typography>
                <span style={{color:green.A700}}>offer</span>
            </Typography>
            <Typography variant="h5" >Rs.XXX</Typography>
        </Box>
    )
}

export default ProductView
