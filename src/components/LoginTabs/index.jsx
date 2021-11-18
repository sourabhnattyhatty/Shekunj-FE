import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './index.scss';
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import Google from "../../assets/images/login/google.png";
import Or from "../../assets/images/login/or.png";
import { onLogin } from "../../store/auth/action";
import Error from "../Error";
import { CircularProgress } from "@mui/material";


const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(6, "At least 6 characters")
        .required("Password is required"),
});


export default function LoginTabs() {

    const { isLoading } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const [value, setValue] = React.useState('1');

    const handleChanged = (event, newValue) => {
        setValue(newValue);
    };

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            validationSchema,
            onSubmit(values) {
                dispatch(onLogin(values, history));
            },
        });

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderColor: 'divider' }}>
                    <TabList onChange={handleChanged} aria-label="lab API tabs example">
                        <Tab className="xyz" label="E-mail" value="1" />
                        <Tab className="xyz" label="Mobile" value="2" />
                    </TabList>
                </Box>



                <TabPanel value="1">
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            {/* <label>
                                E-mail address <span className='asterik'> * </span>
                            </label> */}
                            <input
                                name='email'
                                type='email'
                                className='form-control'
                                onChange={handleChange}
                                // value={values.email}
                                onBlur={handleBlur}
                                autoComplete='off'
                                placeholder="E-mail"
                            />
                            <Error error={errors.email} touched={touched.email} />
                        </div>

                        <div className='form-group'>
                            {/* <label>
                                Password <span className='asterik'> * </span>
                            </label> */}
                            <input
                                name='password'
                                type='password'
                                className='form-control'
                                onChange={handleChange}
                                // value={values.password}
                                onBlur={handleBlur}
                                autoComplete='off'
                                placeholder="Password"
                            />
                            <Error error={errors.password} touched={touched.password} />
                        </div>

                        <button type='submit' className='btn btn_login w-100'>
                            {isLoading ? <CircularProgress color="secondary" /> : 'Login'}
                        </button>
                    </form>
                </TabPanel>



                <TabPanel value="2">
                <div className='form-group'>
                            {/* <label>
                                Mobile Number <span className='asterik'> * </span>
                            </label> */}
                            <input
                                name='password'
                                type='mobile'
                                className='form-control'
                                onChange={handleChange}
                                
                                onBlur={handleBlur}
                                autoComplete='off'
                                placeholder="Mobile"
                            />
                            <Error error={errors.password} touched={touched.password} />
                        </div>


                        <div className='form-group'>
                            {/* <label>
                                Password <span className='asterik'> * </span>
                            </label> */}
                            <input
                                name='password'
                                type='password'
                                className='form-control'
                                onChange={handleChange}
                                
                                onBlur={handleBlur}
                                autoComplete='off'
                            />
                            <Error error={errors.password} touched={touched.password} />
                        </div>

                        <button type='submit' className='btn btn_login w-100'>
                            {isLoading ? <CircularProgress color="secondary" /> : 'Login'}
                        </button>
                </TabPanel>
            </TabContext>
        </Box>
    );
}
