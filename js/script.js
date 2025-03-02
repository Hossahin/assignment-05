document.getElementById("random-Color").addEventListener("click", function () {
  function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.getElementById("changeColorBody").style.backgroundColor =
    randomColor;
});

document.getElementById("discoverNew").addEventListener("click", function () {
  window.location.href = "blog.html";
});

function getID(id, title) {
  document.getElementById(id).addEventListener("click", function () {
    alert("Board updated Successfully");
    const taskNumber = document.getElementById("task-number").innerText;
    const convertedTaskNumber = parseFloat(taskNumber);
    const result = convertedTaskNumber - 1;
    document.getElementById("task-number").innerText = result;

    const score = document.getElementById("task-score").innerText;
    const convertedScore = parseFloat(score);
    const finalScore = convertedScore + 1;

    document.getElementById("task-score").innerText = finalScore;
    document.getElementById(id).disabled = true;
    const titles = document.getElementById(title).innerText;

    if (result === 0) {
      alert("congrates!!! You have completed all the current task");
    }

    let time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const historyContainer = document.getElementById("history-container");
    const p = document.createElement("p");
    p.classList.add("bg-[#F4F7FF]", "p-2", "mt-2", "rounded", "opacity-70");
    p.innerText = `You have Complete The Task ${titles} at ${time} `;
    historyContainer.appendChild(p);

    document.getElementById("clear-btn").addEventListener("click", function () {
      historyContainer.removeChild(p);
      document.getElementById(id).disabled = false;
    });
  });
}

getID("fix-btn", "fix-title");
getID("darkmode-btn", "darkmode-title");
getID("optimize-btn", "optimize-title");
getID("emoji-btn", "emoji-title");
getID("openAi-btn", "openAi-title");
getID("job-btn", "job-title");

let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
  new Date().getDay()
];
document.getElementById("weeknd").innerText = weekday + ",";

const today = new Date().toString().split(" ").splice(1, 3).join(" ");
document.getElementById("date").innerText = today;
