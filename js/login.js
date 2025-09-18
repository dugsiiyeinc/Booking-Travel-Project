
const formTitle=document.querySelector('.form-title')

const formUser=document.querySelector('.form-user')

const BtnLogin=document.querySelector('.Btn-Login')

const singUpRegister=document.querySelector(".singUp-Register")

const password=document.querySelector(".Password")

const confirmPassword=document.querySelector('.Confirm-Password')
const username=document.querySelector('.username')
const email=document.querySelector('.email')
const Registered=document.querySelector('#Registered')
const SelectedSystem=document.querySelector("#Selected-System")





window.addEventListener("DOMContentLoaded", () => {
     const allDataUser = JSON.parse(localStorage.getItem("userData")) || [];
  const userDashboard = document.querySelector(".dashboard-User");
  const userAvatar = document.querySelector(".user-avatar");

  if (allDataUser.length > 0) {
    const username = allDataUser[0].username || "Admin";
    userDashboard.textContent = username;

    // Avatar ka samee initials
    userAvatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      username
    )}&background=3498db&color=fff`;
  } else {
    userDashboard.textContent = "Guest";
    userAvatar.src =
      "https://ui-avatars.com/api/?name=Guest&background=95a5a6&color=fff";
  }
});





// window.addEventListener('DOMContentLoaded',()=>{
//     const userSystem=JSON.parse(localStorage.getItem("onine-User"))||[]

//     const nameUser=document.querySelector('.name-user')

    
//     console.log(" waa",userSystem)

//   if (userSystem.length > 0) {   // arrayga datada ayaan hubin ku samaynay .... oo waxaan hubinaynay in ay data ku jidho localka...
//     nameUser.textContent=userSystem[0].username  // hadii ay data array ah jirto nasii......
//   }
//   else{
//     nameUser.textContent="guest"  // hadaysan jirina guest Noso bandhig.....
//   }

// })






document.body.addEventListener('click',(event)=>{
    if(event.target.id !="Registered") return
     switchesForm()
})


let login=true

function switchesForm(){
login=!login // login hadii ay noqoto ama lamid nqoto false shaqadaa qabo

if (!login) {    // login hadii ay false noqoto waxaa uu userku aadaya singup oo waa isa soo diwangilanaaya...
  BtnLogin.textContent="SingUp"
  formTitle.textContent="SingUp"
  username.style.display="block"
  confirmPassword.style.display="block"
    singUpRegister.innerHTML=`<p> alredy have acount <a href="#" id="Registered">LogIn</a></p>`
}
else{
    BtnLogin.textContent="LogIn"
    formTitle.textContent="Login"
    username.style.display="none"
    confirmPassword.style.display="none"
    username.value=""
    email.value=""
    password.value=""
    confirmPassword.value=""
    singUpRegister.innerHTML=`<p> alredy have acount <a href="#" id="Registered">Register</a></p>`
}
}

formUser.addEventListener("submit",(e)=>{
    e.preventDefault()
    const user ={
      userIds:Date.now(),
        username: login?undefined: username.value,
        userEmail:email.value,
        userPassword:password.value,
        userConfirmPassword:login?undefined:confirmPassword.value,
    
    }
  


  if (login) { 
    // Hel dhammaan users ee localStorage
    const allDataUser = JSON.parse(localStorage.getItem("userData")) || [];

    // Raadi user-ka email iyo password
    const LogInUser = allDataUser.find(
        (user) => user.userEmail === email.value && user.userPassword === password.value
    );

    if (LogInUser) {   
        // Hubi in user-ka yahay admin
        if (LogInUser.userSelectSystem === "admin") {
            // Save user online
            const allLoginUser = JSON.parse(localStorage.getItem("online-User")) || [];
            allLoginUser.push(LogInUser);
            localStorage.setItem("online-User", JSON.stringify(allLoginUser));

            // Redirect to admin dashboard
        } else {
            // Haddii user caadi ah isku dayo login admin
        window.location.href = "../html/DashboardAdmin.html";
            return;
        }
    } else {
        // Haddii credentials khaldan
        alert("Invalid Credentials");
        return;
    }
}


    else{
    
 const allDataUser=JSON.parse(localStorage.getItem("userData"))||[]
 console.log("alldara",allDataUser)
   
 const stopUser=allDataUser.find((user)=> user.username === username.value  && user.userEmail === email.value) 
  if (stopUser) { 
    alert(`user ${stopUser.username} already exists`)
    return
  }

      allDataUser.push(user)
      localStorage.setItem("userData",JSON.stringify(allDataUser))  
      alert("Register Successfully")
     switchesForm()

     if (confirmPassword.value.trim() !== password.value) {
        alert("Waa Khaldan yahay Passwordkaaga")
        return
     }
   l
    }



})





  