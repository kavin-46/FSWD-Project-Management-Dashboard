
let tasks = [
    { name: "Design Website", status: "Pending" },
    { name: "Develop Frontend", status: "In Progress" },
    { name: "Test Application", status: "Completed" }
];

function displayTasks() {
    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        taskList.innerHTML += `
            <tr>
                <td>${task.name}</td>

                <td>${task.status}</td>

                <td>
                    <select onchange="changeStatus(${index}, this.value)">
                        <option value="Pending"
                            ${task.status === "Pending" ? "selected" : ""}>
                            Pending
                        </option>

                        <option value="In Progress"
                            ${task.status === "In Progress" ? "selected" : ""}>
                            In Progress
                        </option>

                        <option value="Completed"
                            ${task.status === "Completed" ? "selected" : ""}>
                            Completed
                        </option>
                    </select>
                </td>

                <td>
                    <button class="delete-btn"
                        onclick="deleteTask(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });

    updateDashboard();
}

function addTask() {
    let taskName = document.getElementById("taskName").value.trim();

    if (taskName === "") {
        alert("Please enter a task name");
        return;
    }

    tasks.push({
        name: taskName,
        status: "Pending"
    });

    document.getElementById("taskName").value = "";

    displayTasks();
}

function changeStatus(index, newStatus) {
    tasks[index].status = newStatus;

    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);

    displayTasks();
}

function updateDashboard() {
    document.getElementById("total").innerText = tasks.length;

    document.getElementById("pending").innerText =
        tasks.filter(task => task.status === "Pending").length;

    document.getElementById("progress").innerText =
        tasks.filter(task => task.status === "In Progress").length;

    document.getElementById("completed").innerText =
        tasks.filter(task => task.status === "Completed").length;
}

displayTasks();

