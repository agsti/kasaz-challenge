package main

import (
	"fmt"

	"github.com/ihatetohink/kasaz-backend/lib"
	"github.com/ihatetohink/kasaz-backend/lib/apis"
)

func main() {
	db, err := lib.NewDatabaseConnection()
	if err != nil {
		panic("failed to connect database")
	}
    db.Init()

    kasazResponse, err := apis.FetchKasazApi()
    if err != nil {
        fmt.Println(err)
        panic("Error while calling Kasaz API")
    }

    for _, m := range kasazResponse.Markers {
        l := lib.Listing{
            Location : "Barcelona",
            Title: m.Title,
            Price: m.Price,
            AreaSqm: m.AreaSqm,
            NRooms: m.Rooms,
            NBathrooms: m.Bathrooms,
            ImageUrl: m.Images[0].ImageUrl,
        }
        db.Store(&l)
    }
    fmt.Println(db.ListAll())

}
