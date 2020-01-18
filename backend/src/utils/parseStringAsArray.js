module.exports = function parse_array_as_string(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}