import './App.css';
import Form from "./component/form";
import Table from "./component/table";

function App() {
  let data = [
      ["No", "Nama", "Umur", "Jenis Kelamin", "Hobby", "Agama", "Alamat", "Action"],
      ["1", "Budi", "1", "Jenis Kelamin", "Hobby", "Agama", "Alamat", "Action"],
      ["2", "yono", "2", "Jenis Kelamin", "Hobby", "Agama", "Alamat", "Action"],
      ["3", "tono", "3", "Jenis Kelamin", "Hobby", "Agama", "Alamat", "Action"],
      ["4", "cika", "4", "Jenis Kelamin", "Hobby", "Agama", "Alamat", "Action"],
      ["5", "ahmad", "5", "Jenis Kelamin", "Hobby", "Agama", "Alamat", "Action"],
      // ["6", "miya", "6", "Jenis Kelamin", "Hobby", "Agama", "Alamat", "Action"],
      ["7", "maya", "7", "Jenis Kelamin", "Hobby", "Agama", "Alamat", "Action"]
  ]
  return (
    <div className="container">
      <div className="form-container">
        <Form />
      </div>
      <div className="table-container" >
        <Table table={data}/>
      </div>
    </div>
  );
}

export default App;
