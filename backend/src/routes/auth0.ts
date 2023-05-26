const ManagementClient = require('auth0').ManagementClient;

const auth0 = new ManagementClient({
  domain: 'dev-czl7mhj8tf3voptc.us.auth0.com',
  clientId: 'iFEdZXCsmJxf9wlYANpqwefMyyiVsCVk',
  clientSecret: '_FNlDY9Wl4tA4qRcvejMQnL9t_8g4QBk3RxpjPpUiW_8hHLQV6_jgzW0mQs__LQk',
});

async function handleSignUp(req: any, res: any) {
  console.log('heylooo')
  const { email, password } = req.body; // Assuming you're using a form with email and password fields
  console.log(email, password)
  try {
    const user = await auth0.createUser({
      connection: 'Username-Password-Authentication', // The name of your Auth0 database connection
      email,
      password,
    });
    console.log(user)

    // Handle successful user creation
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    // Handle error
    console.log(error)
    res.status(500).json({ error: 'Failed to create user' });
  }
}

export default handleSignUp;