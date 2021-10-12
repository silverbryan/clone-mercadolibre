import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../../actions/searchActions';
import { INCREMENT, DECREMENT } from '../../constants';
import './Pagination.css';

const PaginationComponent = () => {
    const dispatch = useDispatch();
    const { currentSearchTerm, currentSearchType, currentPage } = useSelector(state => state.user.recentResults);

    const handleOnClick = type => {
        let page;
        if (type === DECREMENT && currentPage > 0) {
            page = currentPage - 1;
            dispatch(search(currentSearchTerm, page, currentSearchType));
        }
        if (type === INCREMENT) {
            page = currentPage + 1;
            dispatch(search(currentSearchTerm, page, currentSearchType));
        }
    }

    return (
        <div>
            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink onClick={() => handleOnClick(DECREMENT)}>Anterior</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={() => handleOnClick(INCREMENT)}>Siguiente</PaginationLink>
                </PaginationItem>
            </Pagination>
        </div>

    );
}

export default PaginationComponent;