const login = ( password) => {
    const correctpassward = ProcessingInstruction.env.APP_PASSWARD;
    cconsole.log("recivedpassword:", correctpassward
    if (password === correctpassward) {
        return "Login successful!";
    } else {
        return "Login failed: Incorrect password.";
    }
};

login("123456");

module.exports = { login };