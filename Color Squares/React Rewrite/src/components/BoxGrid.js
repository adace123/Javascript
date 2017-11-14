import React, {Component} from 'react';
import {Box} from './Box';
import '../styles/boxgrid.css';

export default class BoxGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: Array(32).fill()
                    .map(element => <Box bgColor={this.getRandomColor()} />)
        }
            
        setInterval(() => {
            
            let boxes = this.state.boxes.slice();
            boxes[Math.floor(Math.random() * boxes.length)] = 
            <Box bgColor={this.getRandomColor()}/>;
            this.setState({boxes});
            
        }, 300);
            
    }
    
    getRandomColor() {
        let [color1, color2, color3] = Array(3).fill().map(c => Math.floor(Math.random() * 256))
         return {
             backgroundColor: `
                rgb(${color1},${color2},${color3})
             `
         }
    }
    
    render() {
        return (
            <div className="box-grid">
                { this.state.boxes }
            </div>    
        )
    }
}
