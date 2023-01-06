import { Button } from '@mui/material';
import React from 'react';

export const UpperContainer = () => {
  return (
    <div>
        <div>
            <h1 className='pageInfo'>Save time and write with confidence</h1>
        </div>
        <div>
            <Button 
                className='btn-upg'
                color='success'
                variant='contained'
                sx={{
                    backgroundColor: "#499557",
                    textTransform: "none",
                    textDecoration: "none",
                    padding: "6px 16px",
                    marginTop: "13px",
                    fontSize: "17px",
                    paddingLeft: "20px",
                    fontWeight: 600,
                    paddingRight: "20px",
                    borderRadius: "20px",
                }}
            >
                Upgrade to QuillBot Premium</Button>
        </div>
        <div>
        </div>
    </div>
  );
};

export default UpperContainer;
