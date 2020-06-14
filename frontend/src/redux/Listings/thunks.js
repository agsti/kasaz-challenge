import { GetListings } from "../../api";
import { SetListings } from "./actions";


const mapApiToFE = (apiReponse) =>{
    return {
        title: apiReponse.Title,
        price: apiReponse.Price,
        priceSqm: 3.21,
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