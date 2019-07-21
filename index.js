const server = require('./server.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
   console.log(`Sous Chef! Your recipes will be flying in on port ${PORT}...`);
});