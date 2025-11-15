const User = require("../models/user");


// Render Signup From
module.exports.renderSignupForm=(req, res) => {
  res.render("users/signup.ejs");
};

// Signup new user
module.exports.signup =  async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registerUser = await User.register(newUser, password);
    console.log(registerUser);
    req.logIn(registerUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", "A user with the given username is already registered");
    res.redirect("/signup");
  }
}

// Render Login Form
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login");
};

// login User
module.exports.login = async (req, res) => {
  req.flash("success", "Welcome  back  to  Wanderlust!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};
  

// Logout User
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
};
