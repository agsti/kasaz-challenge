import React from "react";
import Select from "react-select";
import "./FilterView.css";

export type OptionsValue = {value: number, label: string};
export type Callback = (value: number) => void;
type FilterViewProps = {
    prices: OptionsValue[], 
    sizes: OptionsValue[], 
    nRooms: OptionsValue[],
	callbacks: {
		minPrice: Callback, 
		maxPrice: Callback,
		minSizeSqm: Callback,
		maxSizeSqm: Callback,
		minRooms: Callback,
	}
	
	filterValues: {
		minPrice: OptionsValue, 
		maxPrice: OptionsValue,
		minSizeSqm: OptionsValue,
		maxSizeSqm: OptionsValue,
		minRooms: OptionsValue,
	}
}


export default function FilterView(props: FilterViewProps) {
    const {prices, sizes, nRooms, callbacks, filterValues} = props;
	const {
		minPrice,
		maxPrice,
		minSizeSqm,
		maxSizeSqm,
		minRooms
    } = filterValues;
    return (
        <div className="filter-view-container">
            <div className="filter-row">
                <div className="filter-title">
                    PRECIO
            </div>
                <div className="filter-min-max">
              <Select
			  		className="filter-dropdown"
					value={minPrice}
					onChange={(v:OptionsValue) => callbacks.minPrice(v.value)}
					options={prices}
				  />
			<div>
			-
			</div> 
              <Select
			  		className="filter-dropdown"
					value={maxPrice}
					onChange={(v:OptionsValue) => callbacks.maxPrice(v.value)}
					options={prices}
				  />
                </div>
            </div>

            <div className="filter-row">
                <div className="filter-title">
                    TAMANO
            </div>

                <div className="filter-min-max">
              <Select
			  		className="filter-dropdown"
					value={minSizeSqm}
					onChange={(v:OptionsValue) => callbacks.minSizeSqm(v.value)}
					options={sizes}
				  />
					<div>
						-
					</div>
              <Select
			  		className="filter-dropdown"
					value={maxSizeSqm}
					onChange={(v:OptionsValue) => callbacks.maxSizeSqm(v.value)}
					options={prices}
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
			<div className="see-listings">
				VER INMUEBLES
			</div>
        </div>
    )

}
