const recursion = function(map,str='', count = 0, build=[]) {
    for (let k in map) {
      let count2 = count + 1;
      if ({}.toString.call(map[k]) == '[object Object]') {
        recursion(map[k],str+k+'/', count2, build);
      } else {
        if (Array.isArray(build[count])) {
          
         build[count].push(map[k]);
        } else {
          build[count] = [map[k]]
        }
      }
    }
    return build;
  };
  
  let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
  
  let array = recursion(tree);
  console.log(array); // [[100], [90, 120], [70,99,110,130]]