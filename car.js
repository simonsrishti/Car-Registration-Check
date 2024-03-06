const carDetails = [
{carBrand: 'Toyota Prius',
registranionNumber: 'EK19XWB',
dateRegistrtion: '19 March 2019',
fuelType: 'Hybrid',
color: 'Bronze',
MotDate: '03 March 2024',
TestResult: 'PASS'
},
{carBrand: 'Seat Toledo',
registranionNumber: 'PY16OYL',
dateRegistrtion: '05 August 2016',
fuelType: 'Petrol',
color: 'Black',
MotDate: '01 July 2022',
TestResult: 'FAIL'
},
{carBrand: 'FORD B-MAX',
registranionNumber: 'PF66OGP',
dateRegistrtion: '30 November 2016',
fuelType: 'Petrol',
color: 'Black',
MotDate: '29 November 2023',
TestResult: 'PASS'
}
]
const rowDetails = document.querySelector('.details')
const searchBtn = document.getElementById('search')
const registration = document.querySelector('.registration_Number')
const makeModel =  document.querySelector('.car_Make_model')
const color =  document.querySelector('.color')
const fuelType =  document.querySelector('.fuelType')
const regdate =  document.querySelector('.regdate')
const resultDate =  document.querySelector('.result_2')
const motStatus =  document.querySelector('.result_3')

const serachByReg = function(){
const userInput = document.getElementById('userInput').value
let findCars = carDetails.find(arr => arr.registranionNumber === userInput)
registration.innerHTML = findCars.registranionNumber
makeModel.innerHTML = findCars.carBrand
color.innerHTML = findCars.color
fuelType.innerHTML = findCars.fuelType
regdate.innerHTML = findCars.dateRegistrtion
resultDate.innerHTML = findCars.MotDate
motStatus.innerHTML = findCars.TestResult
if(findCars.TestResult === 'PASS'){
  motStatus.style.color = '#00703C'
}
else{
  motStatus.style.color = 'red'
}

rowDetails.style.display = 'block'
}


searchBtn.addEventListener('click', serachByReg)
