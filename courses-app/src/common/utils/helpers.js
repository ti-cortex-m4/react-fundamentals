export const classNames = classes => {
  return Object.entries(classes)
    .filter(([, value]) => value)
    .map(([key]) => {
      return key === 'undefined'
        ? ''
        : key;
    })
    .join(' ');
};

export const translateMinutesToTime = minutes => {
  const minutesInHour = 60;
  const hours = Math.floor(minutes / minutesInHour).toString();
  const minutesQuantity = (minutes % minutesInHour).toString();
  const parsedHours = hours.length > 1 ? hours : '0' + hours;
  const parsedMinutes = minutesQuantity.length > 1 ? minutesQuantity : '0' + minutesQuantity;

  return `${parsedHours}:${parsedMinutes}`;
};

export const convertDate = date => {
  const dateData = date.split('/');
  const month = dateData[1];
  const day = dateData[0];
  const parsedMonth = month.length === 2 ? month : `0${month}`;
  const parsedDay = day.length === 2 ? day : `0${day}`;

  return `${parsedDay}.${parsedMonth}.${dateData[2]}`
}

export const filterDataListByMultiplyId = (dataList, idList) => {
  return dataList.filter(({ id }) => idList.includes(id));
};
