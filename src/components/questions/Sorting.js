import React from 'react';
import PropTypes from 'prop-types';
import View from "./View";

const Sorting = ({data, ...props}) => {

  const ids_by_key = (key) => (data) =>  // make index(data) for key
      Object.values(data)
            .reduce((index, row) => {
                        index[row[key]] = row.id
                        console.log(row.id)
                        return index
                    }, {})

  const ids_by_name = ids_by_key('name')  // returns an index function

  return(
    <ul>
      {Object.values(data).map(q =>
        <li>
          {q.id}
        </li>
      )}

    </ul>
  )
}

View.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};


export default Sorting;
