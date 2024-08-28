import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateIngredientCategoryForm = () => {
    const [formData, setFormData] = useState({
        name: ''
    })
    const handleSubmit = () => {
        
        console.log(formData)
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
                <h1 className='text-gray-400 text-center text-xl pb-10'>Thêm danh mục thành phần</h1>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <TextField fullWidth
                        id='name'
                        name='name'
                        label="Tên danh mục"
                        variant='outlined'
                        onChange={handleInputChange}
                        value={formData.name}>
                    </TextField>
                    <Button variant='contained' type='submit'>
                        Tạo danh mục
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CreateIngredientCategoryForm