import { students as initialStudents } from './etudiant.js';

export let students = [...initialStudents];

export const ajoutStudent = (newStudent) => {
  students = [...students, newStudent];
};

export const delStudent = (id) => {
  students = students.filter((student) => student.id !== id);
};

export const findStudentID = (id) => {
  return students.find((student) => student.id === id);
};

export const findStudentName = (name) => {
  const query = name.trim().toLowerCase();
  return students.find((student) => student.name.toLowerCase() === query);
};

export const calStudentMoy = (id) => {
  const student = findStudentID(id);

  if (!student || student.notes.length === 0) {
    return 0;
  }

  const sum = student.notes.reduce((acc, grade) => acc + grade, 0);
  return sum / student.notes.length;
};

export const filterByMoy = () => {
  return students.filter((student) => calStudentMoy(student.id) >= 10);
};

export const bestStudent = () => {
  return [...students].sort((a, b) => calStudentMoy(b.id) - calStudentMoy(a.id))[0];
};

export const sortByMoy = () => {
  return students.sort((a, b) => calStudentMoy(b.id) - calStudentMoy(a.id));
};

if (typeof document !== 'undefined') {
  const studentList = document.getElementById('student-list');
  const addStudentForm = document.getElementById('add-student-form');
  const studentNameInput = document.getElementById('student-name');
  const studentMoyInput = document.getElementById('student-moy');

  const renderStudents = () => {
    if (!studentList) {
      return;
    }

    studentList.innerHTML = students
      .map((student) => `<li>${student.name} - ${calStudentMoy(student.id).toFixed(1)}</li>`)
      .join('');
  };

  addStudentForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = studentNameInput?.value?.trim();
    const moy = Number(studentMoyInput?.value);

    if (!name || Number.isNaN(moy)) {
      return;
    }

    ajoutStudent({
      id: Date.now(),
      name,
      age: 0,
      notes: [moy],
    });

    studentNameInput.value = '';
    studentMoyInput.value = '';
    renderStudents();
  });

  renderStudents();
}
