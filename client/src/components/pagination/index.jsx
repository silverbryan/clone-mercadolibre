import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../../actions/searchActions';
import { SEARCH_BY_QUERY } from '../../constants';
import './Pagination.css';

const PaginationComponent = ({ maxElements }) => {
    const dispatch = useDispatch();
    const currentSearchTerm = useSelector(state => state.user.recentResults.currentSearchTerm);
    const cache = useSelector(state => state.user.searchTerms);

    const handleOnClick = event => {
        const page = event.target.innerText;
        dispatch(search(currentSearchTerm, page, SEARCH_BY_QUERY));
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