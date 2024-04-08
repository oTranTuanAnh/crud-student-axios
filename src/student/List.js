import {useEffect, useState} from "react";
import axios from "axios";
import './list.css';
import {Link} from "react-router-dom";

const ListStudent = () =>{
    const [students, setStudents] = useState([]);
    const [studentFilters, setStudentFilters] = useState([]);
    const [isDelete, setIsDelete] = useState(false)
    useEffect(() =>{
        axios
            .get("http://localhost:3000/students")
            .then(res => {
                setStudents(res.data);
                setStudentFilters(res.data)
            })
    },[isDelete])


    const handleSearch = (e) => {
        let key = e.target.value;
        if (key) {
            let studentFilter = students.filter(item => item.name.toLowerCase().includes(key.toLowerCase()));
            let data = studentFilter.length > 0 ? studentFilter : students;
            setStudentFilters(data)
        }

    }
    const deleteStudent = (id)=>{
        console.log(id)
        axios.delete('http://localhost:3000/students/' + id).then(res => {
            alert("xoa thanh cong!!")
            setIsDelete(!isDelete)
        })
    }


    return (
        <>
            <div id={'list-students'}>
                <h1 id="table-title">List Students</h1>
                <form className="d-flex form-search">
                    <input className="form-control me-2" type="search" placeholder="Search"
                           aria-label="Search" onInput={handleSearch}/>
                    <button className="btn btn-outline-success" >Search</button>
                </form>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <h4><Link to={'/students/create'}>Create new Student</Link></h4>
                    </li>
                </ul>
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Score</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentFilters.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.score}</td>
                                <td>
                                    <button type="button" className="btn btn-secondary" name="edit-button">Edit</button>
                                    <button type="button" className="btn btn-secondary" name="delete-button" onClick={()=>deleteStudent(item.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}


                    </tbody>
                </table>
            </div>

        </>)
}
export default ListStudent;