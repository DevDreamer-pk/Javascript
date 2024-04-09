function main(){
  
    const userAuth = (() => {
      let users = [];
  
      function checkCredentials(username, password) {
        const user = users.find(user => user.name === username && user.password === password);
        return user !== undefined;
      }
  
      function registerUser(username, pwd1) {
        const check = checkCredentials(username, pwd1);
        if (check) {
          return "The user is already registered";
        } else {
          let user = {
            name: username,
            password: pwd1
          };
          users.push(user);
          return "The user has been added to the registeredUser array";
        }
      }
  
      return {
        registerUser: registerUser
      };
    })();
      
  
  console.log(userAuth.registerUser("user1","password123"));
  //Output: The user have been added to the registeredUser array
  console.log(userAuth.registerUser("user1","password123"));
  //Output : The user is already registered
  return userAuth;
  }
  main()




  