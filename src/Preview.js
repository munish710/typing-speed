import React from 'react'

function Preview(props) {
    let { text, userinput } = props
    text = text.split('')
    return (
        <div className="border rounded p-3 mt-4 mb-4">
            {
                text.map((symbol, index) => {
                    let color
                    if (index < userinput.length) {
                        color = symbol === userinput[index] ? '#dfffa0' : '#fcbea4'
                    }
                    return <span key={index} style={{ backgroundColor: color }}>{symbol}</span>
                })
            }
        </div>
    )
}

export default Preview
