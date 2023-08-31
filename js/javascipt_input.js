// <!-- TODO: 1110 ~ 1123 -->

// 1110 
// 입력받은 정수를 그대로 출력한다.
// 입력 5
// 출력 5
let input_1110 = Number(prompt("정수 5 입력"))


// <!-- TODO: 1125 -->
// <!-- TODO: 1131 ~ 1133 -->
// <!-- TODO: 1135 ~ 1140 -->
// <!-- TODO: 1143 ~ 1144 -->
// <!-- TODO: 1147 ~ 1150 -->



// 2진수(binary): 0b (숫자 0과 알파벳 b)
// 8진수(octal):   0o (숫자 0과 알파벳 o)
// 16진수(hexadeciaml): 0x (숫자 0과 알파벳 x)
// .toString
// .toLowerCase 입력된 값 -> 소문자로 변경 : .toLowerCase() 사용 할 필요없음.

// TODO 1031
// 10진수를 입력받아 8진수(octal)로 출력해보자.
// 입력 : 10
// 출력 : 12

// let input_1031 = Number(prompt("10 입력"));
let input_1031 = 10;
let output_1031 = input_1031.toString(8);

console.log(output_1031);

// TODO 1032
// 10진 정수 입력받아 16진수로 출력하기
// 입력 : 255
// 출력 : ff

// let input_1032 = Number(prompt("255 입력"));
// let input_1032 = 255;
let output_1032 = input_1032.toString(16);

console.log(output_1032);

// TODO 1033
// 10진 정수 입력받아 16진수로 출력하기
// 입력 : 255
// 출력 : ff