import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as h,i as s}from"./assets/vendor-77e16229.js";let r;const n=document.querySelector(".start-btn");n.disabled=!0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){r=e[0],r<=new Date?(s.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):n.disabled=!1}},D=h("#datetime-picker",y);n.addEventListener("click",()=>{if(r<=new Date){s.error({title:"Error",message:"Please choose a date in the future"});return}b(),D.destroy()});function b(){n.disabled=!0;const e=setInterval(()=>{const t=r-new Date;t<=0?(clearInterval(e),u(0),s.success({title:"Success",message:"Countdown finished!"}),n.disabled=!1):u(t)},1e3)}function u(e){const{days:t,hours:a,minutes:c,seconds:i}=p(e);document.querySelector("[data-days]").textContent=o(t),document.querySelector("[data-hours]").textContent=o(a),document.querySelector("[data-minutes]").textContent=o(c),document.querySelector("[data-seconds]").textContent=o(i)}function p(e){const d=Math.floor(e/864e5),l=Math.floor(e%864e5/36e5),m=Math.floor(e%864e5%36e5/6e4),f=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:m,seconds:f}}function o(e){return e<10?`0${e}`:e}
//# sourceMappingURL=commonHelpers.js.map
