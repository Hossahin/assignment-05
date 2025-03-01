// document.getElementById("fix-btn").addEventListener("click", function () {
//   alert("Board updated Successfully");
//   const taskNumber = document.getElementById("task-number").innerText;
//   const result = taskNumber - 1;
//   document.getElementById("task-number").innerText = "0" + result;
// });

function getID(id) {
  document.getElementById(id).addEventListener("click", function () {
    alert("Board updated Successfully");
    const taskNumber = document.getElementById("task-number").innerText;
    const result = taskNumber - 1;
    document.getElementById("task-number").innerText = result;
    const score = document.getElementById("task-score").innerText;
    const convertedScore = parseFloat(score);
    const finalScore = convertedScore + 1;
    document.getElementById("task-score").innerText = finalScore;
    document.getElementById(id).disabled = true;

    const historyContainer = document.getElementById("history-container");
    const p = document.createElement("p");
    p.classList.add("bg-[#F4F7FF]", "p-2", "mt-2", "rounded", "opacity-70");
    p.innerText = `
      You have Complete The Task + 
    `;
    historyContainer.appendChild(p);

    document.getElementById("clear-btn").addEventListener("click", function () {
      historyContainer.removeChild(p);
      document.getElementById(id).disabled = false;
    });
  });
}

getID("fix-btn");
getID("darkmode-btn");
getID("optimize-btn");
getID("emoji-btn");
getID("openAi-btn");
getID("job-btn");

let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()]
document.getElementById("weeknd").innerText = weekday;

const today = new Date().toString().split(" ").splice(1, 3).join(" ");
document.getElementById("date").innerText = today;
