const http = new EasyHTTP; 

// Get Users

// Like this just returns the Promise 
// const users = http.get('https://jsonplaceholder.typicode.com/users');

// Do it asynchronously
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// User Data
const data = {
  name: 'John Doe',
  username: 'john_doe1234',
  email: 'johndoe@gmail.com'
}

// Create User using POST request
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Update User using PUT request
http.put('https://jsonplaceholder.typicode.com/users/7', data) 
  .then(data => console.log(data))
  .catch(err => console.log(err));

// // Delete user using DELETE request
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then((data) => console.log(data))
  .catch(err => console.log(err));