package main

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/ihatetohink/kasaz-backend/lib"
)

func panicIfError(err error){
    if err != nil {
        fmt.Println(err)
        panic("Error")
    }
}

func convertToIntegerOrFail(s string, c * gin.Context) *int{
    if s == "" {
        return nil
    }
    i, err := strconv.Atoi(s)
    if err != nil {
        c.Error(err)
    }
    return &i
}

func main(){
    database, err := lib.NewDatabaseConnection()
    panicIfError(err)

    router := gin.Default()
    router.Use(cors.Default())
    router.GET("/listings", func(c * gin.Context) {
        minAreaStr := c.Query("minArea")
        maxAreaStr := c.Query("maxArea")
        minPriceStr := c.Query("minPrice")
        maxPriceStr := c.Query("maxPrice")
        minRoomsStr := c.Query("minRooms")
        pageStr := c.DefaultQuery("page", "0")

        minArea := convertToIntegerOrFail(minAreaStr, c)
        maxArea := convertToIntegerOrFail(maxAreaStr, c)
        minPrice := convertToIntegerOrFail(minPriceStr, c)
        maxPrice := convertToIntegerOrFail(maxPriceStr, c)
        minRooms := convertToIntegerOrFail(minRoomsStr, c)
        page := convertToIntegerOrFail(pageStr, c)

        filteredData := database.Filter(minPrice, maxPrice, minArea, maxArea, minRooms, page)
        c.JSON(http.StatusOK,  filteredData)
    })

    router.Run(":8080")

}
