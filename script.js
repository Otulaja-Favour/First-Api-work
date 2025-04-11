//part1
let header1 = document.getElementById('head')
function change(){
    header1.innerHTML = "Button Clicked!";
    header1.style.color = "blue"
}

//part2
const punchline = document.getElementById('punchline')
const setup = document.getElementById('setup')
const button = document.getElementById('but')

async function designOfJoke() {
    try{
        const reponse = await fetch(" https://official-joke-api.appspot.com/random_joke")
        const gist = await reponse.json()
        
        setup.innerText =  gist.setup;
        punchline.innerText = gist.punchline;
        return gist
    }catch (error){
console.log("Error fetching users:", error);

    }   
}
setInterval(designOfJoke, 7000)

//part3

function saveThemePreference(personalprofi) {
    localStorage.setItem("userTheme", personalprofi);
    console.log("Theme saved:", personalprofi);
  }
  
  function loadThemePreference() {
    const saveprofit = localStorage.getItem("userTheme");
    if (saveprofit) {
      console.log("Loaded theme:", saveprofit);
    } else {
      console.log("No saved theme found");
    }
  }

document.getElementById('but').addEventListener('click', ()=> {
    const personalprofit = document.getElementById('inputtext')
    saveThemePreference(personalprofit.value);
    loadThemePreference();
personalprofit.value = ''

})
    

   
