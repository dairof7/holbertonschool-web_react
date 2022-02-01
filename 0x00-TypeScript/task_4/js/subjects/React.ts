/// <reference path="./Subject.ts" />

namespace Subjects {
  export interface TeacherInterface {
      experienceTeachingReact?: number
  }
  export class React extends Subject {
      getRequirements = ():string => {
          return `Here is the list of requirements for React`
      }

      getAvailableTeacher = ():string => {
          const { firstName, experienceTeachingReact } = this.teacher
          if (experienceTeachingReact === undefined || experienceTeachingReact <= 0) {
              return `No available teacher`
          }
          return `Available teacher: ${firstName}`
      }
  }
}
