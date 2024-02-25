// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => console.log(response))
//   .catch(error => console.log(error));

// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(data => console.log(data))


//Method GET
fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => {
          document.querySelector('#user-name').textContent = data.name
          document.querySelector('#user-email').textContent = data.email
        })

//Method POST
// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST', // Set method here
// })
// .then(response => response.json())
// .then(data => console.log(data))


//Adding Request Header and Body Parameters
fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Nathan Sebhastian',
    email: 'ns@mail.com'
  }),
}).then(response => response.json())
  .then(data => console.log(data))

//Send a PUT Request
//A PUT request is used to create a new resource or update an existing one.
//Example of Sending a PUT Request With Fetch
fetch('https://jsonplaceholder.typicode.com/users/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Juan Carlos Valera',
    email: 'valera@mail.com'
  }),
}).then(response => response.json())
  .then(data => console.log(data))
  
  
/**
 * Send a PATCH Request
 * The PATCH request is sent when you need to update an existing request. 
 */

// Example of Sending a PATCH Request With Fetch
fetch('https://jsonplaceholder.typicode.com/users/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ 
    name: 'Centolia Ortega',
    username: 'contoliaORt'
  }),
}).then(response => response.json())
  .then(data => console.log(data))

/**
 * Send a DELETE Request
 * The DELETE request is used when you want to request that a resource 
 * be removed permanently from the server.
 */

//Example of Sending a DELETE Request With Fetch
fetch('https://jsonplaceholder.typicode.com/users/1', {
  method: 'DELETE',
}).then(response => response.json())
  .then(data => console.log(data))


/**
 * Use Async/Await With the Fetch API
 */

// try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
  