const express = require('express');
const BlogsController = require('../controllers/BlogsController');
const User = require('../controllers/AuthController');

const router = express.Router();

// Api Routing End Point
// Create
router.post('/createBlog', BlogsController.CreateBlog);
// Read Blog
router.get('/readBlog', BlogsController.ReadBlog);
//Read Blog by Id
router.get('/readBlogById/:id', BlogsController.ReadBlogById);
// Update Blog
router.post('/updateBlog/:id', BlogsController.UpdateBlog);
// Delete Blog
router.delete('/deleteBlog/:id', BlogsController.DeleteBlog);



// User related Routing

router.post('/registerUser', User.register);
router.post('/loginUser', User.login);
router.get('/users', User.loadUser);

module.exports = router;