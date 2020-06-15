package apis

import (
	"encoding/json"
	"net/http"
)

type KasazImage struct {
    ImageUrl string `json:"imageUrl"`
    RoomType string `json:"roomType"`
}

type KasazMarker struct{
    Id uint64 `json:"id"`
    Title string `json:"t"`
    Images []KasazImage `json:"i"`
    Rooms int `json:"r"`
    Bathrooms int `json:"b"`
    Price int `json:"p"`
    AreaSqm float64 `json:"s"`
}

type KasazResponse struct {
    Markers []KasazMarker `json:"markers"`
    Polygon interface{} `json:"polygon"`
}

func FetchKasazApi() (*KasazResponse, error){
    client := http.Client{}

    req, _ := http.NewRequest("GET", "https://www.kasaz.com/api/v1/search/update_map_results", nil)

    query := req.URL.Query()

    query.Add("filters[bathrooms]","1")
    query.Add("filters[bedrooms]","all")
    query.Add("filters[location]","Barcelona")
    query.Add("filters[lodgingType][attic]","true")
    query.Add("filters[lodgingType][chalet]","true")
    query.Add("filters[lodgingType][duplex]","true")
    query.Add("filters[lodgingType][flat]","true")
    query.Add("filters[lodgingType][ground_floor]","true")
    query.Add("filters[lodgingType][house]","true")
    query.Add("filters[lodgingType][loft]","true")
    query.Add("filters[lodgingType][studio]","true")
    query.Add("filters[price][max]","2000000")
    query.Add("filters[price][min]","")
    query.Add("filters[showHiddenListings]","false")
    query.Add("filters[sortBy]","relevance")
    query.Add("filters[surface][max]","500")
    query.Add("filters[surface][min]","")
    query.Add("filters[video]","false")
    query.Add("filters[virtualTour]","false")
    query.Add("locale","es")
    query.Add("location[city]","Barcelona")
    query.Add("location[country]","Spain")
    query.Add("viewport[neLat]","41.50021449662386")
    query.Add("viewport[neLng]","2.2428382845702988")
    query.Add("viewport[swLat]","41.289280522931975")
    query.Add("viewport[swLng]","2.0546974154296738")

    req.URL.RawQuery = query.Encode()
    fmt.Println("Calling", req.URL)
    resp, err := client.Do(req)
    if err != nil {
        return nil, err
    }

    var data KasazResponse
    err = json.NewDecoder(resp.Body).Decode(&data)

    return &data, err
}

