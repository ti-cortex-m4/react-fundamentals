export const formatCourseDuration = (duration) => {
  const hours = Math.floor(duration / 60).toString();
  const minutes = (duration % 60).toString();

  const formattedHours = hours.length > 1 ? hours : '0' + hours;
  const formattedMinutes = minutes.length > 1 ? minutes : '0' + minutes;

  return `${formattedHours}:${formattedMinutes}`;
};
