const question = document.getElementById('question');
const result = document.getElementById('result');
const resultBtn = document.getElementById('resultBtn');
const backBtn = document.getElementById('backBtn');
const error = document.getElementById('error');
let btn = document.getElementsByClassName("btn");
backBtn.style.display = 'none';
result.style.display = 'none';
var typeResult = [
  {"type_title":"Aタイプ","type_desc":"A-タイプの説明が入ります。"},
  {"type_title":"Bタイプ","type_desc":"B-タイプの説明が入ります。"},
  {"type_title":"Cタイプ","type_desc":"C-タイプの説明が入ります。"}
]

resultBtn.addEventListener('click', () => {
  let count = 0;
  var sum = 0;
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].checked) {
      count++;
      let countVal = btn[i].value;
      sum += parseInt(countVal);
    }
  }
  if(count<5){
    error.innerHTML = "選択されていない項目があります。";
  }else{
    backBtn.style.display = 'block';
    result.style.display = 'block';
    question.style.display = 'none';
    resultBtn.style.display = 'none';
    error.innerHTML = "";
    if(sum < 2){
      sessionStorage.setItem("type_num", 0);
    }else if(sum < 4){
      sessionStorage.setItem("type_num", 1);
    }else{
      sessionStorage.setItem("type_num", 2);
    }
    let type_num = sessionStorage.getItem('type_num');
    let type_title = typeResult[type_num]["type_title"];
    let type_desc = typeResult[type_num]["type_desc"];
    document.getElementById("type_title").innerHTML = type_title;
    document.getElementById("type_desc").innerHTML = type_desc;
  }
});
backBtn.addEventListener('click', () => {
  backBtn.style.display = 'none';
  result.style.display = 'none';
  question.style.display = 'block';
  resultBtn.style.display = 'block';
  let count = 0;
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].checked) {
      btn[i].checked = false;
    }
  }
});