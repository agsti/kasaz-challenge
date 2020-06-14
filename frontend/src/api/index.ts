import axios, { AxiosResponse } from "axios";


export function GetListings(minArea? : number, maxArea? : number, minPrice? : number, maxPrice? : number, minRooms? : number, page? : number ) : Promise<AxiosResponse>{

    const params = Object.assign({},
        minArea === null ? null : {minArea},
        maxArea === null ? null : {maxArea},
        minPrice === null ? null : {minPrice},
        maxPrice === null ? null : {maxPrice},
        minRooms === null ? null : {minRooms},
        page === null ? null : {page},
        
      );

    return axios.get('http://localhost:8080/listings', { params })
}