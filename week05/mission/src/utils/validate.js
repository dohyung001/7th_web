// 이메일 검사 패턴
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// 유효성 검사 함수
function validateUser(values) {
    const errors = {
        email: '',
        password: '',
    };

    if (!emailPattern.test(values.email)) {
        errors.email = "올바른 이메일 형식이 아닙니다. 다시 확인해주세요";
    }

    if (values.password.length < 8 || values.password.length > 16) {
        errors.password = "비밀번호는 8~16자 사이로 입력해주세요";
    }

    return errors;
}

// 로그인 유효성 검사 함수
function validateLogin(values) {
    return validateUser(values);
}

export { validateLogin };
