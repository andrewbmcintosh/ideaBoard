import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class LogIn extends Component {
    state = {
        users: []
    }

    componentDidMount() {

        axios.get('/users').then(res => {
            this.setState({ users: res.data })
        })
        console.log(this.state)
    }




render() {
    return (
        <div>
            <h1>Log-In</h1>
            <h3>Please Select an Existing User</h3>
            {this.state.users.map(user => {
                return (<Link to={`/user/${user._id}`}>{user.userName}</Link>)
            })}
        </div>
    )
}
}

export default LogIn