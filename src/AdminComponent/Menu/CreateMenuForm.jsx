import { AddPhotoAlternate, Email } from '@mui/icons-material'
import { Box, Button, Chip, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { UploadImageToCloudinary } from '../util/UploadToCloudinary';

const initialValues = {
    name: '',
    description: '',
    price: '',
    category: '',
    restaurantId: '',
    vegetarian: true,
    seasonal: false,
    ingredients: [],
    images: []
}



const CreateMenuForm = () => {
    const [uploadImage, setUploadImage] = useState(false)
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            values.restaurantId = 9
            console.log("data -----", values)
        }
    })
    const handleImageChange = async (e) => {
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
                    Thêm Món Ăn
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
                                id='price'
                                name='price'
                                label="Giá"
                                variant='outlined'
                                onChange={formik.handleChange}
                                value={formik.values.price}>

                            </TextField>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Danh mục</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formik.values.category}
                                    label="Danh mục"
                                    onChange={formik.handleChange}
                                    name='category'
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-multiple-chip-label">Thành phần</InputLabel>
                                <Select
                                    labelId="demo-multiple-chip-label"
                                    id="demo-multiple-chip"
                                    name='ingredients'
                                    multiple
                                    value={formik.values.ingredients}
                                    onChange={formik.handleChange}
                                    input={<OutlinedInput id="select-multiple-chip" label="Thành phần" />}
                                    renderValue={(selected) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} />
                                            ))}
                                        </Box>
                                    )}
                                //   MenuProps={MenuProps}
                                >
                                    {[1, 1, 1].map((name, index) => (
                                        <MenuItem
                                            key={name}
                                            value={name}

                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>


                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Món ăn theo mùa</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="seasional"
                                    value={formik.values.seasonal}
                                    label="Món ăn theo mùa"
                                    onChange={formik.handleChange}
                                    name='seasonal'
                                >
                                    <MenuItem value={true}>Theo mùa</MenuItem>
                                    <MenuItem value={false}>Không</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Món có thể ăn chay</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="vagetarian"
                                    value={formik.values.vegetarian}
                                    label="Danh mục"
                                    onChange={formik.handleChange}
                                    name='vegetarian'
                                >
                                    <MenuItem value={true}>Có</MenuItem>
                                    <MenuItem value={false}>Không</MenuItem>
                                </Select>
                            </FormControl>
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

export default CreateMenuForm