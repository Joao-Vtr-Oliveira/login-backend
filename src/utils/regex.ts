// RegEx info:
// Password: 8 caracteres, incluindo pelo menos uma letra minúscula, uma letra maiúscula e um dígito.
// Email: Caracteres + @ + caracteres + . + caracteres

const regexInfo = {
	email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
};

export default regexInfo;
