let email=document.querySelector('#emaillog');
let pwd=document.querySelector('#pwdlog');
let btnsubmit=document.querySelector('#btnlogin');


btnsubmit.addEventListener('click',(e)=>{
  e.preventDefault();

  let email2=email.value;
  let pwd2=pwd.value;

  let obj={
    email:email2,
    pwd:pwd2
  }

  axios.post("http://localhost:8400/signin", obj)
  .then(result=>{
    if(result.data.msg=='login successful'){
      localStorage.setItem('token',result.data.token);
      window.location.replace('../homepage/home.html');
    }
  })
  .catch(err=>{
  console.log(err);
  })


})



