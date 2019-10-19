// my

function dirReduc(arr){
  let counter = 0;
  let result = [...arr];
  
  function reducin(result) {
    if (counter === arr.length) return result;
    for (let i = 0; i < arr.length; i++) {
      if (result[i] === "NORTH" && result[i+1] === "SOUTH") {
        result.splice(i, 2);
      } else
      if (result[i] === "SOUTH" && result[i+1] === "NORTH") {
        result.splice(i, 2);
      } else
      if (result[i] === "WEST" && result[i+1] === "EAST") {
        result.splice(i, 2);
      } else
      if (result[i] === "EAST" && result[i+1] === "WEST") {
        result.splice(i, 2);
      }
    };
    counter++;
    return reducin(result);
  };
  return reducin(result);
}


// liked

function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}