import { useEffect, useState } from "react";
import { Delete, Read } from "../APIServices/CRUDServices";
import Table from 'react-bootstrap/Table'
import axios from "axios";

import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const ListTable = () => {
    const [dataList, setDataList] = useState([]);


    const fetchData = async () => {
        try {
            const response = await axios.get('https://blog-mern-steel.vercel.app/api/v1/readBlog');

            setDataList(response.data['data']);
        } catch (error) {
            console.error('Error fetching data: ', error)
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`https://blog-mern-steel.vercel.app/api/v1/deleteBlog/${id}`);
            toast("Delete Success");
            fetchData()
        } catch (error) {
            console.error("Error deleting Item :", error)
        }
    }
    // const updateProduct = async (id) => {
    //     // alert(id);
    // }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="container ">
            <div >
                <div className="d-flex justify-content-between flex-wrap">
                    {
                        dataList.map((data) => {

                            return (


                                <Card className="mt-5" key={data._id} style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={data?.image} />
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>

                                            {
                                                data.content.length > 100 ?
                                                    <>
                                                        {data.content.slice(0, 100) + '...'} <Link to={`/readBlogById/${data._id}`}> <span>Read Details</span> </Link>
                                                    </>
                                                    :
                                                    <>
                                                        {data.content}
                                                    </>
                                            }

                                        </Card.Text>

                                        <Card.Text>
                                            Author:    {data.author}  CreatedAt :{data.createdAt}
                                        </Card.Text>

                                        <button onClick={() => { updateProduct(data._id) }} className="btn btn-success"> <Link className="text-decoration-none text-light" to={`/update/${data._id}`}>Edit</Link></button> <button onClick={() => deleteProduct(data._id)} className="btn btn-danger">Delete</button>
                                    </Card.Body>
                                </Card>

                            )
                        })
                    }


                </div>
            </div>
        </div >
    );
};

export default ListTable;