import React, { Component } from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter';
import './index.css';
export default class Card extends Component {
    render() {
        return (
            <div className={`card ${this.props.className}`}>
                {this.props.children}
            </div>
        )
    }
}
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;