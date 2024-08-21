import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../State/Authentication/Action';
import { useDispatch } from 'react-redux';

const initialValues={
    fullName:"",
    email:'',
    password:'',
    role:"ROLE_CUSTOMER"
}
export default function RegisterForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        console.log("form value",values);
        dispatch(registerUser({userData:values, navigate}))

    }
  return (
    <div>
        <Typography variant='h5' className='text-center'>
            Đăng ký
        </Typography>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
                <Field
                
                    as={TextField}
                    name="fullName"
                    label="Họ tên"
                    fullWidth
                    variant="outlined"
                    margin="normal"        
                />
                <Field
                    as={TextField}
                    name="email"
                    label="email"
                    fullWidth
                    variant="outlined"
                    margin="normal"        
                />
                <Field
                    as={TextField}
                    name="password"
                    label="password"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    type="password"        
                />
                
                    <Field
                    fullWidth
                    margin="normal"
                    as={Select}
                        labelId="role-simple-select-label"
                        id="role-simple-select"
                        name = "role"
                        // value={age}
                        // onChange={handleChange}
                    >
                        <MenuItem value={"ROLE_CUSTOMER"}>Khách hàng</MenuItem>
                        <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Chủ nhà hàng</MenuItem>
                    </Field>

                <Button sx={{mt:2, padding:"1rem"}} fullWidth type='submit' 
                variant='contained'>Đăng ký</Button>
            </Form>
        </Formik>
        <Typography variant='body2' align='center' sx={{mt:3}}>
            Đã có tài khoản?
            <Button size='small' onClick={()=>navigate("/account/login")}>
                Đăng nhập
            </Button>
        </Typography>
    </div>
  )
}
