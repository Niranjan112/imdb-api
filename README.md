Step to run the app:
1. MongoDB should be installed locally.
2. Make GET request to /login with below JSON request body
    {
        "userId": "niranjan112",
        "password": "Test@123"
    }
3. And Copy token value from response.
4. Now, to access any route api pass that token in Authorization header as bearer token.
