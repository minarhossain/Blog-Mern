require('dotenv').config()
const app = require('./app');






const port = process.env.PORT || 8000;
// console.log(process.env.USER);

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
})