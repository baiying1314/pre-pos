function collect_same_elements(collection_a, collection_b) {
  var same_varible=[];//在这里写入代码 
  
   for(var i = 0;i < collection_a.length;i++)
      for(var j = 0;j < collection_b.length;j++)
      if(collection_a[i]==collection_b[j])
        {
         same_varible.push(collection_a[i]);
         break;
        }
         return same_varible;
}
