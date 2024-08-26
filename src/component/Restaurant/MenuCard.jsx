import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'
import { Category } from '@mui/icons-material';
import { categorizeIngredients } from '../util/CategorizeIngredients';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../State/Cart/Action';

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

const MenuCard = ({item}) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const dispatch = useDispatch();

    const handleCheckBoxChange=(itemName)=>{
        console.log(itemName);
        if(selectedIngredients.includes(itemName)){
            setSelectedIngredients(selectedIngredients.filter((item)=>item!==itemName));
        }else{
            setSelectedIngredients([...selectedIngredients, itemName]);
        }
    }

    const handleAddItemToCart=(e)=>{
        e.preventDefault();
        const reqData ={
            token:localStorage.getItem("jwt"),
            cartItem:{
                foodId:item.id,
                quantity:1,
                ingredients: selectedIngredients,
            },
        };
        dispatch(addItemToCart(reqData))
        console.log("req Data", reqData); 
    };

    

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
                src={item.images[0]} alt="" 
                />
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>{item.name}</p>
                    <p>{item.price.toLocaleString('vi-VN')} VND</p>
                    <p className='text-gray-400'>{item.description}</p>
                </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleAddItemToCart}>
            <div className='flex gap-5 flex-wrap'>
                {
                    Object.keys(categorizeIngredients(item.ingredients)).map((category)=>
                    <div>
                        <p>{ item.category }</p>
                        <FormGroup>
                            {
                                categorizeIngredients(item.ingredients)[category].map((item)=>
                                <FormControlLabel 
                                    key={item.id} 
                                    control={
                                    <Checkbox 
                                        onChange={()=>handleCheckBoxChange(item.name)}
                                    />
                                } 
                                label={item.name} />
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