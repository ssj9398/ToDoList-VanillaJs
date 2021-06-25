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