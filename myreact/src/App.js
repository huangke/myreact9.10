import React, { Component } from 'react'
import "./App.css"
import { Pagination } from 'antd';
import PageContext from "./component/PageContext"

export default class App extends Component {
  state={current:5,pagesize:10,total:200}
  onShowSizeChange(current, size){
    console.log(current, size)
  }
  onChange=current=>{
    console.log(current)
    this.setState({current})
  }
  render() {
    let {current,pagesize,total}=this.state
    return (
      <div className="app">
          <div className="pagecontext">
              <PageContext current={current} pagesize={pagesize} total={total}></PageContext>
          </div>
          <div className="pagination">
              <Pagination current={current} pageSize={pagesize} onChange={this.onChange} total={total}/>
          </div>
      </div>
    )
  }
}
