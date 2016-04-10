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