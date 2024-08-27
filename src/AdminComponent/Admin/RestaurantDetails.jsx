import { Button, Card, CardContent, CardHeader, Grid } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export const RestaurantDetails = () => {
  const handleRestaurantStatus = () => {

  }
  return (
    <div className='lg:px-20 px-5 pb-10'>
      <div className='py-5 flex justify-center items-center gap-5'>
        <h1 className='text-2xl lg:text-5xl text-center font-bold p-5'>Nhà hàng Hương Quê</h1>
        <div>
          <Button color={true ? "primary" : "error"}
            className='py-[1rem] px-[2rem]'
            variant='contained'
            onClick={handleRestaurantStatus} size='large'>
            {true ? "Đóng" : "Mở"}
          </Button>
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Thông tin nhà hàng
            </span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Chủ</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>Nguyen To Duc Tai
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Tên nhà hàng</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>Nguyen To Duc Tai
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Kiểu ẩm thực</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>Nguyen To Duc Tai
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Giờ mở cửa</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>Nguyen To Duc Tai
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Tình trạng</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>
                    {true ? <span className='px-5 py-2 rounded-full bg-green-400 
                    text-gray-950'>Mở</span> : <span className='px-5 py-2 rounded-full bg-red-400 
                    text-gray-950'>Đóng</span>}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Địa chỉ
            </span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Tỉnh/Thành phố</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>Hồ Chí Minh
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Quận/Huyện</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>Gò Vấp
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Phường/Xã</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>Phường 6
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Địa chỉ</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>350 Lê Đức Thọ
                  </p>
                </div>
                
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card>
            <CardHeader title={<span className='text-gray-300'>Liên hệ
            </span>} />
            <CardContent>
              <div className='space-y-4 text-gray-200'>
                <div className='flex'>
                  <p className='w-48'>Email</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>nguyentoductai@gmail.com
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Hotline</p>
                  <p className='text-gray-400'>
                    <span className='pr-5'>-</span>+8423456789
                  </p>
                </div>
                <div className='flex'>
                  <p className='w-48'>Kênh liên hệ</p>
                  <div className='flex text-gray-400 items-center pb-3 gap-2'>
                    <span className='pr-5'>-</span>
                      <a href="/">
                        <FacebookIcon sx={{fontSize:"3rem"}}/>
                      </a>
                      <a href="/">
                        <InstagramIcon sx={{fontSize:"3rem"}}/>
                      </a>
                      <a href="/">
                        <XIcon sx={{fontSize:"3rem"}}/>
                      </a>
                  </div>
                </div>                
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
