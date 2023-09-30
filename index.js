const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: '' });

const PORT = process.env.RUNNING_PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});