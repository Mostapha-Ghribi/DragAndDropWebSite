import React from 'react'
import {TextField , Grid , InputAdornment , IconButton} from "@material-ui/core"
import { Visibility, VisibilityOff } from '@material-ui/icons'
const Input = ({name , label , half , handleChange , handleShowPass , autoFocus , type}) => {
    return(
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
         name ={name}
         onChange = {handleChange}
         variant = "outlined"
         required
         fullWidth
         label={label}
         autoFocus={autoFocus}
         type={type}
         inputProps={name === 'password' && {
             endAdornment: (
                 <InputAdornment position="end">
                     <IconButton onClick={handleShowPass}>
                         {type ==="password" ? <Visibility/> : <VisibilityOff/>}
                     </IconButton>
                 </InputAdornment>
             )
         }}
        >
        </TextField>

    </Grid>
    )
}
export default Input;
