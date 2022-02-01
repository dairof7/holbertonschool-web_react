interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Carlos',
    lastName: 'Cortez',
    age: 25,
    location: 'Colombia'
}

const student2: Student = {
    firstName: 'Pepito',
    lastName: 'Perez',
    age: 30,
    location: 'Francia'
}

const studentsList: Array<Student> = [
    student1,
    student2
]

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const trHead: HTMLTableRowElement = document.createElement('tr');
const th1: HTMLTableHeaderCellElement = document.createElement('th');
const th2: HTMLTableHeaderCellElement = document.createElement('th');

th1.innerHTML = 'firstName';
th2.innerHTML = 'location';

table.append(thead);
table.append(tbody);
thead.append(trHead);
trHead.append(th1);
trHead.append(th2);

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow();
    tbody.append(row);
    const cell: HTMLTableCellElement = row.insertCell();
    const text: Text = document.createTextNode(student.firstName);
    cell.appendChild(text);

    const cell2: HTMLTableCellElement = row.insertCell();
    const text2: Text = document.createTextNode(student.location);
    cell2.appendChild(text2);
})
document.body.appendChild(table)
