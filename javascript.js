setInterval(() => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    a1.innerHTML = hh + " : " + mm + " : " + ss
  }, 1000)