export const getCourseDuration = (duration) => {
	const hours = Math.floor(duration / 60).toString();
	const minutes = (duration % 60).toString();

	const formattedHours = hours.length > 1 ? hours : '0' + hours;
	const formattedMinutes = minutes.length > 1 ? minutes : '0' + minutes;

	return `${formattedHours}:${formattedMinutes}`;
};

export const formatCreationDate = (date) => {
  const dateFields = date.split('/');

  const day = dateFields[0];
  const month = dateFields[1];
  const year = dateFields[2];

  const formattedMonth = (month.length === 2 ? month : `0${month}`);
  const formattedDay = (day.length === 2 ? day : `0${day}`);

  return `${formattedDay}.${formattedMonth}.${year}`;
}
