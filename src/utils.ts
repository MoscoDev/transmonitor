export const abbreviate = (name: string) => {
  const nameParts = name.split(" ");
  const firstNameInitial = nameParts[0]?.[0] || ""; // First character of the first name
  const lastNameInitial = nameParts[1]?.[0] || ""; // First character of the last name (if available)

  return firstNameInitial + lastNameInitial;
};