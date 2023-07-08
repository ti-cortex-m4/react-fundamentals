export const formatCreationDate = (date) => {

  const dateFields = date.split('/');  
  const day = dateFields[0];
  const month = dateFields[1];
  const year = dateFields[2];
  
  const formattedMonth = month.length === 2 ? month : `0${month}`;
  const formattedDay = day.length === 2 ? day : `0${day}`;

  return `${formattedDay}.${formattedMonth}.${year}`;
}
