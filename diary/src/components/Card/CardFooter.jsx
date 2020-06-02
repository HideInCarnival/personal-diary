import React from 'react'

export default function CardFooter(props) {
    return (
        <div className="card-footer">
            <div className="card-footer-content">
                {props.content}
            </div>
            <div className="card-footer-extra">
                {props.extra}
            </div>
        </div>
    )
}
