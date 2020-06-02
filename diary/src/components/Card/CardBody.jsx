import React from 'react'

export default function CardBody(props) {
    return (
        <div className="card-body">
            <div className="card-body-content">
                {props.children}
            </div>
        </div>
    )
}
