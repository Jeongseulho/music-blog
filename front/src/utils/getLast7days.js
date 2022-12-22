function getLast7days() {
  const last7days = [];
  for (let i = 0; i < 7; i += 1) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dateString = `${month}월 ${day}일`;
    last7days.push(dateString);
  }

  return last7days;
}

export default getLast7days;
