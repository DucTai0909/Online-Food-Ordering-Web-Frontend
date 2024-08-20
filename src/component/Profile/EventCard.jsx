import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia 
            sx={{height:345}}
            image='https://img.lovepik.com/desgin_photo/45003/3362_detail.jpg!detail808'/>

            <CardContent>
                <Typography variant='h5' >
                    Nhà hàng Hương Quê
                </Typography>
                <Typography variant='body2' >
                    Giảm giá 20% cho tất cả món ăn
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"Gò Vấp"}</p>
                    <p className='text-sm text-blue-500'>9AM 1/8/2024</p>
                    <p className='text-sm text-red-500'>10PM 15/8/2024</p>
                </div>
            </CardContent>
            {false && <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}
