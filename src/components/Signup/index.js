import React, { Component, createRef } from 'react';
// import { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.firstname = createRef();
        this.lastname = createRef();
        this.age = createRef();
    }

    handlesubmit = (e)=>{
        e.preventDefault();
        console.log(this.firstname.current.value )

    }


    render() {
        return (
            <div className="m-4">
                {/* {signinsuccess && <Redirect to="/" />} */}
                <form onSubmit={this.handlesubmit}>
                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input ref={this.firstname} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Please provide a valid First Name </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input ref={this.lastname} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Please provide a valid Last Name </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input ref={this.age} type="number" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Signup;