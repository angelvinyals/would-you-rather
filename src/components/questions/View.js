import React from 'react';
import PropTypes from 'prop-types';


const View = () => (
  <div>
    <section>
      <h3>option one</h3>
      <h3>option two</h3>
    </section>
  </div>
);

View.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};


export default View;
