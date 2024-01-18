let hr = document.querySelector("#hr")
let mn = document.querySelector("#mn")
let se = document.querySelector("#se")

setInterval(()=>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    se.style.transform = `rotateZ(${ss}deg)`;
})