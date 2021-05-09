const express = require('express')
const cors = require('cors')
const app = express();
const port = 9090;

/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @param res {string} respond object from coming request. 
 * This function send result back to the caller.
// * @return {Promise<string>}
 * 
 */
 function execShellCommand(cmd, res) {
    const exec = require('child_process').exec;
   // return new Promise((resolve, reject) => {
     exec(cmd, (error, stdout, stderr) => {
        if (error) {
        console.warn(error);
        }
        /*
        console.log("stdout");
        console.log(stdout);
        console.log("stderr");
        console.log(stderr);
        */
        // resolve(stdout? stdout : stderr);
        let result = (stdout? stdout : stderr);
        res.send(result);
//     });
    });
   }
  
app.use(cors())

app.get('/yletv_opas/:date', (req, res) => {
    const cmd = 'curl https://areena.yle.fi/tv/opas?t=' +req.params.date.substring(1);
    // res.send(cmd);
    execShellCommand(cmd, res)
})

// ?t=2021-03-20
app.get('/yleradio_opas/:date', (req, res) => {
    const cmd = 'curl https://areena.yle.fi/audio/opas?t=' +req.params.date.substring(1);
    // res.send(cmd);
    execShellCommand(cmd, res)
  })
  
app.listen(port, () => {
  console.log(`Node server for yle tv- and radio-programs listening at http://localhost:${port}`)
})