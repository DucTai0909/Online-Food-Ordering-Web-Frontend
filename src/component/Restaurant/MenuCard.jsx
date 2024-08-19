import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { Category } from '@mui/icons-material';

// const ingredients =[
//     {
//         category:"Món chính",
//         ingredients: "Thịt nướng miếng to"
//     },
//     {
//         category:"Món chính",
//         ingredients: "Thịt nướng miếng nhỏ"
//     },
//     {
//         category:"Món chính",
//         ingredients: "Trứng ốp la"
//     },
//     {
//         category:"Rau",
//         ingredients: "Xà lách"
//     },

//     {
//         category:"Rau",
//         ingredients: "Cà chua"
//     },
//     {
//         category:"Rau",
//         ingredients: "Dưa leo"
//     },
//     {
//         category:"Nước chấm",
//         ingredients: "Nước mắm cay nhiều"
//     },
//     {
//         category:"Nước chấm",
//         ingredients: "Nước mắm không cay"
//     },
// ]


const demo =[
    {
        category:"Món chính",
        ingredients: ["Thịt nướng miếng to","Thịt nướng miếng nhỏ","Trứng ốp la"]
    },
    {
        category:"Rau",
        ingredients: ["Xà lách","Cà chua","Dưa leo"]
    },
    {
        category:"Nước chấm",
        ingredients: ["Nước mắm cay nhiều","Nước mắm không cay"]
    },

]

const MenuCard = () => {
    const handleCheckBoxChange=(value)=>{
        console.log(value);
    }
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img className='w-[7rem] h-[7rem] object-cover'
                src="https://thehealthyhouse.vn/_next/image/?url=https%3A%2F%2Fapi.calories.vn%2Fuploads%2Fquan_com_tam_o_ha_noi_4bc3baefa9.jpg&w=828&q=75" alt="" 
                />
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>Cơm tấm Sài Gòn</p>
                    <p>50.000 VND</p>
                    <p className='text-gray-400'>nice food</p>
                </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form >
            <div className='flex gap-5 flex-wrap'>
                {
                    demo.map((item)=>
                    <div>
                        <p>{ item.category }</p>
                        <FormGroup>
                            {
                                item.ingredients.map((item)=>
                                <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item} />
                                )
                            }
                        </FormGroup> 
                    </div>
                    )
                }
            </div>
            <div className='pt-5'>
                <Button 
                    variant="contained" 
                    disabled ={false} 
                    type="submit">{ true?"Thêm vào giỏ hàng" : "Hết hàng" }
                </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard