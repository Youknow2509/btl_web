const form = document.getElementById('f1');
const btn_submit = document.getElementById('btn-submit');

const getName = document.getElementById('name');
const getMail = document.getElementById('mail');
const getPhone = document.getElementById('phone');
const getPassWord = document.getElementById('password');
const getPassWordR = document.getElementById('password-r');

const checkName = /^[A-Za-zÀ-Ỹà-ỹ ]{2,20}$/;
const checkMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const checkPhone = /^(\+)*[0-9]+$/;
const checkPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

btn_submit.onclick = () => {
    
};

