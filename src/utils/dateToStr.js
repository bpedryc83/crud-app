const dateToStr = dateObject => dateObject.getDate().toString().padStart(2, "0") +
  "-" + (dateObject.getMonth() + 1).toString().padStart(2, "0") +
  "-" + dateObject.getFullYear();

export default dateToStr;