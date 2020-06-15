import React, { useRef, useEffect, EventHandler } from "react";

import BathroomIcon from "./icons/bathroom.svg";
import BedroomIcon from "./icons/bedroom.svg";
import OkIcon from "./icons/ok.svg";

import "./ListingsList.css";

type ListingItemProps = {
    title: string,
    price: number,
    priceSqm: number,
    sqm: number,
    nRooms: number,
    nBath: number,
    picture: string
}


const ListingItem = (props : ListingItemProps) => {
    const {title, price, priceSqm, sqm, nRooms, nBath, picture} = props;
    return (
        <div className="listing-container">
            <div className="listing-image-price">
                <img src={picture} />
                <div className="listing-prices">
                    <div className="listing-price">
                        {price.toLocaleString()} €
                     </div>
                    <div className="listing-price-sqm">
                        {priceSqm.toFixed(0)} €/m²
                     </div>
                </div>
            </div>

            <div className="listing-title">
                {title}
            </div>
            <div className="listing-info-container">
                <div className="listing-info">
					<img src={OkIcon} />
                    {sqm} m²
                </div>
                <div className="listing-info">
					<img src={BedroomIcon} />
                    {nRooms} habs.
                </div>
                <div className="listing-info">
					<img src={BathroomIcon} />
                    {nBath} baños
                </div>
            </div>
        </div>
    )
}


type ListingListProps = {
    listings: ListingItemProps[],
    scrollPosition: number,
    onEndOfScroll: (arg0: number) => void
}

export default function ListingsList(props : ListingListProps){
    const {listings, scrollPosition, onEndOfScroll} = props;
    const listRef = useRef<HTMLDivElement>()

    useEffect(()=>{
        console.log("Scrolling element", listRef.current.scrollTop)
        listRef.current.scrollTop = scrollPosition
        
    }, [listings])

    const handleOnScroll = (e : React.UIEvent<HTMLDivElement, UIEvent>) =>{
        let element = e.currentTarget
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            
            console.log("End of scroll!")
            onEndOfScroll(element.scrollTop)
          }
    }

    return (
        <div className="listing-list" ref={listRef} onScroll={handleOnScroll}>
        {
            listings.map((l, i) => (
                                <ListingItem
                                key={i}
                                {...l}/>
                                ))
        }
        </div>
     )
}
