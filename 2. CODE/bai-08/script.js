// 2.1
  // console.log(window);

  // const infoUser = {
  //   name: "Lê Văn A",
  //   render: () => {
  //     console.log("OK");
  //   }
  // };
  // infoUser.render();

// 2.2
  // console.log(window.innerWidth);
  // console.log(window.innerHeight);




// 2.3
  // const openTab = () => {
  //   window.open(
  //     "https://28tech.com.vn/",
  //     "_blank",
  //     "width=1200, height=600, left=100, top=50"
  //   );
  // };


// 2.4
  // var tab;
  // const openTab = () => {
  //   tab = window.open(
  //     "https://28tech.com.vn/",
  //     "_blank",
  //     "width=1200, height=600, left=100, top=50"
  //   );
  // };

  // const closeTab = () => {
  //   tab.close();
  // }


// 3
  // console.log(window);
  // console.log(screen.width);
  // console.log(screen.height);



// 4.1
  // console.log(location);


// 4.2
  // const reloadPage = () => {
  //   location.reload();
  // }

  // setInterval(reloadPage, 5000);


// 4.3
  // http://127.0.0.1:5500/bai-08/index.html?search=test123#abc
  // console.log(location);



// 5.1
  // console.log(history);

  // const goBack =() => {
  //   history.back();
  // }


// 6
  // console.log(navigator);

  // setInterval(() => {
  //   console.log(navigator.onLine);
  // }, 1000);


// 7, 8
  // console.log(window);


// 9
  // Tạo cookie
    // function setCookie(cname, cvalue, exdays) {
    //   var d = new Date();
    //   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //   var expires = "expires=" + d.toUTCString();
    //   document.cookie = cname + "=" + cvalue + "; " + expires;
    // }
    

    // const fullName = prompt("Nhập tên của bạn");
    // console.log(fullName);
    // setCookie("fullName", fullName, 3);

    // // document.cookie = `fullName=${fullName}`;
    // document.cookie = `fullName=${fullName}; expires=Thu, 01 Jan 2024 00:00:00 UTC`;

  
  // Lấy cookie
    // function getCookie(cname) {
    //   var name = cname + "=";
    //   var ca = document.cookie.split(';');
    //   for (var i = 0; i < ca.length; i++) {
    //     var c = ca[i];
    //     while (c.charAt(0) == ' ') {
    //       c = c.substring(1);
    //     }
    //     if (c.indexOf(name) == 0) {
    //       return c.substring(name.length, c.length);
    //     }
    //   }
    //   return "";
    // }

    // const fullName = getCookie("phone");
    // console.log(fullName);


  // Xóa cookie
    // function deleteCookie(cname) {
    //   document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    // }
    
    // deleteCookie("phone");