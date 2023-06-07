exports.showRegisterForm = (req, res) => {
  res.render('register', { pageTitle: 'Register' });
};

exports.registerUser = (req, res) => {
  const { name, email, password } = req.body;

  // Validation and error handling
  if (!name || !email || !password) {
    return res.status(400).send('Please provide all required fields.');
  }

  // Check if the user already exists in the database
  const existingUser = User.findByEmail(email);
  if (existingUser) {
    return res.status(409).send('User with this email already exists.');
  }

  // Create a new user and save it to the database
  const newUser = User.create(name, email, password);

  res.redirect('/login');
};
