import { GetListings } from "../../api";
import { SetListings, AddListings } from "./actions";


const mapApiToFE = (apiReponse) =>{
    return {
        title: apiReponse.Title,
        price: apiReponse.Price,
        priceSqm: apiReponse.Price / apiReponse.AreaSqm,
        sqm: apiReponse.AreaSqm,
        nRooms: apiReponse.NRooms,
        nBath: apiReponse.NBathrooms,
        picture: apiReponse.ImageUrl
    }
}


export const GetNewListings = () => {
    return function(dispatch , getState) {
        const {filters} = getState()
 
        return GetListings(
            filters.minSize, 
            filters.maxSize,
            filters.minPrice, 
            filters.maxPrice, 
            filters.minRooms, 
            0
        ).then(r =>{
            dispatch(SetListings(r.data.map(mapApiToFE)))
        })
    }
}

export const GetMoreListings = () => {
    return function(dispatch , getState) {
        const {filters, listings} = getState()
 
        return GetListings(
            filters.minSize, 
            filters.maxSize,
            filters.minPrice, 
            filters.maxPrice, 
            filters.minRooms, 
            listings.nextPage
        ).then(r =>{
            dispatch(AddListings(r.data.map(mapApiToFE)))
        })
    }
}