import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FILTER_LOW_PRICE, FILTER_HIGH_PRICE, FILTER_NEW, FILTER_USED } from '../../constants';
import { filterLowPrice, filterHighPrice, filterByUsed, filterByNew } from '../../actions/applicationPropertiesActions';
import './PrincipalFilters.css';

const PrincipalFilters = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleOnClick = (event) => {
        if (event.target.value === FILTER_LOW_PRICE) dispatch(filterLowPrice());
        if (event.target.value === FILTER_HIGH_PRICE) dispatch(filterHighPrice());
        if (event.target.value === FILTER_USED) dispatch(filterByUsed());
        if (event.target.value === FILTER_NEW) dispatch(filterByNew());
        history.push('/search#filters');
    }

    return (
        <div className="filters-principal">
            <div className="filter-container">
                <label className="filter-select-title">Filtrar Por:</label>
                <select className="filter-select" name="select-condition" id="select-condition">
                    <option defaultValue="Seleccionar">Seleccione</option>
                    <option value={FILTER_NEW} onClick={handleOnClick}>Nuevo</option>
                    <option value={FILTER_USED} onClick={handleOnClick}>Usado</option>
                </select>
            </div>
            <div className="filter-container">
                <label className="filter-select-title">Ordenar Por: </label>
                <select className="filter-select" name="select-order" id="select-order">
                    <option selected value="RELEVANTE">Mas Relevante</option>
                    <option value={FILTER_LOW_PRICE} onClick={handleOnClick}>Precio Mas Bajo</option>
                    <option value={FILTER_HIGH_PRICE} onClick={handleOnClick}>Precio Mas Alto</option>
                </select>
            </div>
        </div>
    );
}

export default PrincipalFilters;