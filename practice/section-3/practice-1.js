function create_updated_collection(collection_a, object_b) {
  
  for(var i = 0;i < collection_a.length;i++)
   for(var j = 0;j < object_b.value.length;j++){
     if(collection_a[i].key===object_b.value[j]){
        collection_a[i].count-=1;
        
     }
}
  return collection_a;
}
