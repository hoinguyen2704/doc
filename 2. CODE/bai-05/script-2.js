// 05. Một số hàm built-in

// alert("Xin chào các bạn!");

// var result = confirm("Bạn đã trên 18 tuổi?");
// console.log(result);

// var result = prompt("Nhập n");
// console.log(result);

// console.warn(result);
// console.error(result);

// setTimeout(function () {
//   console.log("A");
// }, 1000);

// setInterval(function () {
//   console.log("B");
// }, 1000);


// var b = setInterval(function () {
//   console.log("B");
// }, 1000);

// setTimeout(function() {
//   clearInterval(b);
// }, 5000);



// 06. Typeof

// var a = 10;
// var b = "Nội dung...";
// var c;
// var d = null;
// var e = true;

// console.log(typeof a); // number
// console.log(typeof b); // string
// console.log(typeof (a + b)); // string
// console.log(typeof c); // undefined
// console.log(typeof d); // object
// console.log(typeof e); // boolean
// console.log(typeof a == "number"); // true




// 7. Làm việc với String

// 7.1
// var fullName = `Le Van A`;
// console.log(fullName.length);


// 7.2. indexOf()
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.indexOf("Tôi")); // Trả về 10
// console.log(myString.indexOf("Hải")); // Trả về -1
// console.log(myString.indexOf("Nam")); // Trả về 18
// console.log(myString.indexOf("nam")); // Trả về -1
// console.log(myString.indexOf("Tôi", 11)); // Trả về 23


// 7.3
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.lastIndexOf("Tôi", 24)); // Trả về 23
// console.log(myString.lastIndexOf("Tôi", 22)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 10)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 9)); // Trả về -1


// 7.4
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.slice(10, 21)); // Tôi tên Nam
// console.log(myString.slice(0)); // Lấy toàn bộ chuỗi
// console.log(myString.slice(0, 1)); // X (Lấy ký tự đầu tiên của chuỗi)
// console.log(myString.slice(-1)); // . (Lấy ký tự cuối cùng của chuỗi)
// console.log(myString); // Vẫn giữ nguyên chuỗi gốc


// 7.5
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.replace("Tôi", "Mình"));
// console.log(myString.replace(/Tôi/g, "Mình")); // Regex là gì?


// 7.6
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());


// 7.7
// var myString = `  Xin chào! Tôi tên Nam.  Tôi năm   nay 18 tuổi.  `;
// console.log(myString);
// console.log(myString.trim());


// 7.8
// var myString = `Đặng Phương Nam`;
// console.log(myString.charAt()); // Lấy ký tự đầu tiên
// console.log(myString.charAt(0)); // Lấy ký tự đầu tiên
// console.log(myString.charAt(1)); // Lấy ký tự thứ 2
// console.log(myString.charAt(myString.length - 1)); // Lấy ký tự cuối cùng


// 7.9
// var myString = `HTML5, CSS3, Javascript`;
// console.log(myString.split()); // Cả string là 1 phần tử
// console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
// console.log(myString.split(", ")); // Mỗi từ là 1 phần tử
// console.log(myString.split(", ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử


// var myString = `HTML5,    CSS3,       Javascript`;
// myString = myString.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
// console.log(myString);
// console.log(myString.split(", ")); // Mỗi từ là 1 phần tử



// 8.1
// var a = 10;
// var b = "Test";
// var result = a / b;
// console.log(result); // Trả về NaN
// console.log(typeof result);
// if(typeof result == "number") {
//   console.log("Đây là số " + result);
// }
// console.log(isNaN(result)); //  Trả về true
// if(isNaN(result)) {
//   console.log("Số này bị lỗi!");
// } else {
//   console.log("Đây là số " + result);
// }


// 8.2
// var a = 10;
// var b = a.toString();
// var c = (10).toString();
// console.log(a); // Trả về số 10
// console.log(typeof a); // Trả về kiểu number
// console.log(b); // Trả về chuỗi 10
// console.log(typeof b); // Trả về kiểu string
// console.log(c); // Trả về chuỗi 10
// console.log(typeof c); // Trả về kiểu string


// 8.3
// var a = 12.3456;
// console.log(a.toFixed()); // Trả về 12
// console.log(a.toFixed(0)); // Trả về 12
// console.log(a.toFixed(1)); // Trả về 12.3
// console.log(a.toFixed(2)); // Trả về 12.35
// console.log(a.toFixed(3)); // Trả về 12.346


// 9.1
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.toString()); // Trả về: "HTML5,CSS3,Javascript"

// 9.2
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.join()); // Trả về: "HTML5,CSS3,Javascript"
// console.log(list.join(",")); // Trả về: "HTML5,CSS3,Javascript"
// console.log(list.join("")); // Trả về: "HTML5CSS3Javascript"
// console.log(list.join(", ")); // Trả về: "HTML5, CSS3, Javascript"
// console.log(list.join(" - ")); // Trả về: "HTML5 - CSS3 - Javascript"
// console.log(list.join(" test "));


// 9.3
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.pop()); // Trả về: "Javascript"
// console.log(list); // Trả về: ["HTML5", "CSS3"]


// 9.4
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.push("Bootstrap 4", "ReactJS")); // Trả về: 5
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]


// 9.5
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.shift()); // Trả về: "HTML5"
// console.log(list); // Trả về: ["CSS3", "Javascript"]


// 9.6
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.unshift("Bootstrap 4", "ReactJS")); // Trả về: 5
// console.log(list);
// // Trả về: ["Bootstrap 4", "ReactJS", "HTML5", "CSS3", "Javascript"]


// 9.7
// Ví dụ 1: Chèn phần tử mới vào mảng
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.splice(2, 0, "Bootstrap 4", "ReactJS")); // Trả về: []
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS", "Javascript"]

// Ví dụ 2: Xóa phần tử trong mảng
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.splice(1, 1)); // Trả về: ["CSS3"]
// console.log(list); // Trả về: ["HTML5", "Javascript"]

// Ví dụ 3: Xóa phần tử và chèn phần tử mới vào mảng
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.splice(2, 1, "Bootstrap 4", "ReactJS"));
// // Trả về: ["Javascript"]
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS"]


// 9.8
// var list = ["HTML5", "CSS3", "Javascript"];
// var list2 = ["Bootstrap 4", "ReactJS"];
// var list3 = list.concat(list2);
// console.log(list3);
// // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Javascript"]


// 9.9
var list = ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"];
console.log(list.slice(3)); // Trả về: ["Bootstrap 4", "ReactJS"]
console.log(list.slice(1, 3)); // Trả về: ["CSS3", "Javascript"]
console.log(list.slice(-3, -1)); // Trả về: ["Javascript", "Bootstrap 4"]
console.log(list);
// Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]