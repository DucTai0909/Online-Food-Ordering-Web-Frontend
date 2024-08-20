import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';

const AddressCard = ({item, showButton, handleSelectAddress}) => {
    
  return (
    <Card className="flex gap-5 w-64 p-5">
        <HomeIcon />
        <div className='space-y-3 text-gray-500'>
            <h1 className='font-semibold text-lg text-white'>Nhà</h1>
            <p>
                350/54/35P, Lê Đức Thọ, phường 6, Gò Vấp, TP.Hồ Chí Minh
            </p>
            {showButton &&(
                <Button variant='outlined' fullWidth onClick={()=> handleSelectAddress(item)}>Chọn</Button>
            )}
        </div>

    </Card>
  )
}

export default AddressCard