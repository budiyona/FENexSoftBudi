import React, { Component } from 'react';
import Td from "./td";
import Tr from "./tr";
import Th from "./th";
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            center: "center"
         }
    }
    render() { 
        const {table} = this.props
        let header = []
        let data = []
        table.forEach((isi, i) => {
            if(i===0){
                isi.forEach( data =>{
                    header.push(
                        <Th position={this.state.center}>{data}</Th>
                    )
                }
                )
            }else{
                let datarow = isi.map( isidata =>{
                    console.log("isi data",isidata);
                    return(
                        <Td position={this.state.center}>{isidata}</Td>
                    )
                }
                )
                data.push(
                    <Tr>
                        {datarow}
                    </Tr>
                ) 
            }
        });
        header.forEach(isi=>{console.log(isi);})
        return ( 
            <table cellPadding="5" border="1" cellSpacing="0">
                <thead>
                    <Tr>
                        {header}
                    </Tr>
                </thead>
                <tbody>
                        {data}
                </tbody>
            </table>
         );
    }
}
 
export default Table;