// Завдання 1 - Таймер зворотного відліку

'use strict';

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
const startButton = document.querySelector('.start-btn');
startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        const currentDate = new Date();
        if (userSelectedDate <= currentDate) {
      iziToast.error({
        title: "Error",
        message: "Please choose a date in the future",
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

const datetimePicker = flatpickr("#datetime-picker", options);

startButton.addEventListener('click', () => {
    if (userSelectedDate <= new Date()) {
        iziToast.error({
        title: "Error",
        message: "Please choose a date in the future",
      });
        return;
    } 

    startTimer();
    datetimePicker.destroy();
  }
);

function startTimer() {
    startButton.disabled = true;

  const timerInterval = setInterval(() => {
    const remainingTime = userSelectedDate - new Date();
    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      updateTimer(0);
      iziToast.success({
        title: "Success",
        message: "Countdown finished!",
      });
      startButton.disabled = false;
    } else {
      updateTimer(remainingTime);
    }
  }, 1000);
}

function updateTimer(remainingTime) {
  const { days, hours, minutes, seconds } = convertMs(remainingTime);
  document.querySelector("[data-days]").textContent = addLeadingZero(days);
  document.querySelector("[data-hours]").textContent = addLeadingZero(hours);
  document.querySelector("[data-minutes]").textContent = addLeadingZero(minutes);
  document.querySelector("[data-seconds]").textContent = addLeadingZero(seconds);
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}




