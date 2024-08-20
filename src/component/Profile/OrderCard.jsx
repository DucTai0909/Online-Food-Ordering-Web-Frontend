import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img 
            className='h-16 w-16'
            src="https://thehealthyhouse.vn/_next/image/?url=https%3A%2F%2Fapi.calories.vn%2Fuploads%2Fquan_com_tam_o_ha_noi_4bc3baefa9.jpg&w=828&q=75" 
            alt="" 
            />
            <div>
                <p>Cơm tấm Sài Gòn</p>
                <p>50.000VND</p>
            </div>
        </div>
        <div>
            <Button className='cursor-not-allowed'> Hoàn thành </Button>
        </div>
    </Card>
  )
}
