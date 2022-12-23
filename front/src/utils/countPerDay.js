import formatDateTime from './formatDateTime';

function getLast7days(today) {
  const last7days = [];
  for (let i = 0; i < 7; i += 1) {
    const copiedToday = new Date(today.getTime());
    copiedToday.setDate(copiedToday.getDate() - i);
    const year = copiedToday.getFullYear();
    const month = copiedToday.getMonth() + 1;
    const day = copiedToday.getDate();
    const dateString = `${year}-${month}-${day}`;
    last7days.push(dateString);
  }
  return last7days;
}

function countPerDay(list, today) {
  const data = [];
  const last7days = getLast7days(today);
  const count = [0, 0, 0, 0, 0, 0, 0];
  const registerDateList = list.map((item) => formatDateTime(item.registerDate).split(' ')[0]);

  for (let i = 0; i < last7days.length; i += 1) {
    for (let j = 0; j < registerDateList.length; j += 1) {
      if (last7days[i] === registerDateList[j]) {
        count[i] += 1;
      }
    }
  }
  last7days.reverse();
  count.reverse();
  for (let i = 0; i < last7days.length; i += 1) {
    const obj = {
      x: last7days[i],
      y: count[i],
    };
    data.push(obj);
  }

  return data;
}

export { getLast7days };
export default countPerDay;
