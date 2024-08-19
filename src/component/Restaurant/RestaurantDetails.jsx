import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MenuCard from './MenuCard';

const categories = [
    "Pizza",
    "Cơm",
    "Cháo",
    "Hamburger",
    "Mì",
    "Gà",
    "Bún",
];

const foodTypes = [
    { label: "Tất cả", value: "all" },
    { label: "Món chay", value: "vegetarian" },
    { label: "Món mặn", value: "non_vegetarian" },
    { label: "Theo mùa", value: "seasonal" },
];

const menu = [1,1,1,1,1,1]


const RestaurantDetails = () => {
    const [foodType, setFoodType] =useState("all");
    const handleFilter = (e) => {
        console.log(e.target.value, e.target.name);
    }
    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home/Vietnam/Nhà hàng Hương Quê</h3>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <img className='w-full h-[40vh] object-cover' src="https://phongcachmoc.vn/upload/images/thiet-ke-nha-hang-viet-nam-14.jpg" alt="" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover' src="https://phongcachmoc.vn/upload/images/thiet-ke-nha-hang-viet-nam-12.jpg" alt="" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img className='w-full h-[40vh] object-cover' src="https://phongcachmoc.vn/upload/images/thiet-ke-nha-hang-viet-nam-24.jpg" alt="" />
                        </Grid>
                    </Grid>
                </div>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>Nhà hàng Hương Quê</h1>
                    <p className='text-gray-500 mt-1'>
                        Nhà hàng Hương Việt mang đến hương vị tinh túy của ẩm thực Việt Nam, 
                        nơi bạn có thể trải nghiệm những món ăn truyền thống với nguyên liệu tươi ngon 
                        và cách chế biến tinh tế. Từ phở, bún chả, đến các món ăn kèm đậm chất quê hương, 
                        chúng tôi cam kết đem lại trải nghiệm ẩm thực độc đáo, gắn liền với bản sắc 
                        văn hóa Việt. Hãy đến và khám phá hành trình ẩm thực tại Hương Việt, nơi sự hài lòng
                        của bạn là ưu tiên hàng đầu.
                    </p>
                    <div className='space-y-3 mt-3'>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <LocationOnIcon />
                            <span>
                                350 Lê Văn Sỹ, Phường 1, Quận Tân Bình, TP.Hồ Chí Minh
                            </span>
                        </p>
                        <p className='text-gray-500 flex items-center gap-3'>
                            <ScheduleIcon />
                            <span>
                                Thứ hai - Chủ nhật: 8:00 - 22:00
                            </span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider />
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter'>
                    <div className='box space-y-5 lg:sticky top-28'>
                        <Divider/>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Phân loại 
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodTypes}>
                                    {foodTypes.map((item) => <FormControlLabel
                                        key={item.value}
                                        value={item.value}
                                        control={<Radio />} label={item.label} />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }}>
                                Danh mục
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodTypes}>
                                    {categories.map((item) => <FormControlLabel
                                        key={item}
                                        value={item}
                                        control={<Radio />} label={item} />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.map((item)=><MenuCard/>)}
                                        
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails;