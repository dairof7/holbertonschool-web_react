interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [propName: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

interface Directors extends Teacher {
  numberOfReports: number;
}

/* eslint-disable @typescript-eslint/class-name-casing */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printFullName(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

export const printTeacher: printTeacherFunction = printFullName;


/* eslint-enable @typescript-eslint/class-name-casing */

export interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const StudentClass: StudentConstructor =
class StudentClass implements StudentClassInterface {
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
/* eslint-enable @typescript-eslint/no-unused-vars */

/*
 const teacher1: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log('teacher1', teacher1);

console.log('Teacher: ', printTeacher('Joe', 'Doe'))

const s1 = new StudentClass('pepito', 'perez');

console.log(s1);

*/

