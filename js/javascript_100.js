// <!-- TODO:  1001 ~ 1008 -->
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

// console.log(1010, "" + output_1010);

// // TODO : 1011 : 문자형(char)으로 변수를 하나 선언하고, 변수에 문자를 저장한 후 변수에 저장되어 있는 문자를 그대로 출력해보자.

// // 입력 : p
// // 출력 : p

// let char = (prompt(" 1011, p 입력 "));
// let output_1011 = char

// console.log(1011, "" + output_1011);

// // TODO : 1012 : 실수형(float)로 변수를 선언하고 그 변수에 실수값을 저장한 후 저장되어 있는 실수값을 출력해보자.
// // 입력 : 1.414213
// // 출력 : 1.414213

// let input_1012 = Number(prompt(" 1012, 1.414213 입력 "));
// let output_1012 = parseFloat(input_1012);

// console.log(1012, "" + output_1012);

// // TODO : 1013 : 정수(int) 2개를 입력받아 그대로 출력해보자.
// // 입력 : 1 2
// // 출력 : 1 2

// let input_1013_1 = Number(prompt(" 1013_1, 1 입력 "));
// let input_1013_2 = Number(prompt(" 1013_2, 2 입력 "));
// let output_1013 = input_1013_1 + " " + input_1013_2;

// // console.log(1013, "" + output_1013)

// // TODO : 1014 : 2개의 문자(ASCII CODE)를 입력받아서 순서를 바꿔 출력해보자.
// // 입력 : A b
// // 출력 : b A

// let input_1014_1 = prompt(" 1014_1, A 입력 ");
// let input_1014_2 = prompt(" 1014_2, b 입력 ");
// let output_1014 = input_1014_2 + " " + input_1014_1;

// console.log(1014, "" + output_1014);

// // TODO : 1015 : 실수(float) 1개를 입력받아 저장한 후, 저장되어 있는 값을 소수점 셋 째 자리에서 반올림하여 소수점 이하 둘 째 자리까지 출력하시오.
// // 입력 : 1.59254
// // 출력 : 1.59

// let input_1015 = Number(prompt(" 1015, 1.59254 입력 "));
// let output_1015 = input_1015.toFixed(2);

// console.log(1015, "" + output_1015);

// console.log("========================");

// // <!-- TODO:  1017 ~ 1072 -->

// // TODO : 1017 : int형 정수 1개를 입력받아 공백을 사이에 두고 3번 출력해보자.
// // 입력 : 125
// // 출력 : 125 125 125

// let input_1017 = Number(prompt(" 1017, 125 입력 "));
// let output_1017 = input_1017 + ` ` + input_1017 + ` ` + input_1017;

// console.log(1017, "" + output_1017);

// // TODO : 1018 : 어떤 형식에 맞추어 시간이 입력될 때, 그대로 출력하는 연습을 해보자.
// // 입력 : 3:16
// // 출력 : 3:16

// let input_1018 = prompt(" 1018, 3:16 입력 ");
// let parts_1018 = input_1018.split(':');
// let hour_1018 = parts_1018[0];
// let minute_1018 = parts_1018[1];
// let output_1018 = hour_1018 + ":" + minute_1018;

// console.log(1018, "" + output_1018);

// // TODO : 1019 : 년, 월, 일을 입력받아 지정된 형식으로 출력하는 연습을 해보자.
// // 입력 : 2013.8.5
// // 출력 : 2013.08.05

// let input_1019 = prompt(" 1019, 2013.8.5 입력 ");
// let parts_1019 = input_1019.split('.');
// let year_1019 = parts_1019[0];
// let month_1019 = parts_1019[1].padStart(2, '0');
// let day_1019 = parts_1019[2].padStart(2, '0');
// let output_1019 = year_1019 + "." + month_1019 + "." + day_1019;

// console.log(1019, "" + output_1019);

// // TODO : 1020 : 주민번호는 다음과 같이 구성된다.
// // TODO :        XXXXXX-XXXXXXX
// // TODO :        앞의 6자리는 생년월일(yymmdd)이고 뒤 7자리는 성별, 지역, 오류검출코드이다.
// // TODO :        주민번호를 입력받아 형태를 바꿔 출력해보자.
// // 입력 : 000907-1121112
// // 출력 : 0009071121112

// let input_1020 = prompt(" 1020, 000907-1121112 입력 ");
// let output_1020 = input_1020.replace('-', "");

// console.log(1020, "" + output_1020);

// // TODO : 1021 : 1개의 단어를 입력받아 그대로 출력해보자.
// // TODO :        한 단어가 입력된다.(단, 단어의 길이는 50자 이하이다.)
// // 입력 : Informatics
// // 출력 : Informatics

// let input_1021 = prompt(" 1021, Informatics(최대 50자) 입력 ");

// if (input_1021.length <= 50) {
//     let output_1021 = input_1021;
//     console.log(1021, "" + output_1021);
// } else {
//     console.log(1021, "" + "단어의 길이가 50자를 초과했습니다.");
// };

// // TODO : 1022 : 공백 문자가 포함되어 있는 문장을 입력받고 그대로 출력하는 연습을 해보자.
// // TODO :        공백이 포함되어 있는 한 문장이 입력된다.
// // TODO :        단, 입력되는 문장은 여러 개의 단어로 구성되고, 엔터로 끝나며,
// // TODO :        최대 길이는 2000 문자를 넘지 않는다.
// // 입력 : Programming is very fun!!
// // 출력 : Programming is very fun!!

// let input_1022 = prompt(" 1022, Programming is very fun!!(최대 2000자) 입력 ");

// if (input_1022.length <= 2000) {
//     let output_1022 = input_1022;
//     console.log(1022, "" + output_1022);
// } else {
//     console.log(1022, "" + "단어의 길이가 2000자를 초과했습니다.");
// };

// // TODO : 1023 : 실수 1개를 입력받아 정수 부분과 실수 부분으로 나누어 출력한다.
// // TODO :        실수 1개가 입력된다.
// // TODO :        (단, 입력값은 절댓값이 10000을 넘지 않으며, 소수점 이하 자릿수는 최대 6자리까지이고
// // TODO :        0이 아닌 숫자로 시작한다.)
// // 입력 : 1.414213
// // 출력 : 1
// //      : 414213

// let input_1023 = parseFloat(prompt(" 1023, 1.414213(입력값은 절댓값이 10000) 입력 "));

// if (Math.abs(input_1023) <= 10000) {

//     let output_int_1023 = Math.floor(input_1023); // 정수 부분
//     let output_flo_1023 = input_1023 - output_int_1023; // 실수 부분

//     console.log(1023,  "정수 부분: " + output_int_1023);
//     console.log(1023, "실수 부분: " + output_flo_1023.toFixed(6)); // 최대 6자리까지 출력

// } else {
//     console.log(1021, "" + "절대 값이 입력이 10000 초과했습니다.");
// };

// // TODO : 1024 : 단어를 1개 입력받는다.
// // TODO :        입력받은 단어(영어)의 각 문자를
// // TODO :        한줄에 한 문자씩 분리해 출력한다.
// // 입력 : Boy
// // 출력 : 'B'
// //      : 'o'
// //      : 'y'

// let input_1024 = prompt(" 1024, Boy 입력 ");

// for (let i = 0; i < input_1024.length; i++) {
//     let output_1024 = input_1024[i];
//     console.log(1024, "" + output_1024);
// };

// // TODO : 1025 : 다섯 자리의 정수 1개를 입력받아 각 자리별로 나누어 출력한다.
// // TODO :        (단, 10,000 <= 입력받는 수 <= 99,999 )
// // 입력 : 75254
// // 출력 : [70000]
// //      : [5000]
// //      : [200]
// //      : [50]
// //      : [4]

// let input_1025 = prompt(" 1025, 75254 입력 ");

// if (input_1025.length === 5 && !isNaN(input_1025)) {
//     for (let i = 0; i < input_1025.length; i++) {
//     }
//     console.log(1025, "" + "[" + input_1025[0] + "0000" + "]");
//     console.log(1025, "" + "[" + input_1025[1] + "000" + "]");
//     console.log(1025, "" + "[" + input_1025[2] + "00" + "]");
//     console.log(1025, "" + "[" + input_1025[3] + "0" + "]");
//     console.log(1025, "" + "[" + input_1025[4] + "" + "]");
// } else {
//     console.log(1025, "" + " 잘못입력하였습니다. 10,000 <= 입력받는 수 <= 99,999 입력 ");
// };

// // TODO : 1026 : 입력되는 시:분:초 에서 분만 출력해보자.

// // 입력 : 17:23:57
// // 출력 : 23
// let input_1026 = prompt(" 1026, 17:23:57 입력 ");

// let parts_1026 = input_1026.split(':');
// let hour_1026 = parts_1026[0].padStart(2, '0');
// let minute_1026 = parts_1026[1].padStart(2, '0');   // 분만 출력
// let second_1026 = parts_1026[2].padStart(2, '0');
// let output_1026 = minute_1026;

// console.log(1026, "" + output_1026);

// // TODO : 1027 : 년월일을 일월년으로 바꾸어 '-'(대쉬, 마이너스)로 구분해 출력한다.
// // TODO :        (단, 한 자리 일/월은 0을 붙여 두자리로, 년도도 0을 붙여 네자리로 출력한다.)
// // 입력 : 2014.07.15
// // 출력 : 15-07-2014

// let input_1027 = prompt(" 1027, 2014.07.15 입력 ");

// let parts_1027 = input_1027.split('.');
// let year_1027 = parts_1027[0].padStart(4, '000');
// let month_1027 = parts_1027[1].padStart(2, '0');
// let day_1027 = parts_1027[2].padStart(2, '0');
// let output_1027 = day_1027 + "-" + month_1027 + "-" + year_1027;

// console.log(1027, "" + output_1027);

// // TODO : 1028 : 정수 1개가 입력된다.
// // TODO :        (단, 입력되는 정수의 범위는 0 ~ 4294967295 이다.)
// // 입력 : 2147483648
// // 출력 : 2147483648

// let input_1028 = Number(prompt(" 1028, 2147483648 입력 "));

// if (input_1028 >= 0 && input_1028 <= 4294967295) {
//     let output_1028 = input_1028;
//     console.log(1028, "" + output_1028);

// } else {
//     console.log(1028, "" + " 0 ~ 4294967295 만 입력 가능합니다.");
// };

// // TODO : 1029 : 소수점 아래 숫자가 11개 이하인 실수 1개가 입력된다.
// // TODO :        (단, 입력되는 실수의 범위는 +- 1.7*10-308 ~ +- 1.7*10308 이다.)
// // TODO :        입력된 실수를 소수점 이하 11자리까지 반올림하여 출력한다.
// // 입력 : 3.14159265359
// // 출력 : 3.14159265359

// let input_1029 = Number(prompt(" 1029, 3.14159265359 입력 "));

// if (!isNaN(input_1029) && input_1029 >= -1.7e-308 && input_1029 <= 1.7e308) {
//     // 실수 최소 범위 함수로 사용 가능 : -1.7e-308 = Number.MIN_VALUE
//     // 실수 최대 범위 함수로 사용 가능 : 1.7e308 = Number.MAX_VALUE
//     let output_1029 = input_1029.toFixed(11);
//     console.log(1029, "" + output_1029);
// } else {
//     console.log(1029, "" + " +- 1.7*10-308 ~ +- 1.7*10308 만 입력 가능합니다.");
// }
// // TODO : 1030 : 정수 1개가 입력된다.
// // TODO :        단, 입력되는 정수의 범위는 -9223372036854775808 ~ +9223372036854775807 이다.
// // TODO :        입력된 정수를 그대로 출력한다.
// // 입력 : -2147483649
// // 출력 : -2147483649

// let input_1030 = Number(prompt(" 1030, -2147483649 입력 "));
// if (!isNaN(input_1030) && input_1030 >= -9223372036854775808 && input_1030 <= 9223372036854775807) {
//     let output_1030 = input_1030
//     console.log(1030, "" + output_1030);
// } else {
//     console.log(1030, "" + "-9223372036854775808 ~ +9223372036854775807 만 입력 가능합니다.");
// };

// // TODO : 1034 : 8진수로 입력된 정수 1개를 10진수로 바꾸어 출력해보자.
// // 입력 : 13
// // 출력 : 11

// let input_1034 = Number(prompt(" 1034, 13 입력 "));

// let output_1034 = parseInt(input_1034, 8);

// console.log(1034, "" + output_1034);

// // TODO : 1035 : 16진수로 입력된 정수 1개를 8진수로 바꾸어 출력해보자.
// // TODO :        16진 정수 1개가 입력된다. (단, 16진수는 영문 소문자로 입력된다.)
// // 입력 : f
// // 출력 : 17

// let input_1035 = prompt(" 1035, f 입력 ");
// let decimalNumber_1035 = parseInt(input_1035, 16);
// let output_1035 = decimalNumber_1035.toString(8);

// console.log(1035, "" + output_1035);

// // TODO : 1036 : 영문자 1개를 입력받아 아스키 코드표의 10진수 값으로 출력해보자.
// // 입력 : A
// // 출력 : 65

// let input_1036 = prompt(" 1036, A 입력 ");
// let output_1036 = input_1036.charCodeAt(0);

// console.log(1036, "" + output_1036);

// // TODO : 1037 : 10진 정수 1개를 입력받아 아스키 문자로 출력해보자.
// // TODO :        단, 0 ~ 255 범위의 정수만 입력된다.
// // 입력 : 65
// // 출력 : A

// let input_1037 = Number(prompt(" 1037, 65 입력 "));

// if (input_1037 >= 0 && input_1037 <= 255) {
//   let asciiChar_1037 = String.fromCharCode(input_1037);
//   let output_1037 = asciiChar_1037;
//   console.log(1037, "" + output_1037);
// } else {
//   console.log(1037, "" + "유효한 범위의 정수(0 ~ 255)를 입력하세요.");
// }

// // TODO : 1038 : 정수 2개를 입력받아 합을 출력하는 프로그램을 작성해보자.
// // TODO :        (단, 입력되는 정수는 -1073741824 ~ 1073741824 이다.)
// // TODO :        2개의 정수가 공백으로 구분되어 입력된다.
// // 입력 : 123 -123
// // 출력 : 0
// const min_value_1038 = -1073741824;
// const max_value_1038 = 1073741824;

// let input_1038 = prompt(" 1038, 123 -123 입력 ").split(" ");

// let input_1038_1 = Number(input_1038[0]);
// let input_1038_2 = Number(input_1038[1]);

// if (
//   isNaN(input_1038_1) ||
//   isNaN(input_1038_2) ||
//   input_1038_1 < min_value_1038 ||
//   input_1038_1 > max_value_1038 ||
//   input_1038_2 < min_value_1038 ||
//   input_1038_2 > max_value_1038
// ) {
//   console.log(
//     1037,
//     "" + "유효한 범위의 (-1073741824 ~ 1073741824) 를 입력하세요."
//   );
// } else {
//   let input_1038_sum = input_1038_1 + input_1038_2;
//   let = output_1038 = input_1038_sum;

//   console.log(1038, "" + output_1038);
// }

// // TODO : 1039 : 정수 2개를 입력받아 합을 출력하는 프로그램을 작성해보자.
// // TODO :        단, 입력되는 정수는 -2147483648 ~ +2147483648 이다.
// // TODO :        2개의 정수가 공백으로 구분되어 입력된다.
// // 입력 : 2147483648 2147483648
// // 출력 : 4294967296

// const min_value_1039 = -2147483648;
// const max_value_1039 = 2147483648;

// let input_1039 = prompt(" 1039, 2147483648 2147483648 입력 ").split(" ");

// let input_1039_1 = Number(input_1039[0]);
// let input_1039_2 = Number(input_1039[1]);

// if (
//   isNaN(input_1039_1) ||
//   isNaN(input_1039_2) ||
//   input_1039_1 < min_value_1039 ||
//   input_1039_1 > max_value_1039 ||
//   input_1039_2 < min_value_1039 ||
//   input_1039_2 > max_value_1039
// ) {
//   console.log(
//     1039,
//     "" + "유효한 범위의 (-2147483648 ~ +2147483648) 를 입력하세요."
//   );
// } else {
//   let input_1039_sum = input_1039_1 + input_1039_2;
//   let = output_1039 = input_1039_sum;

//   console.log(1039, "" + output_1039);
// }

// // TODO : 1040 : 입력된 정수의 부호를 바꿔 출력해보자.
// // TODO :        단, -2147483647 ~ +2147483647 범위의 정수가 입력된다.
// // TODO :        부호를 바꿔 출력한다.
// // 입력 : -1
// // 출력 : 1
// const min_value_1040 = -2147483647;
// const max_value_1040 = 2147483647;

// let input_1040 = Number(prompt(" 1040, -1 입력 "));

// if (
//   isNaN(input_1040) ||
//   input_1040 < min_value_1040 ||
//   input_1040 > max_value_1040
// ) {
//   console.log(
//     1040,
//     "" + "유효한 범위의 (-2147483647 ~ +2147483647) 를 입력하세요."
//   );
// } else {
//   let output_1040 = -input_1040;
//   console.log(1040, "" + output_1040);
// }

// // TODO : 1041 : 영문자 1개를 입력받아 그 다음 문자를 출력해보자.
// // TODO :        영문자 'A'의 다음 문자는 'B'이고, 영문자 '0'의 다음 문자는 '1'이다..
// // TODO :        숫자는 수를 표현하는 문자로서 '0' 은 문자 그 자체를 의미하고, 0은 값을 의미한다.
// // 입력 : a
// // 출력 : b

// let input_1041 = prompt(" 1041, a 입력 ");

// let input_1041_Char = input_1041.charAt(0).toLowerCase();

// if (input_1041_Char >= "a" && input_1041_Char < "z") {
//   let output_1041_Char = String.fromCharCode(input_1041_Char.charCodeAt(0) + 1);
//   console.log(1041, "" + "다음 문자: " + output_1041_Char);
// } else if (!isNaN(input_1041)) {
//   let input_1041_num = parseInt(input_1041);
//   let output_1041_num = input_1041_num + 1;
//   console.log(1041, "" + "다음 문자: " + output_1041_num);
// } else {
//   console.log(1041, "" + "유효한 범위의 (영문 또는 숫자)를 입력하세요");
// }

// // TODO : 1042 : 정수 2개(a, b) 를 입력받아 a를 b로 나눈 몫을 출력해보자.
// // TODO :        단, -2147483648 <= a <= b <= +2147483647, b는 0이 아니다.
// // TODO :        숫자는 수를 표현하는 문자로서 '0' 은 문자 그 자체를 의미하고, 0은 값을 의미한다.
// // 입력 : 1 3
// // 출력 : 0
// const min_value_1042 = -2147483648;
// const max_value_1042 = 2147483647;

// let input_1042 = prompt(" 1042, 1 3 입력 ").split(" ");

// let input_1042_a = Number(input_1042[0]);
// let input_1042_b = Number(input_1042[1]);

// if (
//   input_1042_b !== 0 &&
//   input_1042_a >= min_value_1042 &&
//   input_1042_a <= input_1042_b &&
//   input_1042_b <= max_value_1042
// ) {
//   let input_1042_result = Math.floor(input_1042_a / input_1042_b);
//   let output_1042 = -input_1042_result;
//   console.log(1042, "" + output_1042);
// } else {
//   console.log(
//     1042,
//     "" + "유효한 범위의 (-2147483648 ~ +2147483647)를 입력하세요."
//   );
// }

// // TODO : 1043 : 정수 2개(a, b) 를 입력받아 a를 b로 나눈 나머지를 출력해보자.
// // TODO :        단, 0 <= a, b <= +2147483647, b는 0이 아니다.
// // 입력 : 10 3
// // 출력 : 1

// const min_value_1043 = 0;
// const max_value_1043 = 2147483647;

// let input_1043 = prompt(" 1043, 10 3 입력 ").split(" ");

// let input_1043_a = Number(input_1043[0]);
// let input_1043_b = Number(input_1043[1]);

// if (
//   input_1043_a >= min_value_1043 &&
//   input_1043_a <= max_value_1043 &&
//   input_1043_b !== min_value_1043
// ) {
//   let input_1043_result = Math.floor(input_1043_a % input_1043_b);
//   let output_1043 = input_1043_result;
//   console.log(1043, "" + output_1043);
// } else {
//   console.log(1043, "" + "유효한 범위의 (2147483647)를 입력하세요.");
// }

// // TODO : 1044 : 정수를 1개 입력받아 1만큼 더해 출력해보자.
// // TODO :        단, -2147483648 ~ +2147483647 의 범위로 입력된다.
// // 입력 : 2147483647
// // 출력 : 2147483648

// const min_value_1044 = -2147483648;
// const max_value_1044 = 2147483647;

// let input_1044 = Number(prompt(" 1044, 2147483647 입력 "));

// if (input_1044 >= min_value_1044 && input_1044 <= max_value_1044) {
//   let output_1044 = ++input_1044;
//   console.log(1044, "" + output_1044);
// } else {
//   console.log(
//     1044,
//     "" + "유효한 범위의 (-2147483648 ~ 2147483647)를 입력하세요."
//   );
// }

// // TODO : 1045 : 정수 2개(a, b)를 입력받아 합, 차, 곱, 몫, 나머지, 나눈 값을 자동으로 계산해보자.
// // TODO :        단 0 <= a, b <= 2147483647, b는 0이 아니다.
// // TODO :        정수 2개가 공백을 두고 입력된다.
// // TODO :        첫 줄에 합
// // TODO :        둘째 줄에 차,
// // TODO :        셋째 줄에 곱,
// // TODO :        넷째 줄에 몫,
// // TODO :        다섯째 줄에 나머지,
// // TODO :        여섯째 줄에 나눈 값을 순서대로 출력한다.
// // TODO :        (실수, 소수점 이하 셋째 자리에서 반올림해 둘째 자리까지 출력)
// // 입력 : 10 3
// // 출력 : 13
// //      : 7
// //      :30
// //      :3
// //      :1
// //      :3.33

// const min_value_1045 = 0;
// const max_value_1045 = 2147483647;

// let input_1045 = prompt(" 1045, 10 3 입력 ").split(" ");

// let input_1045_a = Number(input_1045[0]);
// let input_1045_b = Number(input_1045[1]);

// if (
//   !isNaN(input_1045_a) &&
//   !isNaN(input_1045_b) &&
//   input_1045_b !== min_value_1045 &&
//   input_1045_a > min_value_1045 &&
//   input_1045_b > min_value_1045 &&
//   input_1045_b < max_value_1045
// ) {
//   let output_1045_result_1 = input_1045_a + input_1045_b;
//   let output_1045_result_2 = input_1045_a - input_1045_b;
//   let output_1045_result_3 = input_1045_a * input_1045_b;
//   let output_1045_result_4 = Math.floor(input_1045_a / input_1045_b);
//   let output_1045_result_5 = input_1045_a % input_1045_b;
//   let output_1045_result_6 = (input_1045_a / input_1045_b).toFixed(2);

// console.log(
//   1045,
//   "" +
//     output_1045_result_1 +
//     "\n" +
//     output_1045_result_2 +
//     "\n" +
//     output_1045_result_3 +
//     "\n" +
//     output_1045_result_4 +
//     "\n" +
//     output_1045_result_5 +
//     "\n" +
//     output_1045_result_6
// );
// } else {
//   console.log(1045, "" + "유효한 범위를 입력하세요.");
// }

// // TODO : 1046 : 정수 3개를 입력받아 합과 평균을 출력해보자.
// // TODO :        단, -2147483648 ~ +2147483647
// // TODO :        합과 평균을 줄을 바꿔 출력한다.
// // TODO :        평균은 소수점 이하 둘째 자리에서 반올림해서 소수점 이하 첫째 자리까지 출력한다.
// // 입력 : 1 2 3
// // 출력 : 6
// //      : 2.0

// const min_value_1046 = -2147483648;
// const max_value_1046 = 2147483647;

// let input_1046 = prompt(" 1046, 1 2 3 입력").split(" ");

// let input_1046_num_1 = Number(input_1046[0]);
// let input_1046_num_2 = Number(input_1046[1]);
// let input_1046_num_3 = Number(input_1046[2]);

// if (
//   !isNaN(input_1046_num_1) &&
//   !isNaN(input_1046_num_2) &&
//   !isNaN(input_1046_num_3) &&
//   input_1046_num_1 >= min_value_1046 &&
//   input_1046_num_1 <= max_value_1046 &&
//   input_1046_num_2 >= min_value_1046 &&
//   input_1046_num_2 <= max_value_1046 &&
//   input_1046_num_3 >= min_value_1046 &&
//   input_1046_num_3 <= max_value_1046
// ) {
//   let output_1046_result_1 =
//     input_1046_num_1 + input_1046_num_2 + input_1046_num_3;
//   let output_1046_result_2 = (output_1046_result_1 / 3).toFixed(1);
//   console.log(1046, +output_1046_result_1 + "\n" + output_1046_result_2);
// } else {
//   console.log(
//     1046,
//     "" + "유효한 범위의 (-2147483648 ~ 2147483647)를 입력하세요."
//   );
// }

// // TODO : 1047 : 정수 1개를 입력받아 2배 곱해 출력해보자.
// // TODO :        정수 한 개가 입력된다.
// // TODO :        단, -1073741824 ~ +1073741823
// // TODO :        2배 곱한 정수를 출력한다.
// // 입력 : 1024
// // 출력 : 2048

// const min_value_1047 = -1073741824;
// const max_value_1047 = 1073741823;

// let input_1047 = Number(prompt(" 1047, 1024 입력"));

// if (
//   !isNaN(input_1047) &&
//   input_1047 >= min_value_1047 &&
//   input_1047 <= max_value_1047
// ) {
//   let output_1047 = input_1047 << 1;
//   console.log(1047, "" + output_1047);
// } else {
//   console.log(
//     1047,
//     "" + "유효한 범위의 (-2147483648 ~ 2147483647)를 입력하세요."
//   );
// }

// // TODO : 1048 : 정수 2개(a, b)를 입력받아 a를 2b배 곱한 값으로 출력해보자.
// // TODO :        정수 2개가 공백을 두고 입력된다.
// // TODO :        0 <= a, b <= 10
// // TODO :        a 를 2b배 만큼 곱한 값을 출력한다.
// // 입력 : 1 3
// // 출력 : 8

// const min_value_1048 = 0;
// const max_value_1048 = 10;

// let input_1048 = prompt(" 1048, 1 3 입력").split(" ");

// let input_1048_a = Number(input_1048[0]);
// let input_1048_b = Number(input_1048[1]);

// if (
//   !isNaN(input_1048_a) &&
//   !isNaN(input_1048_b) &&
//   input_1048_a >= min_value_1048 &&
//   input_1048_a <= max_value_1048 &&
//   input_1048_b >= min_value_1048 &&
//   input_1048_b <= max_value_1048
// ) {
//   let output_1048 = input_1048_a << input_1048_b;
//   console.log(1048, "" + output_1048);
// } else {
//   console.log(1048, "" + "유효한 범위의 (0 ~ 10)를 입력하세요.");
// }

// // TODO : 1049 : 두 정수(a, b)를 입력받아
// // TODO :        a가 b보다 크면 1을, a가 b보다 작거나 같으면 0을 출력하는 프로그램을 작성해보자.
// // TODO :        두 정수 a, b가 공백을 두고 입력된다.
// // TODO :        -2147483648 <= a, b <= +2147483647
// // TODO :        a가 b보다 큰 경우 1을, 그렇지 않은 경우 0을 출력한다.
// // 입력 : 9 1
// // 출력 : 1

// const min_value_1049 = -2147483648;
// const max_value_1049 = 2147483647;

// let input_1049 = prompt("1049, 9 1 입력").split(" ");

// if (input_1049.length === 2) {
//   let input_1049_a = Number(input_1049[0]);
//   let input_1049_b = Number(input_1049[1]);
//   if (
//     !isNaN(input_1049_a) &&
//     !isNaN(input_1049_b) &&
//     input_1049_a >= min_value_1049 &&
//     input_1049_a <= max_value_1049 &&
//     input_1049_b >= min_value_1049 &&
//     input_1049_b <= max_value_1049
//   ) {
//     if (input_1049_a !== input_1049_b) {
//       let output_1049 = input_1049_a > input_1049_b ? 1 : 0;
//       console.log(1049, "" + output_1049);
//     } else {
//       console.log(1049, "두 숫자가 같으므로 계산할 수 없습니다.");
//     }
//   } else {
//     console.log(
//       1049,
//       "" +
//         "유효한 범위 안에 숫자로 (-2147483648 ~ 2147483647) 정수 두 숫자가 겹치지 않게 입력하세요."
//     );
//   }
// } else {
//   console.log(
//     1049,
//     "유효한 범위 안에 숫자로 (-2147483648 ~ 2147483647) 정수 두 숫자가 겹치지 않게 입력하세요."
//   );
// }

// // TODO : 1050 : 두 정수(a, b)를 입력받아
// // TODO :        a와 b가 같으면 1을, 같지 않으면 0을 출력하는 프로그램을 작성해보자.
// // TODO :        두 정수 a, b가 공백을 두고 입력된다.
// // TODO :        -2147483648 <= a, b <= +2147483647
// // 입력 : 0 0
// // 출력 : 1

// const min_value_1050 = -2147483648;
// const max_value_1050 = 2147483647;

// let input_1050 = prompt("1050, 0 0 입력").split(" ");

// if (input_1050.length === 2) {
//   let input_1050_a = Number(input_1050[0]);
//   let input_1050_b = Number(input_1050[1]);
//   if (
//     !isNaN(input_1050_a) &&
//     !isNaN(input_1050_b) &&
//     input_1050_a >= min_value_1050 &&
//     input_1050_a <= max_value_1050 &&
//     input_1050_b >= min_value_1050 &&
//     input_1050_b <= max_value_1050
//   ) {
//     let output_1050 = input_1050_a === input_1050_b ? 1 : 0;
//     console.log(1050, "" + output_1050);
//   } else {
//     console.log(
//       1050,
//       "유효한 범위 내의 (-2147483648 ~ 2147483647) 정수 두 개 를 입력하세요."
//     );
//   }
// } else {
// }

// // TODO : 1051 : 두 정수(a, b)를 입력받아
// // TODO :        b가 a보다 크거나 같으면 1을, 그렇지 않으면 0을 출력하는 프로그램을 작성해보자.
// // TODO :        두 정수 a, b가 공백을 두고 입력된다.
// // TODO :        -2147483647 <= a, b <= +2147483648
// // 입력 : 0 -1
// // 출력 : 0

// const min_value_1051 = -2147483647;
// const max_value_1051 = 2147483647;

// let input_1051 = prompt("1051, 0 -1 입력").split(" ");

// if (input_1051.length === 2) {
//   let input_1051_a = Number(input_1051[0]);
//   let input_1051_b = Number(input_1051[1]);
//   if (
//     !isNaN(input_1051_a) &&
//     !isNaN(input_1051_b) &&
//     input_1051_a >= min_value_1051 &&
//     input_1051_a <= max_value_1051 &&
//     input_1051_b >= min_value_1051 &&
//     input_1051_b <= max_value_1051
//   ) {
//     let output_1051 = input_1051_a <= input_1051_b ? 1 : 0;
//     console.log(1051, "" + output_1051);
//   } else {
//     console.log(
//       1051,
//       "유효한 범위 내의 (-2147483647 ~ 2147483647) 정수 두 개 를 입력하세요."
//     );
//   }
// } else {
// }
