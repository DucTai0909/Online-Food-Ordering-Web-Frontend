import { Chip, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
  return (
    <div className='px-5'>
        <div className='lg:flex items-center lg:space-x-5'>
            <div>
                <img className='w-[5rem] h-[5rem] object-cover' 
                    src="https://thehealthyhouse.vn/_next/image/?url=https%3A%2F%2Fapi.calories.vn%2Fuploads%2Fquan_com_tam_o_ha_noi_4bc3baefa9.jpg&w=828&q=75" alt="" />
            </div>
            <div className='flex items-center justify-between lg:w-[70%]'>
                <div className='space-y-1 lg:space-y-3 w-full'>
                    <p>Cơm tấm Sài Gòn</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center space-x-1'>
                            <IconButton>
                                <RemoveCircleOutlineIcon/>
                            </IconButton>
                            <div className='w-5 h-5 text-xs flex items-center justify-center'>
                                {5}
                            </div>
                            <IconButton>
                                <AddCircleOutlineIcon/>
                            </IconButton>
                        </div>
                    </div>
                </div>
                <p>50.000 VND</p>
            </div>
        </div>
        <div className='pt-3 space-x-2'>
            {[1,1,1,].map((item)=><Chip label={"Mon chinh"}/>)}
        </div>
    </div>
  )
}

export default CartItem