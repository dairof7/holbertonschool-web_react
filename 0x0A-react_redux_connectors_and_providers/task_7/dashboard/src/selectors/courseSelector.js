

export const courseSelector = (state) => {
  const courses = state;
  if (courses.isEmpty()) return {};
  return courses.valueSeq();
};