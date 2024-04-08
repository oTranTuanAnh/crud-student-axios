import {useNavigate, useParams} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import './create.css';
import {useEffect, useState} from "react";

export default function Edit(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [data, setData] = useState({});
    useEffect(()=>{
        axios.get("http://localhost:3000/students/"+id).then(
            res=>{
              setData(res.data)
                console.log(data)
            })
    },[])


    return(
        <>
            <Formik initialValues={data} onSubmit={(values)=>{
                axios.put("http://localhost:3000/students/"+data.id, values).then(
                    res=>{
                        navigate("/")
                    })

            }}
            enableReinitialize={true}>
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