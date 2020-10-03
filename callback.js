const users = [{
 id: 1,
 name: "RR"
}, {
 id: 2,
 name: "RR1"
}]

const getUsers = () => {
 setTimeout(() => {
  let output = ''
  users.forEach(user => output += `<li>${user.name}</li>`)
  document.body.innerHTML = output;
 }, 4000);
}


const createUser = (user, callback) => {
 setTimeout(() => {
  users.push(user)
  callback()
 }, 2000)
}

createUser({
 id: 3,
 name: 'RR3'
}, getUsers)

// Scenario 1: createUser time > getUser. CreateUser will execute in between the getUsers will complete the execution
// Scenario 2: createUser time < getUser. CreateUser will wait for getUser to complete execution and then createUser will be executed.