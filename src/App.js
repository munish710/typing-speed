import React, { Component } from 'react'
import Preview from './Preview'
import Speed from './Speed'
import getText from './getText'
import './App.css'
const initialState = {
  text: getText(),
  userinput: "",
  correctSymbols: 0,
  timeTaken: 0,
  started: false,
  finished: false
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }
  inputHandler = (e) => {
    const input = e.target.value;
    this.startTimer()
    this.onFinish(input)
    this.setState({
      userinput: input,
      correctSymbols: this.countCorrectSymbols(input)
    })

  }

  restartHandler = () => {
    this.setState(initialState)
  }

  countCorrectSymbols(userInput) {
    const text = this.state.text.replace(" ", "")
    console.log(userInput);
    return userInput.replace(" ", "").split("").filter((symbol, index) => symbol === text[index]).length
  }

  startTimer() {
    if (!this.state.started) {
      this.setState(
        {
          started: true
        }
      )
      this.interval = setInterval(() => {
        this.setState(prevState => {
          return { timeTaken: prevState.timeTaken + 1 }
        })
      }, 1000)
    }
  }

  onFinish(userInput) {
    if (userInput === this.state.text) {
      clearInterval(this.interval)
      this.setState({ finished: true })
    }
  }
  render() {
    return (

      <div className="container mt-5 mb-5">
        <div className="row">

          <div className="col-md-6 offset-md-3">
            <center><h1>Typing Speed Calculator</h1></center>
            <Preview text={this.state.text} userinput={this.state.userinput} />
            <textarea
              className="form-control mb-3"
              placeholder="Start Typing.."
              value={this.state.userinput} onChange={this.inputHandler}
              readOnly={this.state.finished}
              rows="4"
            />
            <Speed correctSymbols={this.state.correctSymbols} timeTaken={this.state.timeTaken} />
            <div className="text-right">
              <button className="btn mt-2" onClick={this.restartHandler} >Restart</button>
            </div>


          </div>
        </div>
      </div>

    )
  }
}

export default App
