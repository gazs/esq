import React, { Component } from 'react';
import './App.css';

const years = [];
for (let year = 1933; year <= 2017; year++) {
  years.push(<option value={year} key={year}>{year}</option>);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 1933,
      month: '09',
      page: 1
    };
  }
  handleYear(e) {
    this.setState({year: e.target.value})
  }
  handleMonth(e) {
    this.setState({month: e.target.value})
  }
  handlePrev() {
    this.setState({page: this.state.page-1});
  }
  handleNext() {
    this.setState({page: this.state.page+1});
  }
  getUrl() {
    return `http://archive.esquire.com/image/spread/${this.state.year}${this.state.month}01/${this.state.page}`
  }
  render() {
    return (
      <div>
      <div className="tc pa2">
        <select onChange={(e) => this.handleYear(e)}>
        {years}
      </select>
      <select onChange={(e) => this.handleMonth(e)}>
        <option value="01" key={"01"}>01</option>
        <option value="02" key={"02"}>02</option>
        <option value="03" key={"03"}>03</option>
        <option value="04" key={"04"}>04</option>
        <option value="05" key={"05"}>05</option>
        <option value="06" key={"06"}>06</option>
        <option value="07" key={"07"}>07</option>
        <option value="08" key={"08"}>08</option>
        <option value="09" key={"09"}>09</option>
        <option value="10" key={"10"}>10</option>
        <option value="11" key={"11"}>11</option>
        <option value="12" key={"12"}>12</option>
    </select>
    <button onClick={() => this.handlePrev()}>prev</button>
    <span className="white pa3">{this.state.page}</span>
    <button onClick={() => this.handleNext()}>next</button>

      </div>
      <div className="image">
      <img className="w-100" src={this.getUrl()} />
    </div>
      </div>
);
}
}

export default App;
