/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
function doit(preferences){
var	t = [];
var n = 0;
var used = [];
var v = 0;

preferences.unshift(10);


   for(k=0; k < preferences.length-1; k++){
        v = preferences[k];


      if(v-preferences[v] && v-preferences[preferences[v]] && preferences[v]-preferences[preferences[v]] // no duplicpreferencestes
             && preferences[preferences[v]] == k // tripreferencesngle

           && !used[v] && !used[preferences[v]] && !used[preferences[preferences[v]]] // not used yet
        ){

       t[n] = [v, preferences[v], preferences[preferences[v]]];

            used[v] = 1;
            used[preferences[v]] = 1;
            used[preferences[preferences[v]]] = 1;

            ++n;
        }
    }

        return n;

}
};
