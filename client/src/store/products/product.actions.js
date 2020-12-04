import axios from 'axios'
import { ProductActionTypes } from './product.types'

const url = `https://mern-minishop.herokuapp.com/api/products`
//const url = '/api/products'


// akcja listująca produkty ze sklepu
export const fetchAllProducts = () => async (dispatch) => {
    try {
        // ustaw stan aplikacji
        dispatch({ type: ProductActionTypes.PRODUCT_LIST_REQUEST })
        // pobierz dane
        const { data } = await axios.get(url)
        // zmień stan aplikacji na nowy
        dispatch({
            type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ProductActionTypes.PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.error ?
                error.response.data.error : error.message
        })
    }
}

// akcja listująca produkty ze sklepu
export const fetchProductByID = (id) => async (dispatch) => {
    try {
        // ustaw stan aplikacji
        dispatch({ type: ProductActionTypes.PRODUCT_DETAILS_REQUEST })
        // pobierz dane
        const { data } = await axios.get(`${url}/${id}`)
        // zmień stan aplikacji na nowy
        dispatch({
            type: ProductActionTypes.PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ProductActionTypes.PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.error ?
                error.response.data.error : error.message
        })
    }
}

export const fetchBestProducts = (pcs) => async (dispatch) => {
    try {
        // ustaw stan aplikacji
        dispatch({ type: ProductActionTypes.PRODUCT_LIST_REQUEST })
        // pobierz dane
        const { data } = await axios.get(url)
        //const { data } = await axios.get('/api/products')

        // sort by reviews
        const newArr = [...data].sort((a, b) => (a.rating < b.rating) ? 1 : ((b.rating < a.rating) ? -1 : 0)).slice(0, pcs)

        // zmień stan aplikacji na nowy
        dispatch({
            type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
            payload: newArr
        })
    } catch (error) {
        dispatch({
            type: ProductActionTypes.PRODUCT_LIST_FAIL,
            payload: error.response && error.response.data.error ?
                error.response.data.error : error.message
        })
    }
}
// other actions
//...