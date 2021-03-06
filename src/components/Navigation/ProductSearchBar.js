import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'material-ui-search-bar';

const ProductSearchBar = () => {
  //console.log('searchbarprops');console.log(props);console.log('searchbarprops');
  const [redirect, setRedirect] = useState(false);
  const searchBarValue = useSelector(state => state.control.searchBarValue);
  const dispatch = useDispatch();
  let redi = <p hidden></p>;

  const requestSearchHandler = () => {
      dispatch({type: 'SET_PAGINATE_INDEX', value: 1})
      dispatch({type: 'SEARCH_FIELD_REQUEST', value:searchBarValue });
      setRedirect(true);
  };
  if(redirect){
    redi= <Redirect to='/search'/>;
  }

  return (
    <React.Fragment>
      <SearchBar
        onRequestSearch={requestSearchHandler}
        onChange={(value)=>{
          dispatch({type: 'SET_SEARCHBAR_VALUE', value:value});
          console.log(searchBarValue)}}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={searchBarValue}


      />
      {redi}
    </React.Fragment>
  );
};

export default ProductSearchBar;