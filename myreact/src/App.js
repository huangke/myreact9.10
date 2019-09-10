import React, { Component } from 'react'
import './App.css';
import Item from './component/Item'
import axios from "axios"
import "./mock/index"
export default class App extends Component {
  state={list:[]}
  componentDidMount(){
    axios.get("/list").then(({data})=>{
      this.setState({list:data.list})
    })
  }
  render() {
    let {list}=this.state
    return (
      <div className="app">
        <h5 onClick={()=>{this.componentDidMount()}}>换一换</h5>
        {list.length&&list.map((item,index)=><Item key={index} item={item} index={index}/>)} 
      </div>
    )
  }
}
