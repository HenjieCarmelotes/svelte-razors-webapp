import { writable } from "svelte/store";
import localProducts from '../localProducts';

const store = writable(flattenProducts([...localProducts]));

//3 methods: subscribe, set, and update.

function flattenProducts(data) {
    return data.map(item => {
        let image = item.image.url;
        //Return a new array and override the image from
        //object to just get the url value.
        return {...item, image}
    })
}


export default store;

