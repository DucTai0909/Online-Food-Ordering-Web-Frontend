import { api } from '../../config/api';
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from './ActionType';

export const createMenuItem = ({ menu, jwt })=>{
    return async (dispatch) => {
        dispatch({type:CREATE_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.post("/api/admn/food", menu, {
                headers:{
                    Authorization:`Bearer ${jwt}`
                },
            });
            console.log("Create menu item", data);
            dispatch({type:CREATE_MENU_ITEM_SUCCESS, payload:data});
        } catch (error) {
            console.log("catch error",error);
            dispatch({type:CREATE_MENU_ITEM_FAILURE, payload:error});
        }
    }
}

export const getMenuItemsByRestaurantId = (reqData)=>{
    return async (dispatch) => {
        dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST});
        try {
            const {data} = await api.get(`/api/food/restaurant/${reqData.restaurantId}?vagetarian=${reqData.vagetarian}&nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&food_category=${reqData.foodCategory}`, {
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`
                },
            });
            console.log("Get all menu items", data);
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload:data});
        } catch (error) {
            console.log("catch error",error);
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload:error});
        }
    }
}

export const searchMenutem = ({ keyword, jwt })=>{
    return async (dispatch) => {
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.get(`/api/food/search?name=${keyword}`, {
                headers:{
                    Authorization:`Bearer ${jwt}`
                },
            });
            console.log("Search menu item", data);
            dispatch({type:SEARCH_MENU_ITEM_SUCCESS, payload:data});
        } catch (error) {
            console.log("catch error",error);
            dispatch({type:SEARCH_MENU_ITEM_FAILURE, payload:error});
        }
    }
}

// export const getAllIngredentsOfMenuItem = (reqData)=>{
//     return async (dispatch) => {
//         dispatch({type:GET_INGREDIENTS_OF_MENU_ITEM_REQUEST});
//         try {
//             const {data} = await api.get(`/api/food/ingredients/${reqData.menuItemId}`, {
//                 headers:{
//                     Authorization:`Bearer ${reqData.jwt}`
//                 },
//             });
//             console.log("Get all ingredients of menu item", data);
//             dispatch({type:GET_INGREDIENTS_OF_MENU_ITEM_SUCCESS, payload:data});
//         } catch (error) {
//             console.log("catch error",error);
//             dispatch({type:GET_INGREDIENTS_OF_MENU_ITEM_FAILURE, payload:error});
//         }
//     }
// }

export const updateMenuItemsAvailability = ({ foodId, jwt })=>{
    return async (dispatch) => {
        dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST});
        try {
            const {data} = await api.put(`/api/admin/food/${foodId}`, {}, {
                headers:{
                    Authorization:`Bearer ${jwt}`
                },
            });
            console.log("Update menu item availability", data);
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload:data});
        } catch (error) {
            console.log("catch error",error);
            dispatch({type:UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload:error});
        }
    }
}

export const deleteFoodAction = ({ foodId, jwt })=>{
    return async (dispatch) => {
        dispatch({type:DELETE_MENU_ITEM_REQUEST});
        try {
            const {data} = await api.delete(`/api/admin/food/${foodId}`, {
                headers:{
                    Authorization:`Bearer ${jwt}`
                },
            });
            console.log("Delete menu item", data);
            dispatch({type:DELETE_MENU_ITEM_SUCCESS, payload:data});
        } catch (error) {
            console.log("catch error",error);
            dispatch({type:DELETE_MENU_ITEM_FAILURE, payload:error});
        }
    }
}