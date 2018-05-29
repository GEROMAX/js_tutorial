const dayOfWeekName = ["日", "月", "火", "水", "木", "金", "土"];
const getDayOfWeekName = dt => {
  return dayOfWeekName[dt.getDay()];
};
