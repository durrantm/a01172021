import daysOfTheWeek from './daysOfTheWeek';

const showDayNameDaily = (date) => {
  const dayOFWeek = new Date(Date.parse(date)).getDay();
  return daysOfTheWeek[(dayOFWeek + 1) % 7];
};

export default showDayNameDaily;