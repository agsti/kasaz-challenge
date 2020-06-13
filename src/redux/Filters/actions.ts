import * as AT from "./actionTypes";

export const SetMinPrice = (minPrice: number) => ({
    type: AT.SET_MIN_PRICE,
    payload: minPrice
})

export const SetMaxPrice = (maxPrice: number) => ({
    type: AT.SET_MAX_PRICE,
    payload: maxPrice
})

export const SetMinSize = (minSize: number) => ({
    type: AT.SET_MIN_SIZE,
    payload: minSize
})

export const SetMaxSize = (maxSize: number) => ({
    type: AT.SET_MAX_SIZE,
    payload: maxSize
})

export const SetMinRooms = (minRooms: number) => ({
    type: AT.SET_MIN_ROOMS,
    payload: minRooms
})

export const SetCity = (cityName: number) => ({
    type: AT.SET_CITY,
    payload: cityName
})
