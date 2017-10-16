// process.argv.forEach((val, index) => {
// 	console.log(`${index}: ${val}`);
//   });


  const fs = require('fs');
  const URL = require('url').Url;
  const fileUrl = new URL('file:///tmp/hello');
  
  let result = fs.readFileSync(fileUrl);
result;