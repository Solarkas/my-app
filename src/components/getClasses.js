export const getBageClasses = (value) => {
  let classes = "badge m-2 ";
  classes += value === 0 ? "bg-warning" : "bg-primary";
  return classes;
};
