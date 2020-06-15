import React from "react";
import Select from "react-select";
import "./FilterView.css";

export type OptionsValue = {value: number, label: string};
export type Callback = (value: number) => void;
type FilterViewProps = {
	visible: boolean,
    prices: OptionsValue[], 
    sizes: OptionsValue[], 
	nRooms: OptionsValue[],

	onClickSeeListings: ()=>void,
	enableSeeListings: boolean,
	callbacks: {
		minPrice: Callback, 
		maxPrice: Callback,
		minSizeSqm: Callback,
		maxSizeSqm: Callback,
		minRooms: Callback,
	}
	
	filterValues: {
		minPrice?: OptionsValue, 
		maxPrice?: OptionsValue,
		minSizeSqm?: OptionsValue,
		maxSizeSqm?: OptionsValue,
		minRooms: OptionsValue,
	}
}

export default function FilterView(props: FilterViewProps) {
    const {
		visible,
		prices,
		sizes,
		nRooms,
		callbacks,
		filterValues,
		onClickSeeListings,
		enableSeeListings
	} = props;

	const {
		minPrice,
		maxPrice,
		minSizeSqm,
		maxSizeSqm,
		minRooms
	} = filterValues;
	
	const onSeeListingsClickHandler = ()=> {
		enableSeeListings && onClickSeeListings()
	}

    return (
        <div className={visible?"filter-view-container" : "filter-view-container hidden"}>
            <div className="filter-row">
                <div className="filter-title">
                    PRECIO
            </div>
                <div className="filter-min-max">
              <Select
					  className="filter-dropdown"
					  placeholder="Precio minimo"
					value={minPrice}
					onChange={(v:OptionsValue) => callbacks.minPrice(v.value || null)}
					options={prices}
				  />
		
              <Select
					  className="filter-dropdown"
					  placeholder="Precio maximo"
					value={maxPrice}
					onChange={(v:OptionsValue) => callbacks.maxPrice(v.value || null)}
					options={prices}
				  />
                </div>
            </div>

            <div className="filter-row">
                <div className="filter-title">
                    TAMAÑO
            </div>

                <div className="filter-min-max">
              <Select
					  className="filter-dropdown"
					  placeholder="Tamaño minimo"
					value={minSizeSqm}
					onChange={(v:OptionsValue) => callbacks.minSizeSqm(v.value || null)}
					options={sizes}
				  />
					
              <Select
					  className="filter-dropdown"
					  placeholder="Tamaño maximo"
					value={maxSizeSqm}
					onChange={(v:OptionsValue) => callbacks.maxSizeSqm(v.value || null)}
					options={sizes}
				  />

                </div>
            </div>

            <div className="filter-row">
                <div className="filter-title">
                    HABITACIONES
                </div>
            </div>
                <ol className="nrooms-list">
                    {
                        nRooms.map((r, i) => (
                            <li 
								className={r.value===minRooms.value ? "selected":""}
								key={r.value}
								onClick={() => {
									callbacks.minRooms(nRooms[i].value)
								}}
							>
							{r.label}
							</li>
                        ))
                    }
                </ol>
			<div className={enableSeeListings?"see-listings":"see-listings disabled"} onClick={onSeeListingsClickHandler}>
				VER INMUEBLES
			</div>
        </div>
    )

}
