import logo from './logo.svg';
import React, { Component } from 'react';
//import { withRouter } from "react-router-dom";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '',
      text2: '',
      output: '',
      selectProblem: 'homeAssign'
    };
  }

  handleTextBox = (event, textBoxIdentifier) => {
    this.setState({ [textBoxIdentifier] : event.target.value });
  }

  handleRadio= (event) => {
    this.setState({ arrayList : event.target.value });
    document.getElementById("form").reset();
    this.setState({ text1 : "" });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.selectProblem === "onCall") {
        if(this.state.text1 === '') {
            this.setState({output: "Please enter valid JSON object"})
        } else {
            const obj = JSON.parse(this.state.text1);
            let output = this.buildFlatObject(obj);
            this.setState({output: "Please check console!"})
            console.log(output);
        }
    } else if(this.state.selectProblem === "homeAssign") {
        this.buildCommonStringInArray();
    }
  }

  buildCommonStringInArray = () => {
    let outputString = "Please enter an list of String as an input in text1 and text2, refer examples above";
    if(this.state.text1 !== '' && this.state.text2 !== '') {
      let outputArray = [];
      let text1 = this.state.text1.split(",").map(item => item.trim());
      let text2 = this.state.text2.split(",").map(item => item.trim());
      text1.forEach((val) => {
          if(!text2.includes(val)) {
              outputArray.push(val);
          }
      })
      this.setState({ output : outputArray });
    } else {
      this.setState({ output : outputString });
    }
  }

  buildFlatObject = (obj) => {
    let outputObject = {};
    for(var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if ((typeof obj[i]) == 'object') {
            var nestedObject = this.buildFlatObject(obj[i]);
            for (var x in nestedObject) {
                if (!nestedObject.hasOwnProperty(x)) continue;
                outputObject[i + '.' + x] = nestedObject[x];
            }
        } else {
            outputObject[i] = obj[i];
        }
    }
    return outputObject;
  }

  handleRadio = (e) => {
    this.setState({ selectProblem : e.target.value });
  }

  renderConditionally = (prop) => {
    if(prop === "homeAssign") {
        return (
            <form id="form" onSubmit={()=>this.handleSubmit()}>
                <div>
                    <label for="stringList">Enter a string List seprated by comma (e.g. foo, bar)</label>
                    <br />
                    <label>
                      Text Box 1:
                      <textarea
                        name="text1"
                        value={this.state.text1}
                        onChange={(e) => this.handleTextBox(e, "text1")} />
                    </label>
                    <br />
                    <label>
                      Text Box 2:
                      <textarea
                        name="text2"
                        value={this.state.text2}
                        onChange={(e) => this.handleTextBox(e, "text2")} />
                    </label>
                    <br />
                    <button
                      type="submit"
                      value={this.state.output}
                      onClick={(e) => this.handleSubmit(e)}
                      >
                      Submit
                    </ button>
                    <br />
                    <label>
                      output:
                      <textarea
                        name="output"
                        value={this.state.output} />
                    </label>
                </div>
            </form>
        )
    } else if (prop === "onCall") {
        return (
            <form id="form" onSubmit={()=>this.handleSubmit()}>
                <div>
                    <label for="stringList">Enter a nested object</label>
                    <br />
                    <label>
                      Text Box 1:
                      <textarea
                        name="text1"
                        value={this.state.text1}
                        onChange={(e) => this.handleTextBox(e, "text1")} />
                    </label>
                    <br />
                    <button
                      type="submit"
                      value={this.state.output}
                      onClick={(e) => this.handleSubmit(e)}
                      >
                      Submit
                    </ button>
                    <br />
                    <label>
                      output:
                      <textarea
                        name="output"
                        value={this.state.output} />
                    </label>
                </div>
            </form>
        )
    }
    return;
  }

  render() {
    return (
        <div>
            <p> Select Problem</p>
            <input
             type="radio"
             id="onCall"
             name="test"
             value="onCall"
             checked={this.state.selectProblem === "onCall"}
             onClick={(e) => this.handleRadio(e)}
            />
            <label for="onCall">On Call</label><br />
            <input
             type="radio"
             id="homeAss"
             name="test"
             value="homeAssign"
             checked={this.state.selectProblem === "homeAssign"}
             onClick={(e) => this.handleRadio(e)}
            />
            <label for="homeAss">Home Assignment</label><br />
                { this.renderConditionally(this.state.selectProblem) }
        </div>
    );
  }
}

export default App;
