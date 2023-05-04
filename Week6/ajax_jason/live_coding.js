//JavaScript Object Notation = JSON
const student = {
    first_name: "Oana",
    age: 22,
    favSubject: "JavaScript"
};
student.first_name;

//data json
let json = '{"first_name": "Oana", "age": 22,"favSubject": "JavaScript"}';
json;

//turning json into an object
const jsonObj = JSON.parse(json);
jsonObj;
jsonObj.age;

//turning an object into a json
json = JSON.stringify(jsonObj);
