import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import OrderTable from './OrderTable'

const orderStatus =[
  {label:"Đang chờ", value:"PENDING"},
  {label:"Hoàn thành", value:"COMPLETED"},
  {label:"Tất cả", value:"ALL"},

]
export const Orders = () => {
  const [filterValue, setfilterValue] = useState()
  const handleFilter=(e,value)=>{
    setfilterValue(value)
  }
  return (
    <div className='px-2'>
      <Card className='p-5'>
        <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
          Trạng thái đơn hàng
        </Typography>
        <FormControl>
          <RadioGroup onChange={handleFilter} row name='category' value={filterValue || "all"}>
            {orderStatus.map((item)=><FormControlLabel 
              key={item.label}
              value={item.value}
              control={<Radio/>}
              label={item.label}
              sx={{color:"gray"}}
            />)}
          </RadioGroup>
        </FormControl>
      </Card>
      <OrderTable/>
    </div>
  )
}
