import React, { Component } from 'react';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ list: json, loading: false }))
            .catch(() => {
                alert("failed to fetch data")
            })
            .finally(
                this.setState({
                    loading: true
                })
            )
    }
    deleteData = (id) => {
        console.log("loaddiiiiiing",id);
        console.log(this.state.list);
        let tmp = this.state.list.filter(el=>el.id!==id)
        console.log(tmp);
        this.setState({
            list : tmp
        }) 

    }
    render() {
        return this.state.loading ? (<div>Loading</div>) :
            (
                <div className="App">
                    <table cellPadding="0" cellSpacing="0" border="1" >
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>City</th>
                                <th>Company Name</th>
                                <th>Action</th>
                            </tr >
                        </thead>
                        <tbody>
                            {this.state.list.map((user, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.address.city}</td>
                                        <td>{user.company.name}</td>
                                        <td>
                                            <input type="button" value="delete"
                                                onClick={()=>this.deleteData(user.id) } />
                                            <input type="button" value="update" />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>
            );
    }
}

export default App;

