import axios from "axios";

axios.defaults.baseURL = 'https://dummyjson.com';

// Данные категории

const getCategories = () => {
    return axios.get("/products/categories");
};

const getCategoryProduct = (product) => {
    return axios.get(`/products/category/${product}`);
};

const allProducts = () => {
    return axios.get('/products');
};

const postOrderProducts = (product) => {
    console.log('product>>>', product);
    const token = '6846158100:AAGifDHCxC6SuVN5_OLZE8tt4k0LNUMZqtw';
    const chat_id = '6064303468';
    const api_url = `https://api.telegram.org/bot${token}/sendMessage`;
    return axios.post(api_url, {
        parse_mode: 'HTML',
        text: `<b>Новый Заказ</b> \n ФИО:
        ${product.name} \n адрес:
        ${product.address} \n телефон номер заказчика:
        ${product.phone} \n название товара:
        ${product.title}`,
        chat_id
    });
};

export const services = {
    getCategories,
    getCategoryProduct,
    allProducts,
    postOrderProducts
};
