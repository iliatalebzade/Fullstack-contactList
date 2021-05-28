const express = require('express')

const usersRoutes = require('./routes/users')

const app = express();

app.use(usersRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));