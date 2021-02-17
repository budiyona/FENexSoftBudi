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
            albumphotos: [],
            name: "",
            uname: "",
            addrCity: "",
            compName: "",
            idEdit: "",
            userAlbum: []

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
        let targetEdit = tmp.find(el => el.id === idUser)
        this.setState({
            userEdit: targetEdit,
            name: targetEdit.name,
            uname: targetEdit.username,
            addrCity: targetEdit.address.city,
            compName: targetEdit.company.name,
            idEdit: targetEdit.id

        })
    }
    showAllbum = (id) => {
        let tmp = this.state.albums
        // let tmptfoto = this.state.photos
        let target = tmp.filter(el => el.userId === id)
        // let targetPhoto = tmptfoto.filter(el => el.albumId === target.id)
        this.setState({
            userAlbum: target,
            // albumphotos: targetPhoto
        })
    }
    showPhotos = (idAlbum) => {
        let tmptfoto = this.state.photos
        let targetPhoto = tmptfoto.filter(el => el.albumId === idAlbum)
        this.setState({
            albumphotos: targetPhoto
        })
    }
    setValue = (name, value) => {
        console.log("SET VALUE TRIGERED");
        this.setState({
            [name]: value
        })

    }
    saveUser = (id) => {
        console.log("save user");
        let tmp = this.state.users
        let idx = tmp.findIndex((el) => el.id === id)
        let updateObject = this.state.userEdit
        updateObject.name = this.state.name
        updateObject.username = this.state.uname
        updateObject.address.city = this.state.addrCity
        updateObject.company.name = this.state.compName
        tmp.splice(idx, 1, updateObject)
        this.setState({
            userEdit: {},
            users: tmp,
            name: "",
            uname: "",
            addrCity: "",
            compName: "",
            idEdit: ""
        })
    }
    render() {
        const { name, addrCity, compName, uname, idEdit } = this.state
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
                        <input type="button" value="edit" onClick={() => this.updateUsers(user.id)} />
                        <input type="button" value="Lihat" onClick={() => this.showAllbum(user.id)} />
                    </td>
                </tr>
            )
        })
        return this.state.loading ? (<div>Loading</div>) :
            (
                <div className="container">
                    <FormEdit 
                        userEdit={this.state.userEdit}
                        user={{ name, uname, addrCity, compName, idEdit }}
                        onChange={this.setValue}
                        saveUser={this.saveUser}
                    />
                    <div className="atas">
                        <table cellPadding="0" cellSpacing="0" border="1" className="tabel" >
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
                    <div className="bawah">
                        <table cellPadding="0" cellSpacing="0" border="1" className="tabel">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name Album</th>
                                    <th>Photos</th>
                                </tr >
                            </thead>
                            <tbody>
                                {
                                    this.state.userAlbum.map((el, key) =>
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{el.title}</td>
                                            <td>
                                                <input type="button" value="Tampilkan Foto"
                                                    onClick={() => this.showPhotos(el.id)} />
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="kotak-foto">
                        {
                            this.state.albumphotos.map(el =>
                                <figure>
                                    <img src={el.thumbnailUrl} alt={el.title}></img>
                                    <figcaption>{el.title}</figcaption>
                                </figure>
                            )
                        }
                    </div>

                </div>
            );
    }
}

export default App;

