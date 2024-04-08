
import './create.css';
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Create(){
    const navigate = useNavigate();
    return(
        <>
            <Formik initialValues={{
                name:"",
                description: "",
                score:""
            }} onSubmit={(values)=>{
                axios.post("http://localhost:3000/students", values).then(
                    values=>{
                        alert("Them moi thanh cong")
                        navigate("/")
                    }
                )
            }}>
                <Form id="form-create">
                    <div>
                        <h1>Create new students</h1>
                        <div className="input-data">
                            <label htmlFor="name" className="form-label col-3">Name</label>
                            <Field name="name" type="text" className= "form-control"></Field>
                        </div>
                        <div className="input-data">
                            <label htmlFor="description" className="form-label col-3">Description</label>
                            <Field name="description" type="text" className= "form-control"></Field>
                        </div>
                        <div className="input-data">
                            <label htmlFor="score" className="form-label col-3">Score</label>
                            <Field name="score" type="text" className= "form-control"></Field>
                        </div>
                        <button type="submit" className="btn btn-outline-success">Submit</button>
                    </div>

                </Form>
            </Formik>

        </>
    )
}