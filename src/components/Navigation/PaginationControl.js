import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControl({
  itemCount,
  perPage = 12,
  siblingCount = 0,
  boundaryCount = 2
}) {
  const classes = useStyles();
  const remainder = itemCount % perPage;
  let pageCount = (itemCount - remainder) / perPage;
  if(remainder !== 0){ pageCount = pageCount + 1; }

  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch({type: 'SET_PAGINATE_INDEX', value: value});
  }

    return (
      <div className={classes.root}>
        <Pagination
          count={pageCount}
          defaultPage={1}
          siblingCount={siblingCount}
          boundaryCount={boundaryCount}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          />
      </div>
    );
  }