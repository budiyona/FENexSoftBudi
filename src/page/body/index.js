import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TAlbum from '../../album';
import TFoto from '../../foto';

import TUser from '../../tableUser';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      albums: [],
      photos: [],
      loading: true,
      loadingAlbum: false,
      loadingPhotos: false,
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
  showAllbum = (id) => {
    console.log("SHOOOW IN BODYYYY");
    let url = 'https://jsonplaceholder.typicode.com/users/' + id + '/albums'
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ userAlbum: json, loadingAlbum: false }))
      .catch(() => {
        alert("failed to fetch data")
      }).finally(
        this.setState({
          loadingAlbum: true
        })
      )
  }
  showPhotos = (idAlbum) => {
    let url = 'https://jsonplaceholder.typicode.com/albums/' + idAlbum + '/photos'
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ albumphotos: json, loading: false }))
      .catch(() => {
        alert("failed to fetch data")
      }).finally(
        this.setState({
          loading: true
        })
      )
  }
  render() {
    return (
      <Switch>
        <Route path="/" exact component={
          () => {
            return <TUser onClick={this.showAllbum} />
          }
        } />
        <Route path="/album" >
          <TAlbum
            userAlbum={this.state.userAlbum}
            onClick={this.showPhotos}
          ></TAlbum>
        </Route>
        <Route path="/photos">
          <TFoto albumphotos={this.state.albumphotos}></TFoto>
        </Route>
        <Route path="/hello">
          helloooo
        </Route>
      </Switch>
    )
  }
}

export default Body;