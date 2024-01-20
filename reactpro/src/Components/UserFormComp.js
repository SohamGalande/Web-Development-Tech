import React, { Component } from 'react'
import './external.css'

export class UserFormComp extends Component {
    ucourse = ["angular", "react", "java", "python"]

    constructor(props) {
        super(props)

        this.state = {
            fname: "",
            password: "",
            courses: ""

        }
    }

    inputChangeHandler = (event) => {
        const { type, value, name, password } = event.target;
        this.setState({ [name]: value })
        this.setState({ [password]: value })
    }

    checkData = (event) => {
        event.preventDefault();
        if (this.state.fname === "") {
            window.alert("Please enter name");
            return false;
        }
        if (this.state.password === "") {
            window.alert("Please enter password");
            return false;
        }

        if (!this.state.fname.match("^[a-zA-Z ]{2,20}$")) {
            window.alert("Name Must Be Have 2-20 Letter ")
            return false;
        }
        window.alert(JSON.stringify(this.state))
    }



    render() {
        const { fname, password, courses } = this.state
        return (
            <div className='container text-center'>
                <hr></hr>
                <h2>THIS IS USER FORM</h2>
                <form className='myform' onSubmit={this.checkData}>
                    <label className='form-lable'>Enter Your FullName</label>
                    <input type='text' name='fname' placeholder='Enter Name' className='form-control' onChange={this.inputChangeHandler} value={fname} />
                    <label className='form-lable'>Enter Your Password</label>
                    <input type='password' name='password' placeholder='Enter Name' className='form-control'
                        onChange={this.inputChangeHandler} value={password} />
                    <label className='form-lable'>Select your course</label>
                    <select name='course' className='form-control' >
                        <option value="">select your course</option>
                        {
                            this.ucourse.map((val, index) => {
                                return <option value={val} key={index}>{val}</option>
                            })
                        }
                    </select>
                    <button type='submit' className='btn-primary mt-2' >Submit</button>

                </form>
            </div>
        )
    }
}

export default UserFormComp;
