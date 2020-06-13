import React from "react";

import "./FilterView.css";

type FilterViewProps = {
    prices: string[], 
    propSizes: string[], 
    nRooms: string[]
}


export default function FilterView(props: FilterViewProps) {
    const {prices, propSizes, nRooms} = props;
    return (
        <div className="filter-view-container">
            <div className="filter-row">
                <div className="filter-title">
                    PRECIO
            </div>
                <div className="filter-min-max">
                    <select id="filter-price-min">
                       <option value="" disabled selected>Precio minimo</option>
                        {
                            prices.map(p => (
                                <option value={p} key={p} >{p}</option>
                            ))
                        }
                    </select>
					<div>
						-
					</div>

                    <select id="filter-price-max">
                       <option value="" disabled selected>Precio maximo</option>
                        {
                            prices.map(p => (
                                <option value={p} key={p} >{p}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className="filter-row">
                <div className="filter-title">
                    TAMANO
            </div>

                <div className="filter-min-max">
                    <select id="filter-prop-size-min">
                       <option value="" disabled selected>Tamano minimo</option>
                        {
                            propSizes.map(p => (
                                <option value={p} key={p} >{p}</option>
                            ))
                        }
                    </select>
					<div>
						-
					</div>
                    <select id="filter-prop-size-max">
                       <option value="" disabled selected>Tamano maximo</option>
                        {
                            propSizes.map(p => (
                                <option value={p} key={p} >{p}</option>
                            ))
                        }
                    </select>

                </div>
            </div>

            <div className="filter-row">
                <div className="filter-title">
                    HABITACIONES
                </div>
            </div>
                <ol className="nrooms-list">
					<li className="selected">TODOS</li>
                    {
                        nRooms.map(r => (
                            <li key={r}>{r}</li>
                        ))
                    }
                </ol>
			<div className="see-listings">
				VER INMUEBLES
			</div>
        </div>
    )

}
