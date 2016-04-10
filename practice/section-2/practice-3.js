function count_same_elements(collection) {
    var result = [];
    var str=[];

    for (var i = 0; i < collection.length; i++) {

        if (collection[i].length === 1) {
            if (i == 0)
                result.push({name: collection[i], summary: 1});
            else {
                for (var j = 0; j < result.length; j++)
                    if (collection[i] === result[j].name) {
                        result[j].summary++;
                        break;
                    }
                if (j >= result.length)
                    result.push({name: collection[i], summary: 1});
            }
        }
        else {
            str = collection[i].split("");
            if (i == 0)
                result.push({name: str[0], summary:parseInt(str[2])});
            else {
                for (var j = 0; j < result.length; j++){
                    if (str[0] === result[j].name && str.length > 4){
                        result[j].summary= result[j].summary +parseInt(str[2])*10+parseInt(str[3]);break;}
                     if(str[0] === result[j].name && str.length <= 4) {
                       result[j].summary = result[j].summary + parseInt(str[2]);
                       break;
                     }
                    }
                if (j >= result.length)
                    result.push({name: str[0], summary:parseInt(str[2])});
            }
        }
    }
    return result;
}

