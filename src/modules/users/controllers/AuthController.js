const UsersRepository = require('../repositories/UsersRepository');
const BcryptProvider = require('../providers/HashProvider/implementations/Bcrypt');
const JwtToken = require('../providers/TokenProvider/implementations/jwtToken');
const SignInService = require('../service/SignInService');

class AuthController {
  async create(req, res) {
    const { email, password } = req.body;

    if (!email) return res.json({ message: 'email is required' });
    if (!password) return res.json({ message: 'password is required' });

    const usersRepository = new UsersRepository();
    const bcryptProvider = new BcryptProvider();
    const jwtToken = new JwtToken();

    const signInService = new SignInService(
      usersRepository,
      bcryptProvider,
      jwtToken,
    );

    const user = await signInService.execute({
      email,
      password,
    });

    return res.json(user);
  }
}

module.exports = new AuthController();
