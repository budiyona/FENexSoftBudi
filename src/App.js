import React, { Component } from 'react';
import './App.css';
import FormEdit from './formedit';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            albums: [],
            photos: [],
            loading: true,
            userEdit: {},
            album: {},
            albumphotos: []
        }
    }

    componentDidMount() {
        Promise.all([
            fetch('https://jsonplaceholder.typicode.com/users'),
            fetch('https://jsonplaceholder.typicode.com/albums'),
            fetch('https://jsonplaceholder.typicode.com/photos')
        ])
            .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
            .then(([json1, json2, json3]) => this.setState({
                users: json1,
                albums: json2,
                photos: json3,
                loading: false
            })).finally(
                this.setState({
                    loading: true
                })
            )
        // .then(([json1,json2,json3])=>console.log(json1))
        // .catch(()=> alert("failed to fetch data")).finally(this.setState({
        //     loading: true
        // }))
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(json => this.setState({ users: json, loading: false }))
        //     .catch(() => {
        //         alert("failed to fetch data")
        //     })
        //     .finally(
        //         this.setState({
        //             loading: true
        //         })
        //     )
    }
    deleteData = (id) => {
        console.log("loaddiiiiiing", id);
        console.log(this.state.users);
        let tmp = this.state.users.filter(el => el.id !== id)
        console.log(tmp);
        this.setState({
            users: tmp
        })

    }
    updateUsers = (idUser) => {
        console.log("update");
        let tmp = this.state.users
        let targetEdit = tmp.find(el=>el.id===idUser)
        this.setState({
            userEdit: targetEdit
            
        })
    }
    showAllbum = (id) =>{
        let tmp = this.state.albums
        let tmptfoto = this.state.photos
        let target = tmp.find(el=>el.userId===id)
        let targetPhoto = tmptfoto.filter(el=>el.albumId===target.id)
        this.setState({
            album:target,
            albumphotos: targetPhoto
        })
    }
    render() {
        let data = this.state.users.map((user, idx) => {
            return (
                <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.address.city}</td>
                    <td>{user.company.name}</td>
                    <td>
                        <input type="button" value="hapus"
                            onClick={() => this.deleteData(user.id)} />
                        <input type="button" value="edit" onClick={()=>this.updateUsers(user.id)}/>
                        <input type="button" value="Lihat" onClick={()=>this.showAllbum(user.id)} />
                    </td>
                </tr>
            )
        })
        return this.state.loading ? (<div>Loading</div>) :
            ( <>
                <FormEdit userEdit={this.state.userEdit} onChange={this.setValue}></FormEdit>
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
                            {data}
                        </tbody>
                    </table>

                </div>
                {<>

                    id : {this.state.album.id} <br/>
                    title : {this.state.album.title} <br/>
                    photos: {this.state.albumphotos.map((el,key)=><a href={el.url}>{key}-</a>)}
                </>
                }
            </>
            );
    }
}

export default App;

