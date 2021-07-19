light_toggle = false; //darkmode is enabled by default as it should be

function check_theme() {
  dark_or_not = getCookie('darkmode');
  if (dark_or_not == "yes") {
    console.log('darkmode cookie value detected as:', dark_or_not);
  }
  if (dark_or_not == "no") {
    toggle();
    theme_change();
    console.log('darkmode cookie value detected as:', dark_or_not);
  }
}

function toggle() {
  light_toggle = !light_toggle;
}

function theme_change() {
  if (light_toggle == false) {
    document.body.classList.toggle('lightmode');
    setCookie('darkmode', 'yes', 15); //set the cookie and make it expire in 15 days
  }
  if (light_toggle == true) {
    document.body.classList.toggle('lightmode');
    setCookie('darkmode', 'no', 15); //same as line 29, but with `darkmode = no` because lightmode is toggled
  }
}

function setCookie(cname, cvalue, exdays) { //takes the cookie name, cookie value, and number of days until it should expire as arguments
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + '; SameSite=Strict';
}

function getCookie(cname) { //takes the cookie name as an argument
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

check_theme();