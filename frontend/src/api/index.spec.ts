import { GetListings } from "./index"

import { describe, expect, it, jest } from '@jest/globals';

import { mocked } from 'ts-jest/utils';

import axios, { AxiosStatic } from "axios";
jest.mock('axios')



const mockedA = mocked(axios, true);

// const mockedAxios = Axios as jest.Mocked<typeof Axios>;

describe('Backend API', () => {
    it('should set query params correctly when NO params are set', () => {

        GetListings()
        expect(mockedA.get).toBeCalledWith("http://localhost:8080/listings", {
            params:
            {
               
            }
        }
    )

    });

    it('should set query params correctly when ALL params are set', () => {

        GetListings(1, 2, 3, 4, 5, 6)
        expect(mockedA.get).toBeCalledWith("http://localhost:8080/listings", {
                params:
                {
                    minArea: 1,
                    maxArea: 2,
                    minPrice: 3,
                    maxPrice: 4,
                    minRooms: 5,
                    page: 6
                }
            }
        )

        
    });
});
