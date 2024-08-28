import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateFoodCategory = () => {
    const [formData, setFormData] = useState({
        categoryName: '',
        restaurantId: ""
    })
    const handleSubmit = () => {
        const data = {
            name: formData.categoryName,
            restaurantId: {
                id: 9
            }
        }
        console.log("data -----", data)
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value
        })
    }
    return (
        <div className=''>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Thêm danh mục món ăn</h1>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <TextField fullWidth
                        id='categoryName'
                        name='categoryName'
                        label="Tên danh mục"
                        variant='outlined'
                        onChange={handleInputChange}
                        value={formData.categoryName}>
                    </TextField>
                    <Button variant='contained' type='submit'>
                        Tạo danh mục
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CreateFoodCategory