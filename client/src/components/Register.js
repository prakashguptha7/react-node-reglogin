import React, { Component } from 'react';
import { register } from './UserFunctions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      dob: new Date(),
      country: 'india',
      gender: '',
      hobbies:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChange = date => {
    this.setState({
      dob: date
    });
  };

  

  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      dob: this.state.dob,
      country: this.state.country,
      gender: this.state.gender,
      hobbies: this.state.hobbies
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your last name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label><br/>
                <select className="form-control" name="country" value={this.state.country} onChange={this.onChange} >
                  <option></option>
                  <option value="india">INDIA</option>
                  <option value="usa">USA</option>
                  <option value="canada">CANADA</option>
                  <option value="australia">AUSTRAILIA</option>
                </select>
               </div>
       <div className="form-group">
       <label htmlFor="gender">Gender</label><br/>
       
        <input
          value="male"
          name="gender"
          type="radio"
          onChange={this.onChange}
        /> Male &nbsp;&nbsp;
       
        <input
          value="female"
          name="gender"
          type="radio"
          onChange={this.onChange}
        /> Female &nbsp;&nbsp;
     
        <input
          value="transgender"
          name="gender"
          type="radio"
          onChange={this.onChange}
        />   Transgender &nbsp;&nbsp;
      </div>

       <div className="form-group">
       <label htmlFor="hobbies">Hobbies</label><br/>
       
        <input
          value="reading"
          name="hobbies"
          type="checkbox"
          onChange={this.onChange}
        /> Reading &nbsp;&nbsp;
       
        <input
          value="playing"
          name="hobbies"
          type="checkbox"
          onChange={this.onChange}
        /> Playing &nbsp;&nbsp;
     
        <input
          value="drawing"
          name="hobbies"
          type="checkbox"
          onChange={this.onChange}
        />   Drawing &nbsp;&nbsp;
      </div>


             <div className="form-group">
                <label htmlFor="dob">Date Of Birth</label><br/>
                <DatePicker
                  className="form-control"
                  selected={this.state.dob}
                  onChange={this.handleChange}
                  required
                />
              </div>
                <button
                type="submit"
                className="btn btn-default btn-block"
                style={{backgroundColor:"	#800000", color:"#fff"}}
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
