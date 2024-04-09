import { GET_CATEGORY, GET_CATEGORY_PRODUCT, GET_ALLPRODUCTS, ADD_TOCARD, DELETE_TOCARD, SEARCH_PRODUCT } from "./Types";
import { useReducer } from 'react';
import { MyContext } from "./My-context";
import { ProductReaducer } from "./Product-reducer";


export const ProductState = ({ children }) => {
    const initialState = {
        categories: [],
        products: [],
        cart: [],
        data: [],
        loading: false,
        error: null
    }

    const [state, dispatch] = useReducer(ProductReaducer, initialState)

    const getCategoriesState = (data) => dispatch({ type: GET_CATEGORY, payload: data });

    const getAllProductsState = (data) => dispatch({ type: GET_ALLPRODUCTS, payload: data });

    const searchClick = (text) => dispatch({ type: SEARCH_PRODUCT, text });

    const getCategoryProduct = (data) => dispatch({ type: GET_CATEGORY_PRODUCT, payload: data });

    const deleteToCard = (index) => dispatch({ type: DELETE_TOCARD, index });

    const addToCard = (id) => dispatch({ type: ADD_TOCARD, id });


    return (
        <MyContext.Provider value={{
            categories: state.categories,
            products: state.products,
            cart: state.cart,
            data: state.data,
            getCategoriesState,
            getAllProductsState,
            searchClick,
            getCategoryProduct,
            deleteToCard,
            addToCard
        }}>
            {children}
        </MyContext.Provider>
    )
}