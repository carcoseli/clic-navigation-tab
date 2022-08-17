import React, { Component } from "react";
import  Firebas  from firebase;

class FileUpload extends Component{
    constructor(){
        this.state={
            uploadValue:0
        };
    }

    render(){
        return(
            <div>
                <progress value={this.state.uploadValue} max="100"></progress>
                <br/>
                <input type={File} onChange={this.props.onUpload}/>
                <br/>
                <img width={320}
            </div>
        )
    }
}