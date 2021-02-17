import React, { Component } from 'react';


class FormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    setValue = (el) => {
        this.props.onChange(el.target.name, el.target.value)
    }
    saveUser = (id) => {
        this.props.saveUser(id)
    }
    render() {
        const { userEdit, user } = this.props
        if (userEdit.name === undefined) { return <></> } else {
            return (

                <>
                    <input type="text" name="idEdit" value={user.idEdit.name} onChange={this.setValue}></input>
                    <label >Name</label>
                    <input type="text" name="name" value={user.name} onChange={this.setValue}></input> <br />
                    <label >Username</label>
                    <input type="text" name="uname" value={user.uname} onChange={this.setValue}></input> <br />
                    <label >City</label>
                    <input type="text" name="addrCity" value={user.addrCity} onChange={this.setValue}></input> <br />
                    <label >Company Name</label>
                    <input type="text" name="compName" value={user.compName} onChange={this.setValue}></input><br />
                    <input type="button" value="Update" onClick={this.saveUser} />
                </>
            );
        }
    }
}

export default FormEdit;