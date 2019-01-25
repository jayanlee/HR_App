const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080

app.use(express.static(__dirname + '/dist'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(server_port, server_ip_address, () => console.log('Running...'));