// <!-- TODO:  1001 ~ 1008 -->
// <!-- TODO:  1010 ~ 1015 -->
// <!-- TODO:  1017 ~ 1072 -->
// <!-- TODO:  1074 ~ 1095 -->


// // TODO : 1001 : printf()를 이용해 다음 단어를 출력하시오.
// // 입력 : 입력 없음
// // 출력 : Hello

// let output_1001 = "Hello";

// console.log(1001, output_1001);


// // TODO : 1002 : 이번에는 공백()을 포함한 문장을 출력한다. 다음 문장을 출력해보자.
// // 입력 : 입력 없음
// // 출력 : Hello World

// let output_1002_1 = "hello";
// let output_1002_2 = "world";
// let output_1002 = output_1002_1 + " " + output_1002_2;

// console.log(1002, output_1002);

// // TODO : 1003 : 이번에는 줄을 바꿔 출력하는 출력문을 연습해보자. 다음과 같이 줄을 바꿔 출력해야 한다.
// // 입력 : 입력 없음
// // 출력 : Hello
// //        World

// let output_1003_1 = "hello";
// let output_1003_2 = "world";
// let output_1003 = output_1003_1 + "\n" + output_1003_2;

// console.log(1003, "\n" + output_1003);

// // TODO : 1004 : 이번에는 작은 따옴표(single quotation mark)가 들어있는 특수한 형태의 출력문에 대한 연습을 해보자.
// // 입력 : 입력 없음
// // 출력 : 'Hello'

// let output_1004 = "'Hello'";

// console.log(1004, output_1004);


// // TODO : 1005 : 이번에는 큰따옴표(double quotation mark)가 포함된 출력문을 연습해보자.
// // 입력 : 입력 없음
// // 출력 : "Hello World"

// let output_1005 = '"Hello"';

// console.log(1005, output_1005);

// // TODO : 1006 : 이번에는 특수문자 출력에 도전하자!!
// // 입력 : 입력 없음
// // 출력 : "!@#$%^&*()"

// let output_1006 = '"!@#$%^&*()"';

// console.log(1006, output_1006);

// // TODO : 1007 : 윈도우 운영체제의 파일 경로를 출력하는 연습을 해보자.
// // 입력 : 입력 없음
// // 출력 : "C:\Download\hello.cpp"

// let output_1007 = '"C:\\Download\\hello.cpp"';

// console.log(1007, output_1007);

// // TODO : 1008 : 이번에는 특수문자를 출력하는 연습을 해보자.
// // 입력 : 입력 없음
// // 출력 : ┌┬┐
// //        ├┼┤
// //        └┴┘

// let output_1008_1 = "\u250C\u252C\u2510";
// let output_1008_2 = "\u251C\u253C\u2524";
// let output_1008_3 = "\u2514\u2534\u2518";
// let output_1008 = output_1008_1 + "\n" + output_1008_2 + "\n" + output_1008_3;

// console.log(1008, "\n" + output_1008);

// console.log("========================");

// // <!-- TODO:  1010 ~ 1015 -->
// // TODO : 1010 : 정수형(int)으로 변수를 선언하고, 변수에 정수값을 저장한 후 변수에 저장되어 있는 값을 그대로 출력해보자.
// // 입력 : 15
// // 출력 : 15

// let input_1010 = Number(prompt(" 1010, 15 입력 "));
// let output_1010 = input_1010;

// console.log(1010, "" + output_1010)

// // TODO : 1011 : 문자형(char)으로 변수를 하나 선언하고, 변수에 문자를 저장한 후 변수에 저장되어 있는 문자를 그대로 출력해보자.

// // 입력 : p
// // 출력 : p

// let char = (prompt(" 1011, p 입력 "));
// let output_1011 = char

// console.log(1011, "" + output_1011)

// // TODO : 1012 : 실수형(float)로 변수를 선언하고 그 변수에 실수값을 저장한 후 저장되어 있는 실수값을 출력해보자.
// // 입력 : 1.414213
// // 출력 : 1.414213

// let input_1012 = Number(prompt(" 1012, 1.414213 입력 "));
// let output_1012 = parseFloat(input_1012);

// console.log(1012, "" + output_1012)

// // TODO : 1013 : 정수(int) 2개를 입력받아 그대로 출력해보자.
// // 입력 : 1 2
// // 출력 : 1 2

// let input_1013_1 = Number(prompt(" 1013_1, 1 입력 "));
// let input_1013_2 = Number(prompt(" 1013_2, 2 입력 "));
// let output_1013 = input_1013_1 + " " +input_1013_2;

// // console.log(1013, "" + output_1013)

// // TODO : 1014 : 2개의 문자(ASCII CODE)를 입력받아서 순서를 바꿔 출력해보자.
// // 입력 : A b
// // 출력 : b A

// let input_1014_1 = (prompt(" 1014_1, A 입력 "));
// let input_1014_2 = (prompt(" 1014_2, b 입력 "));
// let output_1014 = input_1014_2 + " " +input_1014_1;

// console.log(1014, "" + output_1014)

// // TODO : 1015 : 실수(float) 1개를 입력받아 저장한 후, 저장되어 있는 값을 소수점 셋 째 자리에서 반올림하여 소수점 이하 둘 째 자리까지 출력하시오.
// // 입력 : 1.59254
// // 출력 : 1.59

// let input_1015 = Number(prompt(" 1015, 1.59254 입력 "));
// let output_1015 = input_1015.toFixed(2);

// console.log(1015, "" + output_1015)

// console.log("========================");

// <!-- TODO:  1017 ~ 1072 -->

// // TODO : 1017 : int형 정수 1개를 입력받아 공백을 사이에 두고 3번 출력해보자.
// // 입력 : 125
// // 출력 : 125 125 125

// let input_1017 = Number(prompt(" 1017, 125 입력 "));
// let output_1017 = input_1017 + ` ` + input_1017 + ` ` + input_1017;

// console.log(1017, "" + output_1017)

// // TODO : 1018 : 어떤 형식에 맞추어 시간이 입력될 때, 그대로 출력하는 연습을 해보자.
// // 입력 : 3:16
// // 출력 : 3:16

// let input_1018 = (prompt(" 1018, 3:16 입력 "));
// let parts_1018 = input_1018.split(':');
// let hour_1018 = parts_1018[0];
// let minute_1018 = parts_1018[1];
// let output_1018 = hour_1018 + ":" + minute_1018;

// console.log(1018, "" + output_1018)

// TODO : 1019 : 년, 월, 일을 입력받아 지정된 형식으로 출력하는 연습을 해보자.
// 입력 : 2013.8.5
// 출력 : 2013.08.05

let input_1019 = (prompt(" 1019, 2013.8.5 입력 "));
let parts_1019 = input_1019.split('.');
let year_1019 = parts_1019[0];
let month_1019 = parts_1019[1].padStart(2, '0');
let day_1019 = parts_1019[2].padStart(2, '0');
let output_1019 = year_1019 + "." + month_1019 + "." + day_1019;

console.log(1019, "" + output_1019)
