
/*const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,9}$/;

function validateUser(values){
    //{email:'aaa@naver.com', password:'1234'}
    errors = {
        email:'',
        password:'',

    }

    if(emailPattern.test(values.email) === false){
        errors.email = "올바른 이메일 형식이 아닙니다. 다시 확인해주세요"
    }

    if(values.password.length <8 || values.password.length > 16){
        errors.password = "비밀번호는 8~16자 사이로 입력해주세요"
    }
}

function validateLogin(values){
    validateUser(values);
}

export {validateLogin};
*/