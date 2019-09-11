import React, { Component } from 'react'
import { Divider } from 'antd'
import axios from "axios"
import "../mock/index"
export default class PageContext extends Component {
    state={list:[],current:0,pagesize:0,total:0}
    componentWillMount(){
        
        let {current,pagesize,total}=this.props
        this.setState({current,pagesize,total})
    }
    componentDidMount(){
        let {current,pagesize,total}=this.props
       this.ser(current,pagesize,total)
    }
    componentWillReceiveProps(next){
        console.log(next.current)
       this.ser(next.current,next.pagesize,next.total)
    
    }
    ser=(current,pagesize,total)=>{
        
        axios.post("/pageList",{current,pagesize,total}).then(({data})=>{
            this.setState({list:data})
        })
    }
  render() {
    return (
        <>
 {this.state.list.map((item,index)=><p key={index}><b>{item.id}.</b> <span>{item.desc}</span> </p> )}
        </>
    )
  }
}
