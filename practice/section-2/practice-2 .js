function count_same_elements(collection) {
  var result = [];
   var str=[];

  for (var i = 0; i < collection.length; i++) {

    if (collection[i].length === 1) {
      if (i == 0)
        result.push({key: collection[i], count: 1});
      else {
        for (var j = 0; j < result.length; j++)
          if (collection[i] === result[j].key) {
            result[j].count++;
            break;
          }
        if (j >= result.length)
          result.push({key: collection[i], count: 1});
      }
    } 
    else {
      str = collection[i].split('-');
      if (i == 0)
        result.push({key: str[0], count:parseInt(str[1])});
      else {
        for (var j = 0; j < result.length; j++)
          if (str[0] === result[j].key) {
            result[j].count = result[j].count +parseInt(str[1]);
            break;
          }
        if (j >= result.length)
          result.push({key: str[0], count:parseInt(str[1])});
      }
    }
  }
  return result;
}

  