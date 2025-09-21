import {
  format,
  formatDistanceToNow,
  isToday,
  isYesterday,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from "date-fns";

export const formatRelativeDate = (date: Date | string | number): string => {
  const now = new Date();
  const inputDate = new Date(date);

  const minutesDiff = differenceInMinutes(now, inputDate);
  const hoursDiff = differenceInHours(now, inputDate);
  const daysDiff = differenceInDays(now, inputDate);

  // Just now (less than 1 minute)
  if (minutesDiff < 1) {
    return "Just now";
  }

  // X minutes ago (1-59 minutes)
  if (minutesDiff < 60) {
    return `${minutesDiff} minute${minutesDiff > 1 ? "s" : ""} ago`;
  }

  // X hours ago (1-23 hours, but not today with time)
  if (hoursDiff < 24 && !isToday(inputDate)) {
    return `${hoursDiff} hour${hoursDiff > 1 ? "s" : ""} ago`;
  }

  // Today, 11:59 AM (if it's today)
  if (isToday(inputDate)) {
    return `Today, ${format(inputDate, "h:mm a")}`;
  }

  // Yesterday, 11:59 AM (if it's yesterday)
  if (isYesterday(inputDate)) {
    return `Yesterday, ${format(inputDate, "h:mm a")}`;
  }

  // For dates older than yesterday
  if (daysDiff < 7) {
    // This week: "Monday, 11:59 AM"
    return format(inputDate, "EEEE, h:mm a");
  }

  if (daysDiff < 365) {
    // This year: "Dec 25, 11:59 AM"
    return format(inputDate, "MMM d, h:mm a");
  }

  // Older than a year: "Dec 25, 2022, 11:59 AM"
  return format(inputDate, "MMM d, yyyy, h:mm a");
};

// // Usage examples
// const testDates = [
//   new Date(), // Just now
//   new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
//   new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
//   new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
//   new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago (today)
//   new Date(Date.now() - 24 * 60 * 60 * 1000), // Yesterday
//   new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
//   new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
//   new Date("2022-12-25T14:30:00"), // Old date
// ];

// // Test the function
// testDates.forEach((date) => {
//   console.log(`${date.toISOString()} -> ${formatRelativeDate(date)}`);
// });
