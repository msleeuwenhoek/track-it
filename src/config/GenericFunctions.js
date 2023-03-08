import { weekdayNames, monthNames } from "./dates";
import Bad from "../images/white_frowning_face.png";
import Good from "../images/slightly_smiling_face.png";
import Great from "../images/grin.png";
import Meh from "../images/neutral_face.png";
import Sob from "../images/sob.png";
import Smiley from "../images/smiley.png";

import * as utilityStyles from "../styles/utility.js";
import moment from "moment";

function getSelectedCategory(categories, category) {
  const selectedCategory = categories.find((c) => c.data.name === category);
  return selectedCategory;
}

function isSameDate(firstDate, secondDate) {
  if (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  ) {
    return true;
  } else {
    return false;
  }
}

function getWeekDates(selectedDate) {
  const date = new Date(selectedDate);
  const firstDayOfWeek = new Date(
    date.setDate(date.getDate() - date.getDay() + (date.getDay() == 0 ? -6 : 1))
  );
  const weekDates = [firstDayOfWeek];
  for (var i = 0; i < 6; i++) {
    const newDate = new Date(date.setDate(date.getDate() + 1));
    weekDates.push(newDate);
  }

  return weekDates;
}

function formattedDateRange(firstDate, secondDate) {
  const formattedFirstDate = firstDate.getDate();
  const formattedFirstMonth = monthNames[firstDate.getMonth()];
  const formattedSecondDate = secondDate.getDate();
  const formattedSecondMonth = monthNames[secondDate.getMonth()];
  return `${formattedFirstDate} ${formattedFirstMonth} -  ${formattedSecondDate} ${formattedSecondMonth}`;
}
function getPreviousDate(selectedDate) {
  const date = new Date(selectedDate);
  return new Date(date.setDate(date.getDate() - 1));
}
function getNextDate(selectedDate) {
  const date = new Date(selectedDate);
  return new Date(date.setDate(date.getDate() + 1));
}

function newDate(date) {
  const newDate = new Date(date.seconds * 1000 + date.nanoseconds / 1000000);

  return newDate;
}

function formattedTime(date) {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function formattedDate(date) {
  const formattedWeekday = weekdayNames[date.getDay()];
  const formattedMonth = String(date.getMonth() + 1).padStart(2, "0");
  const formattedDate = date.getDate();

  return `${formattedWeekday}, ${formattedDate}/${formattedMonth}`;
}

function getMonthDates(selectedDate) {
  const daysInMonth = moment(selectedDate).daysInMonth();
  const date = new Date(selectedDate);
  const dateArray = [];

  for (let i = 1; i <= daysInMonth; i++) {
    const newDate = new Date(date.setDate(i));
    dateArray.push(newDate);
  }
  return dateArray;
}

function getMood(number) {
  const index = number !== 0 ? number - 1 : 0;
  const emojis = [
    {
      emoji: Sob,
      mood: "awful",
      themeColor: utilityStyles.colors.colorHighlight3,
    },
    {
      emoji: Bad,
      mood: "bad",
      themeColor: utilityStyles.colors.colorHighlight3,
    },
    {
      emoji: Meh,
      mood: "meh",
      themeColor: utilityStyles.colors.colorHighlight3,
    },
    {
      emoji: Good,
      mood: "fine",
      themeColor: utilityStyles.colors.colorHighlight2,
    },
    {
      emoji: Smiley,
      mood: "good",
      themeColor: utilityStyles.colors.colorHighlight2,
    },
    {
      emoji: Great,
      mood: "great",
      themeColor: utilityStyles.colors.colorHighlight2,
    },
  ];
  return emojis[index];
}

export {
  formattedTime,
  formattedDate,
  newDate,
  isSameDate,
  getWeekDates,
  formattedDateRange,
  getSelectedCategory,
  getPreviousDate,
  getNextDate,
  getMood,
  getMonthDates,
};
