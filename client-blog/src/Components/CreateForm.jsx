import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"



const CreateForm = () => {
    const [formValue, setFormValue] = useState({
        title: "",
        content: "",
        image: "",
        author: "",

    });
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const inputOnChange = (property, value) => {
        setFormValue({ ...formValue, [property]: value });
    }
    const onSubmit = async () => {
        setLoading(true);

        try {
            const res = await axios.post('http://localhost:5000/api/v1/createBlog', formValue);

            if (res.status === 200) {
                // toast.success("Data Inserted Successfully!")
                toast("Data Inserted Successfully!");
                setFormValue({})
                navigate('/')
            } else {
                alert("Something went wrong!");
            }
        } catch (error) {
            alert("An Occurred while something the form.")
        } finally {
            setLoading(false)
        }

    }

    return (
        <div className="container">
            <div className="row">
                <h2 className="text-center my-4  text-primary">Add Your Blogs</h2>

                <div className="col-md-4 p-2">
                    <label htmlFor="">Blog Title</label>
                    <input value={formValue.title} onChange={(e) => { inputOnChange("title", e.target.value) }} type="text" className="form-control" required />
                </div>

                <div className="col-md-4 p-2">
                    <label htmlFor=""> Content</label>
                    <input value={formValue.content} onChange={(e) => { inputOnChange("content", e.target.value) }} type="text" className="form-control" required />
                </div>

                <div className="col-md-4 p-2">
                    <label htmlFor="">Blog Image</label>
                    <input value={formValue.image} onChange={(e) => { inputOnChange("image", e.target.value) }} type="text" className="form-control" required />
                </div>

                <div className="col-md-4 p-2">
                    <label htmlFor="">Author</label>
                    <input value={formValue.author} onChange={(e) => { inputOnChange("author", e.target.value) }} type="text" className="form-control" required />
                </div>



                <button onClick={onSubmit} className="btn btn-info mt-3 w-25 mx-auto"> Create Blog</button>

            </div>

        </div>
    );
};

export default CreateForm;