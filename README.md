# Unhandled Promise Rejection in Express.js Route

This example demonstrates a common error in Express.js applications: neglecting to handle promise rejections in asynchronous route handlers.  Without proper error handling, database errors or other exceptions during asynchronous operations can go unnoticed, leading to application instability.

The `bug.js` file shows the flawed code. The `bugSolution.js` file presents the corrected code with comprehensive error handling.

## How to Reproduce

1.  Clone this repository.
2.  Install dependencies: `npm install`
3.  Run the application: `node bug.js`
4.  Attempt to create a user (using a tool like Postman) while simulating a database error (e.g., by intentionally failing the database connection).

You'll notice that the `bug.js` version doesn't report any error to the client. The improved `bugSolution.js` version provides a proper error response to the client.