import React, { useRef, useEffect } from "react";
import ListingItem, { ListingItemProps } from "./ListingItem";

import "./ListingsList.css";

type ListingListProps = {
    listings: ListingItemProps[],
    scrollPosition: number,
    onScroll: (scrollTop: number, isEnd: boolean) => void
}

export default function ListingListView(props: ListingListProps) {
    const { listings, scrollPosition, onScroll } = props;
    const listRef = useRef<HTMLDivElement>()

    useEffect(() => {
        listRef.current.scrollTop = scrollPosition
    }, [scrollPosition])

    const handleOnScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        let element = e.currentTarget
        const isEnd = element.scrollHeight - element.scrollTop === element.clientHeight;
        onScroll(element.scrollTop, isEnd)
    }
    return <div className="listing-list" ref={listRef} onScroll={handleOnScroll}>
        {
            listings.map((l, i) => (
                <ListingItem
                    key={i}
                    {...l} />
            ))
        }
    </div>
}