import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TAlbum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumphotos: [],
    }
  }
  
  
  render() {
    console.log("albummmm state",this.state);
    console.log("albummmm state",this.props);
    return (
      <div className="bawah">
        {this.state.loadingAlbum
          ? (<div>Loading</div>) :
          <table cellPadding="0" cellSpacing="0" border="1" className="tabel">
            <thead>
              <tr>
                <th>No</th>
                <th>Name Album</th>
                <th>Photos</th>
              </tr >
            </thead>
            <tbody>

              {this.props.userAlbum.map((el, key) =>
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{el.title}</td>
                  <td>
                    <Link to="/photos">
                    <input type="button" value="Tampilkan Foto"
                      onClick={() => this.props.onClick(el.id)} />
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        }
      </div>
    );
  }
}

export default TAlbum;