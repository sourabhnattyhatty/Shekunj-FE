import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "./index.scss";

function index(props) {
  return (
    <div>
      <div className='date_of_birth'>
        <Stack component='form' noValidate spacing={3}>
          <TextField
            id='date'
            type='date'
            defaultValue={props.defaultValue}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => props.updatedDate(e.target.value)}
          />
        </Stack>
      </div>
    </div>
  );
}

export default index;
