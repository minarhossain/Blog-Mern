import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router';

const UpdateForm = () => {
    const { id } = useParams();

    const [values, setValues] = useState({
        id: id,
        title: "",
        content: "",
        image: "",
        author: "",

    });
    // const inputOnChange = (property, value) => {
    //     setFormValue({ ...formValue, [property]: value });
    // }
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/readBlogById/' + id)
            .then(res => {
                console.log(res.data.data);
                setValues({ ...values, title: res.data.data.title, content: res.data.data.content, image: res.data.data.image, author: res.data.data.author })
            })
            .catch(error => console.log(error))
    }, []);

    const navigate = useNavigate();

    const onSubmit = () => {
        axios.post('http://localhost:5000/api/v1/updateBlog/' + id, values)
            .then(res => {
                console.log(res.data.data);
                // setValues({ ...values, title: res.data.data.title, content: res.data.data.content, image: res.data.data.image, author: res.data.data.author })
                toast("Update Success")
                navigate('/');
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='container'>
            <div className="row">
                <h2 className="text-center my-4  text-primary">Update Blog</h2>

                <div className="col-md-4 p-2">
                    <label htmlFor="">Blog Title</label>
                    <input value={values.title} onChange={(e) => setValues({ ...values, title: e.target.value })} type="text" className="form-control" required />
                </div>

                <div className="col-md-4 p-2">
                    <label htmlFor=""> Content</label>
                    <input value={values.content} onChange={(e) => setValues({ ...values, content: e.target.value })} type="text" className="form-control" required />
                </div>

                <div className="col-md-4 p-2">
                    <label htmlFor="">Blog Image</label>
                    <input value={values.image} onChange={(e) => setValues({ ...values, image: e.target.value })} type="text" className="form-control" required />
                </div>

                <div className="col-md-4 p-2">
                    <label htmlFor="">Author</label>
                    <input value={values.author} onChange={(e) => setValues({ ...values, author: e.target.value })} type="text" className="form-control" required />
                </div>



                <button onClick={onSubmit} className="btn btn-info mt-3 w-25 mx-auto"> Update Blog</button>

            </div>
        </div>
    );
};

export default UpdateForm;