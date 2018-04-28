import React, { Component } from "react";
import View from "./View";
import {_getQuestions} from '../../_DATA.js'



class Questions extends Component {
  state = {
    isLoading: true,
    data:{}
  }



  async componentDidMount() {
    try{
      console.log(`inside try`)
      this.setState({
        isLoading:true,
        error: false
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
        error:true
      })
    }
  }

  render() {
    const {data,isLoading} = this.state

    if (isLoading) {
     return <p>Loading ...</p>;
   }
    return (
        <div>
          {Object.keys(data).length > 0 &&
            <div>
              <h5>Please, select one and only one answer to this question:</h5>
              <View {...this.state} />;
            </div>
          }
        </div>
    )
  }
}

export default Questions
