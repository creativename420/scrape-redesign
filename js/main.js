function checkCookie() {
  let back = getCookie("fetchUservisit");
  if (back != "") {
   alert("Welcome again " + bacl);
  } else {
    back = prompt("Please enter your name:", "");
    if (back != "" && back != null) {
      setCookie("username", back, 365);
    }
  }
}