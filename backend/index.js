const express = require('express');

const app = express();
const port = 3001;

/* 1. 
CREATE AN API ROUTE AND GET DATA OF 5 USERS FROM THIS API (https://randomuser.me/api)
SORT DATA AND RETURN JSON IN THIS FORMAT
 [
  {
    "first": "",
    "last": "",
    "city": "",
    "state": "",
    "country": ""
  } .....
]*/



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});