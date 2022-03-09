import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const s = Seq(grades);

  console.log(
    s.filter((v) => v.score >= 70).map((x) => {
      const i = x;
      i.firstName = i.firstName.charAt(0)
        .toUpperCase() + i.firstName.slice(1);
      i.lastName = i.lastName
        .charAt(0).toUpperCase() + i.lastName.slice(1);
      return x;
    }).toJS(),
  );
}
