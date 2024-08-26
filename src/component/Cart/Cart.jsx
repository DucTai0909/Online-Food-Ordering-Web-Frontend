import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../State/Order/Action';

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline:'none',
    boxShadow: 24,
    p: 4,
  };
const initialValues={
    streetAddress:"",
    ward:"",
    district:"",
    city:""
}

// const validationSchema=Yup.object.shape({
//     streetAddress:Yup.string().required('Địa chỉ không được để trống'),
//     ward:Yup.string().required('Phường không được để trống'),
//     district:Yup.string().required('Quận không được để trống'),
//     city:Yup.string().required('Thành phố không được để trống'),
// })

// const items =[1,1]

const Cart = () => {
    const createOrderUsingSelectedAddress =()=>{

    }
    const handleOpenAddressModal =()=>setOpen(true);
    const [open, setOpen] = useState(false);

    const {cart, auth} = useSelector(store=>store);
    const dispatch = useDispatch();

    const handleClose = () => setOpen(false);
    const handleSubmit=(values)=>{
        const data={
            jwt:localStorage.getItem("jwt"),
            order:{
                restaurantId:cart.cartItems[0].food?.restaurant.id,
                deliveryAddress:{
                    fullName:auth.user?.fullName,
                    streetAddress:values.streetAddress,
                    ward:values.ward,
                    district:values.district,
                    city:"TP. Hồ Chí Minh",
                }
            }
        }
        dispatch(createOrder(data))
        console.log("form value", values);
    }

  return (
    <>
        <main className='lg:flex justify-between'>
            <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                {cart.cartItems.map((item)=><CartItem item={item}/>)}
                <Divider/>
                <div className='billDetails px-5 text-sm'>
                    <p className='font-extralight py-5'>Chi tiết hóa đơn</p>
                    <div className='space-y-3'>
                        <div className='flex justify-between text-gray-400'>
                            <p>Giá trị đơn hàng</p>
                            <p>{cart.cart?.total.toLocaleString('vi-VN')} VND</p>
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>Phí giao hàng</p>
                            <p>10.000 VND</p>
                        </div>
                        <div className='flex justify-between text-gray-400'>
                            <p>Thuế VAT (10%)</p>
                            <p>5.000 VND</p>
                        </div>
                        <Divider/>
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p>Thành tiền</p>
                        <p>{(cart.cart?.total + 10000 + 15000).toLocaleString('vi-VN')} VND</p>
                    </div>
                </div>  
            </section>
            <Divider orientation='vertical' flexItem/>
            <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                <div>
                    <h1 className='text-center font-semibold text-2xl py-10'>
                        Chọn địa chỉ giao hàng
                    </h1>
                    <div className='flex gap-5 flex-wrap justify-center'>
                        {[1,1,1,1,1].map((item)=> (
                            <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true}/>
                        ))}
                        <Card className="flex gap-5 w-64 p-5">
                            <AddLocationAltIcon />
                            <div className='space-y-3 text-gray-500'>
                                <h1 className='font-semibold text-lg text-white'>Thêm địa chỉ mới</h1>
                                
                                <Button variant='outlined' fullWidth onClick={handleOpenAddressModal}>Thêm</Button>
                            </div>

                        </Card>
                    </div>
                </div>
            </section>
        </main>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Formik initialValues={initialValues} 
                // validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                    <Form>
                       <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field
                            as={TextField}
                            name="streetAddress"
                            label="Địa chỉ"
                            fullWidth
                            variant="outlined"
                            // error ={!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className='text-red-600'>{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                            as={TextField}
                            name="ward"
                            label="Phường/Xã"
                            fullWidth
                            variant="outlined"
                            // error ={!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className='text-red-600'>{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                            as={TextField}
                            name="district"
                            label="Quận/Huyện"
                            fullWidth
                            variant="outlined"
                            // error ={!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className='text-red-600'>{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                            as={TextField}
                            name="city"
                            label="Thành phố"
                            fullWidth
                            variant="outlined"
                            // error ={!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className='text-red-600'>{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth variant='contained' type='submit' color='primary'>Giao hàng đến địa chỉ này</Button>
                        </Grid>
                    </Grid> 
                    </Form>
                    
                </Formik>
            </Box>
        </Modal>
    </>
  )
}

export default Cart