let allPath = document.querySelectorAll(".map path");
let currentPlace = document.querySelector(".currentPlace");
let locationInfo = document.querySelector(".location-info");

document.querySelector("[title = 'Yangon']").classList.add("active");
currentPlace.innerText = "Yangon";
locationInfo.innerText = "ရန်ကုန်မြို့ သည် မြန်မာနိုင်ငံ၏ ယခင်က မြို့တော်ဖြစ်ပြီး ရန်ကုန်တိုင်း၏ မြို့တော်လည်းဖြစ်သည်။ လူဦးရေ ၇ သန်းကျော်ရှိသော ရန်ကုန်မြို့သည် မြန်မာနိုင်ငံ ၏ အကြီးမားဆုံး မြို့တော်နှင့် အရေးအကြီးဆုံးသော ကူးသန်းရောင်းဝယ်ရေး အချက်အချာအဖြစ် ဆက်လက် တည်ရှိနေသည်။"

allPath.forEach(currentPath => {
    currentPath.addEventListener("mouseover", _ => {
        allPath.forEach(c => c.classList.remove("active"));
        currentPath.classList.add("active");
        currentPlace.innerText = currentPath.getAttribute("title");
        locationInfo.innerText = currentPath.getAttribute("location-info");

    })
})

