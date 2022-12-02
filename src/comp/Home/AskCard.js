import React from 'react'
export default function AskCard(props) {
    let str3 = "#".concat(props.id.toString());

    return (
        <div className="card wow fadeInLeft" data-wow-delay="0.1s">
            <div className="card-header">
                <a className="card-link collapsed" data-toggle="collapse" href={str3}>
                    {props.question}
                </a>
            </div>
            <div id={props.id} className="collapse" data-parent="#accordion-1">
                <div className="card-body">
                    {props.respense}
                </div>
            </div>
        </div>
    )
}
