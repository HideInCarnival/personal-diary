import React from 'react'

export default function CardHeader(props) {
    return (
        <div className="card-header">
            <div className="card-header-content">
                <img src={props.thumb} alt="" />
                {props.title}
            </div>
            <div className="card-header-extra">
                {props.extra}
            </div>
        </div>
    )
}
