function bchange(url,remove) {
  if (remove) {
    localStorage.setItem("burl","")
    location.reload()
  } else {
    localStorage.setItem("burl",url.value)
    back.src = localStorage.getItem("burl")
    back.style.display = "block"
  }
}

function bcchange(url,remove) {
  if (remove) {
    localStorage.setItem("bcurl","")
    location.reload()
  } else {
    localStorage.setItem("bcurl",url.value)
    document.body.style.backgroundColor = url.value
  }
}

if (localStorage.getItem("burl")) {
  document.getElementById("burl").value = localStorage.getItem("burl")
  back.src = localStorage.getItem("burl")
  back.style.display = "block"
}

if (localStorage.getItem("bcurl")) {
  document.getElementById("bcolor").value = localStorage.getItem("bcurl")
  document.body.style.backgroundColor = localStorage.getItem("bcurl")
}

switch(localStorage.getItem("theme")) {
    case "dark":
        document.documentElement.setAttribute("data-theme", "dark");
        tchanger.value = "dark" 
        break
    case "light":
        document.documentElement.setAttribute("data-theme", "light");
        tchanger.value = "light" 
        break
}



if (window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute("data-theme", "light");
    tchanger.value = "light" 
}

function tprev() {
  localStorage.setItem("theme",tchanger.value)
  document.documentElement.setAttribute("data-theme",tchanger.value)
}