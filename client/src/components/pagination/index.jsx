import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { searchByQuery } from '../../actions/searchActions';
import './Pagination.css';

const PaginationComponent = ({ maxElements }) => {
    const dispatch = useDispatch();
    const currentSearchTerm = useSelector(state => state.user.recentResults.currentSearchTerm);
    const cache = useSelector(state => state.user.searchTerms);

    const handleOnClick = event => {
        const page = event.target.innerText;
        dispatch(searchByQuery(cache, currentSearchTerm, page));
    }

    return (
        <footer>
            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink first onClick={handleOnClick} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={handleOnClick}>
                        1
                </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={handleOnClick}>
                        2
                </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={handleOnClick}>
                        3
                </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={handleOnClick}>
                        4
                </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={handleOnClick}>
                        5
                </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={handleOnClick} >
                        6
                </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last onClick={handleOnClick} />
                </PaginationItem>
            </Pagination>
        </footer>

    );
}

export default PaginationComponent;