// <!-- TODO:  1001 ~ 1008 -->
// <!-- TODO:  1010 ~ 1015 -->
// <!-- TODO:  1017 ~ 1072 -->
// <!-- TODO:  1074 ~ 1095 -->

// 2진수(binary): 0b (숫자 0과 알파벳 b)
// 8진수(octal):   0o (숫자 0과 알파벳 o)
// 16진수(hexadeciaml): 0x (숫자 0과 알파벳 x)
// .toString
// .toLowerCase 입력된 값 -> 소문자로 변경 : .toLowerCase() 사용 할 필요없음.


// TODO : 1001 : Hello
// 입력 : 입력 없음
// 출력 : Hello

let output_1001 = "Hello";

console.log(1001, output_1001);


// TODO : 1002 : Hello World 를 출력한다.
// 입력 : 입력 없음
// 출력 : Hello World

let output_1002_1 = "hello";
let output_1002_2 = "world";
let output_1002 = output_1002_1 + " " + output_1002_2;

console.log(1002, output_1002);

// TODO : 1003 : Hello World 를 두 줄에 걸쳐 출력한다.
// 입력 : 입력 없음
// 출력 : Hello
//        World

let output_1003_1 = "hello";
let output_1003_2 = "world";
let output_1003 = output_1003_1 + "\n" + output_1003_2;

console.log(1003, "\n" + output_1003);

// TODO : 1004 : 'Hello' 출력한다.
// 입력 : 입력 없음
// 출력 : 'Hello'

let output_1004 = "'Hello'";

console.log(1004, output_1004);


// TODO : 1005 : "Hello World" (단, 큰따옴표도 함께 출력한다.)
// 입력 : 입력 없음
// 출력 : "Hello World"

let output_1005 = '"Hello"';

console.log(1005, output_1005);

// TODO : 1006 : "!@#$%^&*()" 를 출력한다.
// 입력 : 입력 없음
// 출력 : "!@#$%^&*()"

let output_1006 = '"!@#$%^&*()"';

console.log(1006, output_1006);

// TODO : 1007 : "C:\Download\hello.cpp" 를 출력한다.
// 입력 : 입력 없음
// 출력 : "C:\Download\hello.cpp"

let output_1007 = '"C:\\Download\\hello.cpp"';

console.log(1007, output_1007);

// TODO : 1008 : ┌┬┐ ├┼┤ └┴┘ 를 유니코드를 이용하여 출력한다.
// 입력 : 입력 없음
// 출력 : ┌┬┐
//        ├┼┤
//        └┴┘

let output_1008_1 = "\u250C\u252C\u2510";
let output_1008_2 = "\u251C\u253C\u2524";
let output_1008_3 = "\u2514\u2534\u2518";

let output_1008 = output_1008_1 + "\n" + output_1008_2 + "\n" + output_1008_3;

console.log(1008, "\n" + output_1008);

// <!-- TODO:  1010 ~ 1015 -->
// TODO : 1010 : 입력된 정수를 그대로 출력한다.
// 입력 : 15
// 출력 : 15