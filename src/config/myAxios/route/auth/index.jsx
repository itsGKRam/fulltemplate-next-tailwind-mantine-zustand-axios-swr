const auth = {
    init(base) {
        return {
            getTokens(PhoneNumber) {
                return base.get('/auth/user/tokens', PhoneNumber);
            },
        };
    },
};

export default auth;
