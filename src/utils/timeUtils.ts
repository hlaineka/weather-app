export const getTimeString = (time: number) => {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds
  const date = new Date(time * 1000);

  const hours = date.getHours();

  const minutes = date.getMinutes();

  const formattedTime = hours + ':' + minutes;

  return formattedTime;
};

export const getDateString = (time: number) => {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds
  const date = new Date(time * 1000);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const days = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
    '11th',
    '12th',
    '13th',
    '14th',
    '15th',
    '16th',
    '17th',
    '18th',
    '19th',
    '20th',
    '21st',
    '22nd',
    '23rd',
    '24th',
    '25th',
    '26th',
    '27th',
    '28th',
    '29th',
    '30th',
    '31st',
  ];

  const month = months[date.getMonth()];

  const day = days[date.getDate() - 1];

  const formattedTime = month + ' ' + day;

  return formattedTime;
};
