import { AddPhotoAlternate, Email } from '@mui/icons-material'
import { Button, CircularProgress, Grid, IconButton, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { UploadImageToCloudinary } from '../util/UploadToCloudinary';

const initialValues = {
  name: '',
  description: '',
  cuisineType: '',
  streetAddress: '',
  ward: '',
  district: '',
  city: '',
  email: '',
  mobile: '',
  twitter: "",
  instagram: "",
  openHours: "Thứ hai - Chủ nhật: 8:00 - 22:00",
  images: []
}
const CreateRestaurantForm = () => {
  const [uploadImage, setUploadImage] = useState(false)
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data={
        name:values.name,
        description:values.description,
        cuisineType:values.cuisineType,
        address:{
          streetAddress:values.streetAddress,
          ward:values.ward,
          district:values.district,
          city:values.city
        },
        contactInfomation:{
          email:values.email,
          mobile:values.mobile,
          facebook:values.facebook,
          instagram:values.instagram,
        },
        openHours:values.openHours,
        images:values.images
      }
      console.log("data -----", data)
    }
  })
  const handleImageChange = async(e) => {
    const file = e.target.files[0]
    setUploadImage(true)
    const image = await UploadImageToCloudinary(file)
    formik.setFieldValue('images', [...formik.values.images, image])
    setUploadImage(false)
  }
  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images]
    updatedImages.splice(index, 1)
    formik.setFieldValue('images', updatedImages)
  }



  return (
    <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
      <div className='lg:max-w-4xl'>
        <h1 className='font-bold text-2xl text-center py-2'>
          Thêm nhà hàng
        </h1>
        <form onSubmit={formik.handleSubmit} className='space-y-4'>
          <Grid container spacing={2}>
            <Grid className='flex flex-wrap gap-5' item xs={12} >
              <input
                accept='image/*'
                id='fileInput'
                style={{ display: 'none' }}
                onChange={handleImageChange}
                type="file" />

              <label className='relative' htmlFor="fileInput">
                <span className='w-24 h-24 cursor-pointer flex items-center justify-center
            p-3 border rounded-md border-gray-600'>
                  <AddPhotoAlternateIcon className="text-white" />
                </span>
                {
                  uploadImage && <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24
              flex justify-center items-center'>
                    <CircularProgress />
                  </div>
                }
              </label>
              <div className='flex flex-wrap gap-2'>
                {formik.values.images.map((image, index) =>
                  <div className='relative'>
                    <img
                      className='w-24 h-24 object-cover'
                      key={index}
                      src={image} alt=""
                    />
                    <IconButton
                      size='small'
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        outline: 'none'
                      }}
                      onClick={() => handleRemoveImage(index)}>
                      <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </div>)}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth
                id='name'
                name='name'
                label="Tên"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.name}>

              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth
                id='description'
                name='description'
                label="Mô tả"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.description}>

              </TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='cuisineType'
                name='cuisineType'
                label="Kiểu ẩm thực"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.cuisineType}>

              </TextField>
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='openHours'
                name='openHours'
                label="Giờ mở cửa"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.openHours}>

              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth
                id='streetAddress'
                name='streetAddress'
                label="Địa chỉ"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.streetAddress}>

              </TextField>
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField fullWidth
                id='ward'
                name='ward'
                label="Xã/Phường"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.ward}>

              </TextField>
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField fullWidth
                id='district'
                name='district'
                label="Quận/Huyện"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.district}>

              </TextField>
            </Grid>

            <Grid item xs={12} lg={4}>
              <TextField fullWidth
                id='city'
                name='city'
                label="Tỉnh/Thành phố"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.city}>

              </TextField>
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='email'
                name='email'
                label="Email"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.email}>

              </TextField>
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='mobile'
                name='mobile'
                label="Hotline"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.mobile}>

              </TextField>
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='facebook'
                name='facebook'
                label="Facebook"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.facebook}>

              </TextField>
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField fullWidth
                id='instagram'
                name='instagram'
                label="instagram"
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.instagram}>

              </TextField>
            </Grid>
          </Grid>
          <div className="flex justify-end items-end h-full">
            <Button className='' variant='contained' color='primary' type='submit'>Thêm nhà hàng</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateRestaurantForm