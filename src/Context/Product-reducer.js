import { GET_CATEGORY, GET_CATEGORY_PRODUCT, GET_ALLPRODUCTS, ADD_TOCARD, DELETE_TOCARD, SEARCH_PRODUCT } from "./Types";


export const ProductReaducer = (state, action) => {
    switch (action.type) {
        case GET_CATEGORY: {
            return {
                ...state,
                categories: action.payload
            }
        }

        case GET_ALLPRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }

        case ADD_TOCARD: {
            const { id } = action;
            const { cart, products } = state;
            const element = products.find((elem) => elem.id === id);
            const newArr = [...cart, element];
            return {
              ...state,
              cart: newArr
            }
        }

        case DELETE_TOCARD: {
            const { index } = action;
            const { cart } = state;
            const newArr = [...cart.filter((_, i) => i !== index)];
            return {
              ...state,
              cart: newArr
            };
          }

        case SEARCH_PRODUCT: {
            const { text } = action
            const { products } = state
            const newArr = products.filter((elem) => elem.title.toLowerCase().includes(text.toLowerCase()))
            console.log(newArr);
            return {
                ...state,
                products: newArr
            }
        }

        case GET_CATEGORY_PRODUCT: {
            return {
                ...state,
                data: action.payload
            }
        }
        
        default:
            return state
    }
}