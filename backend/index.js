const express = require('express');

const app = express();
const port = 3001;

// 1. GET DATA OF 5 USERS FROM THIS API (https://randomuser.me/api)

// 2. SORT DATA TO RETURN JSON IN THIS FORMAT

// 3. [
//   {
//     "first": "",
//     "last": "",
//     "city": "",
//     "state": "",
//     "country": ""
//   } .....
// ]



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});