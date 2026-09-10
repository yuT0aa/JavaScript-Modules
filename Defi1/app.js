import {students} from './etudiant.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//1. Ajouter un étudiant. (spread operator au lieu de push)
export const ajoutStudent=(newStudent)=>{
    students=[...students,newStudent];
};

//2. Supprimer un étudiant. (filter ou splice)
export const delStudent=(id)=>{
    students=[students.filter(student=>student.id !==id)];
};

//3. Rechercher un étudiant par id. (find)
export const findStudentID=(id)=>{
    return students.find(student=>student.id ===id)
};

//4. Rechercher un étudiant par son nom. (filter)
export const findStudentName=(name)=>{
    return students.find(student=>student.name ===name)
};

//5. Calculer la moyenne d'un étudiant. (reduce)
export const calStudentMoy=(id)=>{
    const student=findStudentID(id);
    if(student){
        const sum=student.notes.reduce((acc,grade)=>acc+grade,0);
        return sum/student.notes.length;
    }
};

//6. Afficher les étudiants ayant une moyenne ≥ 10. (filter)

export const filterByMoy=()=>{
    return students.filter(student=>calStudentMoy(student.id)>=10);
};

//7. Trouver l'étudiant ayant la meilleure moyenne. (sort)
export const bestStudent=()=>{
    return students.sort((a, b) => calStudentMoy(b.id) - calStudentMoy(a.id))[0];
};

//8. Trier les étudiants par moyenne. (sort)
export const sortByMoy=()=>{
    return students.sort((a,b)=>calStudentMoy(b.id)-calStudentMoy(a.id));
};