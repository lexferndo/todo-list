const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

const showFormattedTime = (date) => {
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return new Date(date).toLocaleTimeString("id-ID", options);
};

export { showFormattedDate, showFormattedTime };
