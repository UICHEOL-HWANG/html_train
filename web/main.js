

let target = document.querySelector("#dynamic")
// dynamic이라는 id를가진 태그를 선택해라 

function randomString(){


    let stringArr = ['Learn to HTML','Learn to CSS','Learn to Python','Learn to Ruby','Learn to JavaScript']
    // 5개의 배열 
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    // 랜덤 숫자 생성 stringArr의 갯수를 통해 

    let selectStringArr = selectString.split(""); 
    // 단어 하나하나가 배열로 쪼개진다 
    return selectStringArr
}


//타이핑 리셋 
function resetTyping(){
    target.textContent = ""; 
    dynamic(randomString());
}



// 한글자씩 텍스트 출력 함수 
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift()
        setTimeout(function(){
            dynamic(randomArr);
        },80)
        //0보다 클때까지는 rndomArr이 반복된다
    }
    else{
        setTimeout(resetTyping,3000);
    }
    // 쪼개진 단어들을 앞글자부터 빼서 출력하게 만든다 
}

dynamic(randomString());

function blink(){
    target.classList.toggle("active");
}
// active가 추가되었다가 삭제되었다가를 반복 커서 깜빡임 

setInterval(blink,500); 
// 반복을 0.5초마다 실행시킴 


