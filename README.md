This is a library to easily make HTTP requests (get, post, put & delete) utilizing Fetch API and ES7 syntax. 'app.js' contains a demonstration of how to use the libary

### Insantiate EasyHTTP object
```
const http = new EasyHTTP; 
```

### Make HTTP request
```
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));
```