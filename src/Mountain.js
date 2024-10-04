import React, { Component } from 'react'
import Navbars from './Navbar'

export default class Mountain extends Component {
  constructor() {
    super();
    this.state = {
      Greeting: "Good Morning",
      Names: "Hitesh",
      Occupation: "Developer",
      numbers: 0,
      check: '',
      multiply: 0,
      addition: 0,
      division: 0,
      color: 'yellow',
      F_name:'',
      L_name:'',
    }
  }
  render() {
    const Check = (numbers) => {
      numbers = this.state.numbers;
      if (numbers % 2 == 0) {
        this.setState({ check: "even" });
      }
      else {
        this.setState({ check: "Odd" });
      }
    }

    const Submit = () =>{
    alert(`${this.state.F_name},${this.state.L_name}`)
    }
    return (
      <div>
        <Navbars />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>These is Class Compoenent</h1>
        <br />
        <h1>Porps in React Class Compoenent</h1>
        <h1>Hi my name is Boney and my email is {this.props.email}</h1>
        <br />
        <h1>Hi! {this.state.Greeting} my name is {this.state.Names} and i am a {this.state.Occupation}</h1>
        <button onClick={() => {
          this.setState({
            Greeting: "Good Evening",
            Names: "Pooja",
            Occupation: "Data Engineer"
          })
        }}>Change</button>
        <h1 className='mt-5 mb-5 text-center display-1 fw-bold'>{this.state.numbers}</h1>
        <h1 className='mt-5 mb-5 text-center display-1 fw-bold'>{this.state.check}</h1>
        <h1 className='mt-5 mb-5 text-center display-1 fw-bold'>output for multiply{this.state.multiply}</h1>
        <h1 className='mt-5 mb-5 text-center display-1 fw-bold'>output for Addition{this.state.addition}</h1>
        <h1 className='mt-5 mb-5 text-center display-1 fw-bold'>output for Division{this.state.division}</h1>
        <div className='text-center'>
          <button className='mt-5 mb-5 ms-3 btn btn-primary' onClick={() => { this.setState({ numbers: this.state.numbers + 1 }) }}>Increment</button>
          <button className='mt-5 mb-5 ms-3 btn btn-primary' onClick={() => { this.setState({ numbers: this.state.numbers - 1 }) }}>Decrement</button>
          {/* Find Button Click wheater the given number is odd or even */}
          <button className='mt-5 mb-5 ms-3 btn btn-primary' onClick={() => { Check() }}>Check the number is odd or even</button>
          {/* Mulitply divide add by 5 */}
          <button className='mt-5 mb-5 ms-3 btn btn-primary' onClick={() => { this.setState({ multiply: this.state.numbers * 5 }) }}>multiply</button>
          <button className='mt-5 mb-5 ms-3 btn btn-primary' onClick={() => { this.setState({ addition: this.state.numbers + 5 }) }}>addition</button>
          <button className='mt-5 mb-5 ms-3 btn btn-primary' onClick={() => { this.setState({ division: this.state.numbers / 5 }) }}>division</button>
          {/* Dynamic css in react */}
          <div className='box' style={{ border: '1px solid black', height: '225px', width: '225px', backgroundColor: `${this.state.color}` }}></div>
          <button onClick={() => { this.setState({ color: 'blue' }) }}>Change Color</button>
          {/* Dynamic css change square to color */}
          {/* Form validation in class comp  */}

          <form onSubmit={()=>{Submit()}}>
            <div className='container mt-5 mb-5'>
              <div className='row'>
                <div className='col-lg-6'>
                  <input value={this.state.F_name} onChange={(e)=>{this.setState({F_name:e.target.value})}} className='form-control' placeholder='First Name' />
                </div>
                <div className='col-lg-6' placeholder='Last Name'>
                  <input value={this.state.L_name} onChange={(e)=>{this.setState({L_name:e.target.value})}} className='form-control' placeholder='Last name' />
                </div>
              </div>
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}
