// Utility function to format a date
export function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
}

// Utility function to capitalize a string
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
