const express = require('express')
const app = express()
const port = 3001

const cors = require('cors')
const axios = require('axios')
const https = require('https')
app.use(cors());
//const { createProxyMiddleware } = require('http-proxy-middleware');
// app.use('/api', createProxyMiddleware({ 
//     target: 'http://localhost:3000/', //original url
//     changeOrigin: true, 
//     //secure: false,
//     onProxyRes: function (proxyRes, req, res) {
//        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//     }
// }));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
app.get('/', async (req, res)  => {
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false
      })
      const x  = await axios.get("http://static.bidflyer.com.s3.amazonaws.com/promotional/test.json", { httpsAgent });
  res.send(x.data);
})

