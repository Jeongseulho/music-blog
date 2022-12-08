function formatDateTime(mySqlDateTime) {
  const date = new Date(mySqlDateTime);

  const formatOptions = {
    timeZone: 'Asia/Jakarta',
    dateStyle: 'short',
    hour12: false,
    timeStyle: 'medium',
  };

  return new Intl.DateTimeFormat('en-CA', formatOptions).format(date).split(',').join('');
}

export default formatDateTime;
