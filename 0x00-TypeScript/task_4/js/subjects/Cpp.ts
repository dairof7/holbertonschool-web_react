/// <reference path="./Subject.ts" />

namespace Subjects {
  export interface TeacherInterface {
    experienceTeachingC?: number
  }
  export class Cpp extends Subject {
      getRequirements = ():string => {
          return `Here is the list of requirements for Cpp`
      }

      getAvailableTeacher = ():string => {
          const { firstName, experienceTeachingC } = this.teacher
          if (experienceTeachingC === undefined || experienceTeachingC <= 0) {
              return `No available teacher`
          }
          return `Available teacher: ${firstName}`
      }
  }
}
