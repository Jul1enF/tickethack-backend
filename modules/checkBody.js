// Si un des éléments attendu dans le body est vide ou inexistant, la fonction retournera false, sinon true.
// we will use like this from routes/trips.js:
//   if(checkBody( req.body,["departure","arrival","date"])) ...

function checkBody(body, fields) {
    let count=0;
    for (let i=0; i< fields.length; i++) {
        if(body[fields[i]]) count++;
    }
    return ( count === fields.length);
}
module.exports={checkBody};