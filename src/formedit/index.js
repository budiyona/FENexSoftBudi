import React, { Component } from 'react';


class FormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userEdit,
            name: ""
        }
    }
    setValue = (el) => {
        this.setState({
            name: el.target.value
        })
    }
    render() {
        const { userEdit} = this.props
        if (userEdit.name===undefined) { return <></> } else {
            return (

                <>
                    <input type="text" name="idEdit" id="" hidden></input>
                    <label >Name</label>
                    <input type="text" name="" value={userEdit.name} onChange={()=>{}}></input> <br />
                    <label for="">Username</label>
                    <input type="text" name="" value={userEdit.username}></input> <br />
                    <label for="">City</label>
                    <input type="text" name="" value={userEdit.address.city}></input> <br />
                    <label for="">Company Name</label>
                    <input type="text" name="" value={userEdit.company.name}></input><br />
                    <input type="button" value="Update" />
                </>
            );
        }
    }
}

export default FormEdit;