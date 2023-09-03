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

//     console.log("1023, 정수 부분:", output_int_1023);
//     console.log("1023, 실수 부분:", output_flo_1023.toFixed(6)); // 최대 6자리까지 출력

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

// // TODO: Number -> BigInt(n) / toString();
// // let input_1030 = BigInt(prompt(" 1030, -2147483649 입력 "));
// // // Number 많은 숫자 데이터를 담기 위해 -> BigInt / 숫자 범위 뒤 n을 사용함

// // if (!isNaN(input_1030) && input_1030 >= -ㄹ9223372036854775808n && input_1030 <= 9223372036854775807n) {
// //     let output_1030 = input_1030
// //     console.log(1030, "" + output_1030.toString());
// // } else {
// //     console.log(1030, "" + "-9223372036854775808 ~ +9223372036854775807 만 입력 가능합니다.");
// // };