const BlogsModel = require("../models/BlogsModel");


// Create a new Blog
exports.CreateBlog = (req, res) => {
    let reqBody = req.body;
    console.log(reqBody);
    BlogsModel.create(reqBody)
        .then(data => res.status(200).json({ status: "Success", data: data }))
        .catch(error => res.status(400).json({ status: "Failed", data: error }));
}

// Read all Blogs
exports.ReadBlog = (req, res) => {
    const query = {};
    const projection = "title content image author createdAt";
    BlogsModel.find(query, projection)
        .then(data => res.status(200).json({ status: "Success", data: data }))
        .catch(error => res.status(400).json({ status: "Failed", data: error }));
};

// Read a single Blog by id
exports.ReadBlogById = (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    BlogsModel.findById(query)
        .then(data => res.status(200).json({ status: "Success", data: data }))
        .catch(error => res.status(400).json({ status: "Failed", data: error }));

};

// Update Blog
exports.UpdateBlog = (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    const reqBody = req.body;
    BlogsModel.updateOne(query, reqBody)
        .then(data => res.status(200).json({ status: "Success", data: data }))
        .catch(error => res.status(400).json({ status: "Failed", data: error }));
};


// Delete blog
exports.DeleteBlog = (req, res) => {
    const id = req.params.id;
    const query = { _id: id };
    BlogsModel.deleteOne(query)
        .then(data => res.status(200).json({ status: "Success", data: data }))
        .catch(error => res.status(400).json({ status: "Failed", data: error }));
};