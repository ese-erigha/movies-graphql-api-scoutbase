import {join,resolve} from "path";
import {existsSync,mkdirSync} from "fs";
import rfs from "rotating-file-stream";

const pad = (num:number)=>{
    return (num > 9 ? "" : "0") + num;
};
 
const generator =(time, index)=>{
    if (!time) return "file.log";
 
    var month = time.getFullYear() + "" + pad(time.getMonth() + 1);
    var day = pad(time.getDate());
    var hour = pad(time.getHours());
    var minute = pad(time.getMinutes());
 
    return month + "/" + month + day + "-" + hour + minute + "-" + index + "-file.log";
};

const logDirectory = resolve(__dirname,'../')+'/log';

// ensure log directory exists
existsSync(logDirectory) || mkdirSync(logDirectory);

// create a rotating write stream
const accessLogStream = rfs(generator, {
  interval: '1d', // rotate daily
  path: logDirectory
});

export default accessLogStream;