// console.log('HELLO WORLD');

function addArgs(args) {
    var result = 0;
    for (var i = 2; i<args.length; i++) {
      result += +args[i];
    }
    return result;
  }
  
  var output = addArgs(process.argv);
  
  console.log(output);