export function getTime(dateTimeString) {
  const date = new Date(dateTimeString);

  // Get the day of the week (e.g., Sunday, Monday, etc.)
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[date.getUTCDay()];

  // Extract time in 'HH:mm:ss' format
  const timeString = date.toISOString().split("T")[1].split(".")[0];

  return `${dayOfWeek} , ${timeString}`;
}
   