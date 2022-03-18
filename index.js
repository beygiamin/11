const hijriYearThousandDigit = ['هزار ',
'دو هزار',
'سه هزار',
'چهار هزار',
'پنج هزار',
'شیش هزار',
'هفت هزار',
'هشت هزار',
'نه هزار '
];
const hijriYearHundredDigit = [
    'صد',
    'دویست',
    'سی صد',
    'چهار صد',
    'پانصد صد',
    'ششصت صد',
    'هفت صد',
    'هشت صد',
    'نه صد'
  ];
const hijriYearDecimalDigit = [
  'ده',
  'بیست',
  'سی',
  'چهل',
  'پنجاه',
  'شصت',
  'هفتاد',
  'هشتاد',
  'نود',
];
const hijriYearSingleDigit= ['یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه'];
 const hijriMonth = [
   'فروردین',
   'اردیبهشت',
   'خرداد',
   'تیر',
   'مرداد',
   'شهریور',
   'مهر',
   'آبان',
   'آذر',
   'دی',
   'بهمن',
   'اسفند'
 ]
 const hijriDays = [
    'یکُم',
    'دوم',
    'سوم',
    'چهارم',
    'پنجم',
    'ششم',
    'هفتم',
    'هشتم',
    'نهم',
    'دهم',
    'یازدهم',
    'دوازدهم',
    'سیزدهم',
    'چهاردهم',
    'پانزدهم',
    'شانزدهم',
    'هفتهم',
    'هجدهم',
    'نوزدهم',
    'بیستم',
    'بیست و یکم',
    'بیست و دوم',
    'بیست و سوم',
    'بیست و چهارم',
    'بیست و پنجم',
    'بیست و ششم',
    'بیست و هفتم',
    'بیست و هشتم',
    'بیست و نهم',
    'سی ام',
    'سی و یکم'
     ]
 const hijriWeekdays = [
    'شنبه',
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه'
  ];
  const gregorianMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  const gregorianWeekdays = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
//Get & Change The Number To Text
getUserNumber ()
function getUserNumber () {
let input = document.getElementById("farsiDate").value;
const parted = input.split("/");
let unpartedYear = Number(parted[0]);
let yearDigits = unpartedYear.toString().split('');
let yearArray = yearDigits.map(Number);
let yearFirstDigit = Number(yearArray[0]);
let yearSecondDigit = Number(yearArray[1])
let yearThirdDigit = Number(yearArray[2])
let yearLastDigit = Number(yearArray[3])
let month = Number(parted[1]);
let day = Number(parted[2]);
const dateArray = showDateText(yearFirstDigit,
    yearSecondDigit,
    yearThirdDigit,
    yearLastDigit,
    month,
    day);
const date = dateArray.toString();
console.log(date);
}
//Show IR Date.
function showDateText(yearFirstDigit, yearSecondDigit, yearThirdDigit, yearLastDigit, month, day){
return [hijriDays[day-1],
hijriMonth[month-1],
hijriYearThousandDigit[yearFirstDigit-1],
hijriYearHundredDigit[yearSecondDigit-1],
hijriYearDecimalDigit[yearThirdDigit-1],
hijriYearSingleDigit[yearLastDigit-1]
];
};
//.................Changer...................\\

  
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\\
       //function hijriToGregorian (jy, jm, jd) {
       //  var sal_a, gy, gm, gd, days;
       //  jy += 1595;
       //  days =
       //    -355668 +
       //    365 * jy +
       //    ~~(jy / 33) * 8 +
       //    ~~(((jy % 33) + 3) / 4) +
       //    jd +
       //    (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
       //  gy = 400 * ~~(days / 146097);
       //  days %= 146097;
       //  if (days > 36524) {
       //    gy += 100 * ~~(--days / 36524);
       //    days %= 36524;
       //    if (days >= 365) days++;
       //  }
       //  gy += 4 * ~~(days / 1461);
       //  days %= 1461;
       //  if (days > 365) {
       //    gy += ~~((days - 1) / 365);
       //    days = (days - 1) % 365;
       //  }
       //  gd = days + 1;
       //  sal_a = [
       //    0,
       //    31,
       //    (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0 ? 29 : 28,
       //    31,
       //    30,
       //    31,
       //    30,
       //    31,
       //    31,
       //    30,
       //    31,
       //    30,
       //    31,
       //  ];
       //  for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
       //  return [gy, gm, gd];
       //}
