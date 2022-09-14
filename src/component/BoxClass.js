import React, { Component } from 'react';

export default class BoxClass extends Component {
    constructor() {
        super();
        this.result = '';
        this.def = '';
    }
    getResult = () => {
        if (this.props.title === 'Computer' && this.props.result !== 'Tie' && this.props.result !== '') {
            this.result = this.props.result === 'Win' ? 'Lose' : 'Win';
        } else {
            this.result = this.props.result;
        }
        if (this.props.title === 'Computer' || this.props.title === 'You') {
            this.def = 'https://sites.google.com/site/hafsrsp/_/rsrc/1468855017636/config/customLogo.gif?revision=2';
        }
    };
    render() {
        this.getResult();
        return (
            <div>
                <div className={`box ${this.result}`}>
                    <h1>{this.props.title}</h1>
                    <img className="item-img" src={(this.props.item && this.props.item.img) || this.def} alt="가위바위보 이미지사진"></img>
                    <h2>{this.result}</h2>
                </div>
            </div>
        );
    }
}
