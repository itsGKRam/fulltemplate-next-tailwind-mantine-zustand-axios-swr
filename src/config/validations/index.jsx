// examples

export const ValidateEmail = (value) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
        ? true
        : false;
};

export const ValidateIndianMobileNumber = (value) => {
    return /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/gm.test(value)
        ? true
        : false;
};

export const ValidateOTP = (value, digits = 6) => {
    return new RegExp(`^[0-9]{${digits}}$`).test(value) ? true : false;
};
