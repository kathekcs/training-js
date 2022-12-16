const employee = ['Juan', 'Angela', 'Carlos', 'Daniela'];
const role = ['CEO', 'CTO', 'DEV', 'DEV'];
const seniority = [5, 10, 4, 2];

// Escribir un programa que imprima la información completa por empleado
employee.forEach((item, index) => {
    console.log(item + ' es el/la ' + role[index] + ' y tiene ' + seniority[index] + ' años de experiencia');
});

// Escribir un programa el nombre y el cargo el empleado con mas experiencia
const seniorityMaxPosition = seniority.indexOf(Math.max(...seniority));
console.log('El empleado con más experiencia es ' + employee[seniorityMaxPosition] + ' con el cargo ' + role[seniorityMaxPosition]);

// Agregar los siguientes empleados al final de cada arreglo
employee.push('Juanita','Sebastian','Santiago');
role.push('DEV','Tech Lead','DEV');
seniority.push(2, 3, 0);

employee.forEach((item, index) => {
    console.log(item + ' --> ' + role[index] + ' --> ' + seniority[index] + ' años');
});
