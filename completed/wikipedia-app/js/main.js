//create variables and select elements
const wiki_link = 'https://en.wikipedia.org/wiki'
const randomEndpoint = '/Special:Random'

const searchTerm = document.querySelector(".searchTerm")
const search = document.querySelector(".search")
const random = document.querySelector(".random")
const output = document.querySelector(".output")

///function definitons
function getWiki(){
  const api_url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm.value}&format=json&callback=?`
  $.ajax({
    url: api_url,
    dataType: "json",
    success: data => {
      output.innerHTML = ''
      console.log(data)
      //data[1] is for titles
      //data[2] is for descriptions
      //data[3] is for links
      for(let i=0; i<data[1].length; i++){
        output.innerHTML += `
          <li> 
            <a href="${data[3][i]}">${data[1][i]}</a>
            <p>${data[2][i]}</p>
          </li>
        `
      }
    },
    error: error => {
      console.log(error)
    }
  })
}

//call functions and event listeners
search.addEventListener("click", getWiki)
random.addEventListener('click', function(){
  window.open(`${wiki_link}${randomEndpoint}`)
})