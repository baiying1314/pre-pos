function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_c = count_same_elements(collection_a)
  return create1_updated_collection(collection_c, object_b)
}
  function count_same_elements(collection) {

    result = [];

    for (var i = 0; i < collection.length; i++) {
      // if (collection[i].length <= 1) {
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
    return result;
  }
function create1_updated_collection(collection_a, object_b) {

  for(var i = 0;i < collection_a.length;i++)
   for(var j = 0;j < object_b.value.length;j++){
     if(collection_a[i].key===object_b.value[j])
        collection_a[i].count=collection_a[i].count-(parseInt)(collection_a[i].count/3);
      }
  return collection_a;
}


