const textInput = document.getElementById("textInput");

const charCount = document.getElementById("charCount");
const charNoSpaceCount = document.getElementById("charNoSpaceCount");
const englishWordCount = document.getElementById("englishWordCount");
const chineseCharCount = document.getElementById("chineseCharCount");
const lineCount = document.getElementById("lineCount");

const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const themeToggle = document.getElementById("themeToggle");


function countEnglishWords(text){

  const matches = text.match(/[A-Za-z]+(?:'[A-Za-z]+)*/g);

  return matches ? matches.length : 0;

}


function countChineseChars(text){

  const matches = text.match(/[\u3400-\u4DBF\u4E00-\u9FFF]/g);

  return matches ? matches.length : 0;

}


function countNonWhitespaceChars(text){

  return text.replace(/\s/g,"").length;

}


function countLines(text){

  if(text.length === 0) return 0;

  return text.split(/\r?\n/).length;

}


function updateCounts(){

  const text = textInput.value;

  charCount.textContent = text.length;

  charNoSpaceCount.textContent = countNonWhitespaceChars(text);

  englishWordCount.textContent = countEnglishWords(text);

  chineseCharCount.textContent = countChineseChars(text);

  lineCount.textContent = countLines(text);

}


textInput.addEventListener("input", updateCounts);


clearBtn.addEventListener("click", () => {

  textInput.value = "";

  updateCounts();

});


copyBtn.addEventListener("click", async () => {

  try{

    await navigator.clipboard.writeText(textInput.value);

  }

  catch{

    alert("複製失敗");

  }

});


themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});


updateCounts();