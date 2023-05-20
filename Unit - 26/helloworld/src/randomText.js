import React, { Component } from 'react';

class RandomBox extends Component {
    render() {
        let col = ['#FF5733','#33FFCA','#FF3333'];
        let sz = [10,20,30,40];
        const randColor = col[Math.floor(Math.random()*col.length)];
        const randSize = sz[Math.floor(Math.random()*sz.length)];
        const box = {
            fontSize: `${randSize}px`,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: randColor,
            width: "500px",
            height: "100px",
        };
        return (
            <div style={box}>
                <p>Random Text</p>
            </div>
        )
    }
}

export default RandomBox;