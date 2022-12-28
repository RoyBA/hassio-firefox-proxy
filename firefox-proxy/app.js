const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const [securedProtocol, serverContainerName, serverPort] = process.argv.slice(2);

if (securedProtocol && serverContainerName && serverPort) {
    const protocol = securedProtocol === 'true' ? 'https' : 'http';
    const myProxy = createProxyMiddleware(`${protocol}://${serverContainerName}:${serverPort}`, { changeOrigin: true });

    const app = express();
    app.use(myProxy);

    const server = app.listen(8099);
    server.on('upgrade', myProxy.upgrade); // <-- subscribe to http 'upgrade'

    console.log('Proxy server created on port 8099');
}
else {
    console.log('Configuration error');
}