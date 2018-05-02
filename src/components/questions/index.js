import React, { Component } from "react";
//import View from "./View";
import Sorting from "./Sorting";
import {_getQuestions} from '../../_DATA.js'



class Questions extends Component {
  state = {
    isLoading: true,
    data:{},
    error:false
  }



  async componentDidMount() {
    try{
      console.log(`inside try`)
      this.setState({
        isLoading:true,
        hasErrored: false
      })
      const data = await _getQuestions()
      console.log(`after loadData`)
      await this.setState({
        isLoading:false,
        data
      })
    } catch (ex) {
      this.setState({
        isLoading:false,
        hasErrored:true
      })
    }
  }

  render() {
    const {data,isLoading,hasErrored} = this.state

    if (hasErrored) {
      return <p>Sorry! There was an error loading questions</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
        <div>
          {Object.keys(data).length > 0 &&
            <div>

              <h5>Please, select one and only one answer to this question:</h5>
              <Sorting {...this.state} />
            </div>
          }
        </div>
    )
  }
}

export default Questions
