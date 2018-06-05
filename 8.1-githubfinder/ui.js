// Search input
const searchUser = document.getElementById('searchUser');
// Init Github
const github = new Github;

// Search niput event listener
searchUser.addEventListener('keyup', e =>{
  // Get input text
  const userText = e.target.value;
  if(userText !== '') {
    // Make http call
    github.getUser(userText).then(data => {
      if(data.profile.message === 'Not Found') {
        // Show alert
        alert("Not Found")
      } else {
        // Show profile
        console.log(data)
      }
    });
  }
})