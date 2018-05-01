import React from 'react';
import PropTypes from 'prop-types';
import {AppContext} from '../../App.js'
import {AppProvider} from '../../App.js'

const View = ({data, ...props}) => (
  <AppProvider>
  <div>
    <AppContext.Consumer>
        {(context) => <p>{context.number}</p>}
      </AppContext.Consumer>
    <section>
      <h3>{data["6ni6ok3ym7mf1p33lnez"].optionOne.text}</h3>
      <p>voted by:</p>
      {data["6ni6ok3ym7mf1p33lnez"].optionOne.votes.map(user =><h5>{user}</h5>)}
      <h3>{data["6ni6ok3ym7mf1p33lnez"].optionTwo.text}</h3>
      <p>voted by:</p>
      {data["6ni6ok3ym7mf1p33lnez"].optionTwo.votes.map(user =><h5>{user}</h5>)}
    </section>
  </div>
</AppProvider>
)

View.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};


export default View;
