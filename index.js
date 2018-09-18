const _port = 3000;
/**
 * change _port to following 
 * Brandon : 3000
 * Mason : 5000
 * Ella : 4000
 */
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();
app.use(bodyParser.json()); // support json encoded bodies
app.use("/", router);

router.post('/serverapi', (reqMsg, rspMsg) => {
    console.log("Simulator received: " + JSON.stringify(reqMsg.body));
    var packedMsg = new Object();
    /*
    * Define here
    */
    if (reqMsg.body.header.msgType === 105){
        //case 1
        packedMsg = {
            "header": {
                "msgType": 106,
                "msgLen": 0,
                "endpointId": 0
            },
            "payload": {
                "resultCode": 0,
                "usn": "4",
                "nsc": "1"
            }
        }
        // case 2
    } else if (reqMsg.body.header.msgType === 107){
        packedMsg = {
            "header": {
                "msgType": 108,
                "msgLen": 0,
                "endpointId": 4
            },
            "payload": {
                "resultCode": 0
            }
        }
    }
    console.log("Simulator Send: " + JSON.stringify(packedMsg));
    rspMsg.send(packedMsg);
});

app.listen(_port, () => {
    console.log("Simulator is running port" + _port.toString());
})