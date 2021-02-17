import React, { Component } from 'react';
class TFoto extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
 
  render() {
    return (
      <div className="kotak-foto">
        {this.state.loading ? (<div>Loading</div>) :
          this.props.albumphotos.map((el, key) =>
            <figure key={key}>
              <img src={el.thumbnailUrl} alt={el.title}></img>
              <figcaption>{el.title}</figcaption>
            </figure>
          )
        }
      </div>

    );
  }
}

export default TFoto;