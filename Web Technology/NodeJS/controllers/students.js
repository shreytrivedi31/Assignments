import * as fs from 'fs';

function loadJSON(fileName = ''){return JSON.parse(fs.existsSync(fileName)?fs.readFileSync(fileName).toString():'null')}



function saveJSON(fileName = '', json='""'){return fs.writeFileSync(fileName,JSON.stringify(json, null, 2))}

// let students = [];

export const getStudents = (req, res) => {
    const data = loadJSON('student.json');
    res.send(data);
}

export const createStudent = (req, res) => {   
    const student = req.body;
    const data = loadJSON('student.json');

    data.push(student);

    saveJSON('student.json',data);
    
    res.send(`student ${student.name} added to the database.`);
};

export const getStudent = (req, res) => {
    const { id } = req.params;
    const data = loadJSON('student.json');
    const studentFound = data.find((student) => student.id == id);

    res.send(studentFound);
};

export const deleteStudent = (req, res) => { 
    const { id } = req.params;
    let data = loadJSON('student.json');
   data = data.filter((student) => student.id != id);
   saveJSON('student.json',data);
    res.send(`student with id ${id} has been deleted`);
    
};

export const updateStudent =  (req,res) => {
    const  { id }  = req.params;
    const { name , password , gender , birthdate , age , country , phone} = req.body;
    let data = loadJSON('student.json');
    const student = data.find((student) => student.id == id);
    student.name = name;
    student.password = password;
    student.gender = gender;
    student.birthdate = birthdate;
    student.age = age;
    student.country = country;
    student.phone = phone;
    saveJSON('student.json',data);
    res.send(`student has been updated to ${student.name}`)
};