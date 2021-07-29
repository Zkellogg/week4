const myArticles = news.articles;
const articleUL = document.getElementById("articlesUL");
const mySources = sources.sources;
const sourcesUL = document.getElementById("sourcesUL");
let sourceCheckbox = document.getElementById("sourceCheckbox");

function displayArticles(myArticles) {
  let articlesArray = myArticles.map(function (articles) {
    return `
    
    <li><lable>Author: </lable>${articles.author}</li>
    <li><lable>Title: </lable>${articles.title}</li>
    <li>${articles.description}</li>
    <li><lable>Link: </lable>${articles.url}</li>
    <li><lable>Published: </lable>${articles.publishedAt}</li>
    <li><img src = "${articles.urlToImage}" class = "articleImage"/></li>
    <div class = "blankDiv"></div>
    `;
  });
  articleUL.innerHTML = articlesArray.join("");
}

displayArticles(news.articles);
// -------------------------------------------------------------------------
// Sources UL starts Here
// -------------------------------------------------------------------------

function clickFunction() {
    if(sourceCheckbox.value = true){console.log("Test")}
    if(sourceCheckbox.value = false){console.log("NO")}
    }

function displaySources(mySources) {
  let sourcesArray = mySources.map(function (sources) {
    return `
        <li>
            <p><input type="checkbox" name="" id="sourceCheckbox" onchange = "clickFunction(sourceCheckbox)" >${sources.name}</p>
        </li>
        `;
  });
  sourcesUL.innerHTML = sourcesArray.join("");
}

displaySources(sources.sources);

// sourceCheckbox.addEventListener("change", function () {
//   if (sourceCheckbox.checked == true) {
//     console.log("Test");
//   }
// });
