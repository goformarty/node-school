function addArgs(args) {
    let result = 0;
    for (let i = 2; i<args.length; i++) {
      result += +args[i];
    }
    return result;
  }
  
  let output = addArgs(process.argv);
  
  console.log(output);