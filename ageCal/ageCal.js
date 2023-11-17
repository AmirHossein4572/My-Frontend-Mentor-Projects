let dayInputElement = document.querySelector('.js-input-Day')
let monthInputElement = document.querySelector('.js-input-Month')
let yearInputElement = document.querySelector('.js-input-Year')
let lableElement1 = document.querySelector('.js-lable1')
let lableElement2 = document.querySelector('.js-lable2')
let lableElement3 = document.querySelector('.js-lable3')
let yearElement = document.querySelector('.js-Year')
let monthsElement = document.querySelector('.js-Month')
let dayElement =document.querySelector('.js-Day')


function age() {

  let d1 = dayInputElement.value
  let m1 = monthInputElement.value
  let y1 = yearInputElement.value

  if (d1 === '' || m1 === '' || y1 === '') {
    let lable1 = lableElement1.classList
    let day = dayInputElement.classList
    let lable2 = lableElement2.classList
    let month = monthInputElement.classList
    let lable3 = lableElement3.classList
    let year = yearInputElement.classList
    lable3.add('Erorr')
    year.add('incorrect_Input')
    lable2.add('Erorr')
    month.add('incorrect_Input')
    lable1.add('Erorr')
    day.add('incorrect_Input')
  }else if (d1 <= 31 && m1 <= 12 && y1 <= 2023) {
    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  
    if (d1 > d2) {
      d2 = d2 + month[m2 -1]
      m2 = m2 -1
    }
    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 -1;
    }
    let d = d2 - d1
    let m = m2 - m1
    let y = y2 - y1
  
    yearElement.innerHTML = `${y}`
    monthsElement.innerHTML = `${m}`
    dayElement.innerHTML = `${d}`
  }
  
}