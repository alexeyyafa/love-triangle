/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
function arrayunique(preferences) {
	preferences.sort(function(a, b){return a - b});
    var tmp_arr = new Array();
    for (var i = 0; i < preferences.length; i++) {
        if (tmp_arr.indexOf(preferences[i]) == "-1") {
            tmp_arr.push(preferences[i]);
        }
    }
    return tmp_arr;

}


function arraygroups(preferences = []) {
    var groups = 0;
    for(var i=0; i < arrayunique(preferences).length; i++){

        if(arrayunique(preferences)[i] + 1 == arrayunique(preferences)[i+1] && arrayunique(preferences)[i] + 2 ==arrayunique(preferences)[i+2]){

            ++groups;
            i += 2;
        }
    }

return groups;
}
return arraygroups(preferences);
};
