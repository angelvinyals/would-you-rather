import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Error from './Error';

const View = ({
  users
}) => (
  <div>

    <section>
      users
    </section>
  </div>
);

View.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  src: PropTypes.string,
  initialQuery: PropTypes.string.isRequired,
  renderImage: PropTypes.func,
  renderLoading: PropTypes.func,
  renderError: PropTypes.func,
};


export default View;
