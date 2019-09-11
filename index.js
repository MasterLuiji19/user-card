function createUser(user) {
    function calcSuccessCourse(passedCourses) {
        let countSuccess = 0;
        for (let i = 0; i < passedCourses.length; i++) {
            if (passedCourses[i]["currentState"] === 'Пройден' || passedCourses[i]["currentState"] === 'Завершен')
                countSuccess++;
        }
        return countSuccess;
    }

    document.querySelector(".info__data-name").innerText = user.userName;
    document.querySelector(".info__data-position").innerText = user.userPosition;
    document.querySelector(".info__avatar-image").setAttribute("src", user.userPhoto);
    document.querySelector(".user-talents").innerText = user.userTalents;
    document.querySelector(".thanks-talents").innerText = user.thanksTalents;
    document.querySelectorAll(".info-box__passed-courses").forEach(element => {
        element.textContent = user.passedCourses.length;
    });
    document.querySelector(".info-box__assigned-courses").innerText =
        user.passedCourses.length + user.assignedCourses.length;
    document.querySelector(".progress-courses").innerText = user.passedCourses.length * 100 /
        (user.passedCourses.length + user.assignedCourses.length) + '%';
    document.querySelector(".info-box__passed-courses-success").innerText = calcSuccessCourse(user.passedCourses);
    document.querySelector(".progress-courses-success").innerText = Math.round(calcSuccessCourse(user.passedCourses) * 100 /
        user.passedCourses.length) + '%';
    document.querySelector(".assigned-courses").innerText = user.assignedCourses.length;



    /////////
    document.querySelectorAll(".table-cell__link").forEach(element => {
        element.textContent = user.passedCourses[0].activityName;
    });
    document.querySelectorAll(".start-date").forEach(element => {
        element.textContent = user.passedCourses[1].startDate;
    });
    document.querySelectorAll(".finish-date").forEach(element => {
        element.textContent = user.passedCourses[2].finishDate;
    });
    //////////

    const rankingBody = document.querySelectorAll("#info-table > .table-row");
    console.log(rankingBody[1]);
    document.addEventListener("DOMContentLoaded", () => {user.passedCourses});


    function populateRankings(passedCourses) {
        rankingBody.remove(rankingBody[1]);
    }




}


fetch("json.json")
    .then(response => response.json())
    .then((user) => {createUser(user);})



