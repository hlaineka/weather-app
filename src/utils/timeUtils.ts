export const getTimeString = (time: number) => {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds
  const date = new Date(time * 1000);

  const hours = date.getHours();

  const minutes = '0' + date.getMinutes();

  const formattedTime = hours + ':' + minutes.substring(-2);

  console.log(formattedTime);
  return formattedTime;
};
