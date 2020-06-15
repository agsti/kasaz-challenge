package lib

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

const PAGE_SIZE = 10

type Database struct {
    db *gorm.DB
}

func NewDatabaseConnection() (*Database,error) {
	db, err := gorm.Open("sqlite3", "test.db")
	return &Database{db}, err
}

func (d *Database) Init() {
	d.db.AutoMigrate(&Listing{})
}

func (d *Database) Store(l *Listing) {
    d.db.Create(l)
}

func (d *Database) ListAll() []Listing {
    var ret []Listing
    d.db.Find(&ret)
    return ret
}

func (d *Database) Filter(minPrice, maxPrice, minArea, maxArea, minRooms, page *int)  []Listing{
    tx := d.db
    if minPrice != nil {
        tx = tx.Where("price > ?", minPrice)
    }
    if maxPrice != nil {
        tx = tx.Where("price < ?", maxPrice)
    }
    if minArea != nil {
        tx = tx.Where("area_sqm > ?", minArea)
    }
    if maxArea != nil {
        tx = tx.Where("area_sqm < ?", maxArea)
    }
    if minRooms != nil {
        tx = tx.Where("n_rooms > ?", minRooms)
    }

    var ret []Listing
    offset := PAGE_SIZE * *page
    fmt.Println("OFFSET", offset)
    fmt.Println("LIMIT", PAGE_SIZE)
    tx.Offset(offset).Limit(PAGE_SIZE).Find(&ret)
    return ret
}

