const clockContainer = document.querySelector(".clock");

function getTime() {
    const date = new Date(); // 시간정보를 담고있는 객체를 생성 
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    // 삼항식으로 한자리만 나오는 것을 수정
    clockContainer.innerText = `${hours < 10 ?
        `0${hours}` : hours}:${minutes < 10 ?
            `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    setInterval(getTime, 1000);
}

init();

const addButton = document.querySelector(".add-button");
const delButton = document.querySelector(".del-button");
const text = document.querySelector(".text");
const boxDo = document.querySelector(".box-do");
const length = document.getElementsByClassName(".box-do>ul");

addButton.addEventListener("click", () => {
    var html = '<li>' + text.value + `<button class="del-button far fa-minus-square fa-1x"></button>` + '</li>';
    if (boxDo.childElementCount > 1) {
        var ul = document.createElement("ul");
        ul.innerHTML = html;
        boxDo.append(ul);
        console.log("111" + boxDo.childElementCount);
    }
    else {
        var ul = document.querySelector("ul");
        ul.innerHTML = html;
        boxDo.append(length);
        console.log("111" + boxDo.childElementCount);
    }
});
const ulTag = document.querySelector("ul").childNodes;
//ulTag.childNodes
ulTag.addEventListener("click", (e) => {
    alert("a");
})