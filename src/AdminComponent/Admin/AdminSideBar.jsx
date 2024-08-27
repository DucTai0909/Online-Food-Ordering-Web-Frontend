import { Dashboard, ShoppingBag } from '@mui/icons-material'
import React from 'react'
import Shop2Icon from '@mui/icons-material/Shop2';
import CategoryIcon from '@mui/icons-material/Category';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../component/State/Authentication/Action';

const menu=[
    {title:"Dashboard", key:"Dashboard", icon:<Dashboard/>, path:"/"},
    {title:"Đơn hàng",key:"Orders", icon:<ShoppingBag/>, path:"/orders"},
    {title:"Menu", key:"Menu",icon:<Shop2Icon/>, path:"/menu"},
    {title:"Danh mục",key:"Food Category", icon:<CategoryIcon/>, path:"/category"},
    {title:"Thành phần", key:"Ingredients",icon:<FastfoodIcon/>, path:"/ingredients"},
    {title:"Sự kiện", key:"Events",icon:<EventIcon/>, path:"/event"},
    {title:"Thông tin",key:"Details", icon:<AdminPanelSettingsIcon/>, path:"/details"},
    {title:"Đăng xuất", key:"Logout", icon:<LogoutIcon/>, path:"/"},


]

export const AdminSideBar = ({handleClose}) => {
    const isSmallScreen = useMediaQuery("(max-width:1080px")
    const navigate =useNavigate()
    const dispatch = useDispatch()

    const handleNavigate=(item)=>{
        navigate(`/admin/restaurants${item.path}`)
        if(item.key ==="Logout"){
            navigate("/")
            dispatch(logout())
            handleClose()
        }
    }
  return (
    <div>
        <>
            <Drawer 
                variant={isSmallScreen?"temporary":"permanent"} 
                onClose={handleClose} 
                open={true} 
                anchor='left' 
                sx={{zIndex:1}}>

                    <div className='w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center
                                    text-xl space-y-[1.65rem]'>
                        {menu.map((item, i)=>
                        <>
                            <div onClick={()=>handleNavigate(item)} className='px-5 flex items-center gap-5 cursor-pointer'>
                                {item.icon}
                                <span>{item.title}</span>
                            </div>
                            {i!==menu.length-1 && <Divider/>}
                        </>)}
                    </div>

            </Drawer>
        </>
    </div>
  )
}
