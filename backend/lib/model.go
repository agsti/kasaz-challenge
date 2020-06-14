package lib

import "github.com/jinzhu/gorm"

type Listing struct {
    gorm.Model
    Location string;
    Title string;
    Price int;
    AreaSqm float64;
    NRooms int;
    NBathrooms int;
    ImageUrl string;
}
