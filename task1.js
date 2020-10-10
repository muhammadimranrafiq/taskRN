const Fs = require('fs');
const Path = '../Uploaded Files';
var readStream = Fs.createReadStream( 'task1.txt', 'utf8');
let data = ''
readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    data = data.split('\r\n');
    data.forEach((element,index) => {
        data[index] = element.split(' ')
    });
    let s=Number(data[0][0]); t=Number(data[0][1]); a = Number(data[1][0]); b= Number(data[1][1]);
    let red = []; blue = [];
    let reddrop =0; bluedrop = 0;
    for(let i = 0;i<data[2][0] ;i++){
        red.push(Number(data[3][i]));
    }
    for(let i = 0;i<data[2][1] ;i++){
        blue.push(Number(data[4][i]));
    }
    for (let value of red){
        if(value + a >= s && t>= value + a){
            reddrop ++;
        }
    }
    
    for (let value of blue){
        if(value + b >= s && t>= value + b){
            bluedrop ++;
        }
    }
    console.log("Red :",reddrop, " Blue ",bluedrop);
});