var positions = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager'];

var getNames = function (positions) {
    var names = [];
    for (var i = 0; i < positions.length; i++) {
        var name = prompt("Введите имя для " + positions[i]);
        names.push(name);
    }
    return names;
};

var names = getNames(positions);

var createTeam = function (names, positions) {

    var team = {};
    for (var j = 0; j < positions.length; j++) {
        var wn = "worker" + j;
        team[wn] = new Object();
        team[wn].name = names[j];
        team[wn].position = positions[j];
    };
    return team;
};

var finalTeam = createTeam(names, positions);

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var setSalary = function (team) {
    for (var key in team) {
        for (var p in team[key]) {
            if (p === "position") {
                if (team[key][p].indexOf("Junior") === 0) {
                    team[key]["salary"] = getRandomInRange(500, 1000);

                } else if (team[key][p].indexOf("Middle") === 0) {
                    team[key]["salary"] = getRandomInRange(1500, 2000);

                } else if (team[key][p].indexOf("Senior") === 0) {
                    team[key]["salary"] = getRandomInRange(2500, 3000);

                } else team[key]["salary"] = getRandomInRange(4000, 4500);
            };
        };
    };
    return team;
};
var team = setSalary(finalTeam);

for (var key in team) {
    team[key]["tellAboutYourSelf"] = function () {
        console.log("Меня зовут " + this.name + " и я - " + this.position + " . Я зарабатываю " + this.salary + "$.");
    };
};

team.showTeam = function () {
    for (var i in this) {
        if (i !== "showTeam") {
            console.log(team[i].name + " - " + team[i].position + ". " + "Зарплата " + " - " + team[i].salary);
        };
    };
};

team.showTeam();