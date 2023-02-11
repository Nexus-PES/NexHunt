import React from 'react'

export default function Animation(props) {
    return (


        <svg className="animation_comp" viewBox="0 0 100 100" width={props.width} height="100">
            <defs>
                <path id="circle"
                    d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"/>
            </defs>
            <text fontSize="16">
                <textPath href="#circle">{props.pattern}
                </textPath>
            </text>
        </svg>
    )
}
