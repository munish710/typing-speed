import React from 'react'
function Speed(props) {
    let { correctSymbols, timeTaken } = props
    if (correctSymbols !== 0 && timeTaken !== 0) {
        const wpm = (correctSymbols / 5) / (timeTaken / 60)
        return <div>Words Per Minute : {Math.round(wpm)} <span className="time">Time Spent : {timeTaken}</span></div>
    }
    return null
}
export default Speed