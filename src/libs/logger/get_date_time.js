function formatNumber(num) {
  return num.toString().padStart(2, "0");
}

function getDateTime() {
  const d = new Date();
  const day = formatNumber(d.getDate());
  const month = formatNumber(d.getMonth() + 1);
  const year = formatNumber(d.getFullYear());
  const hour = formatNumber(d.getHours());
  const minute = formatNumber(d.getMinutes());
  const second = formatNumber(d.getSeconds());

  const date = [year, month, day].join("-");
  const time = [hour, minute, second].join(":");

  return `${date} ${time}`;
}

export default getDateTime;
