var sidebar = document.getElementById("more-container");
var openbar = document.getElementById("openbar");
var closebar = document.getElementById("closebar");
var complete = document.getElementsByClassName("mark");
var starred = document.getElementsByClassName("star");
var trash = document.getElementById("close");
var hold = document.getElementById("notes-hold");
var selection = document.getElementById("selection");
var showDate = document.getElementById("notes-text");
var delText = document.getElementById("closebtn");
var searchbar = document.getElementById("searchbar");
var newA = document.getElementById("newA");
var newB = document.getElementById("newB");
var title = hold.querySelectorAll(".title");
searchbar.addEventListener("click", function () {
    delText.style.visibility = "visible";
});
delText.addEventListener("click", function () {
    delText.style.visibility = "hidden";
});
function clearSearch() {
    searchbar.value = null;
}
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var currentDate = "".concat(day, " - ").concat(month, " - ").concat(year);
var createDate = showDate.innerText = "Created at \xa0 : \xa0" + currentDate + "";
function showSidebar() {
    sidebar.style.display = "block";
    openbar.style.display = "none";
    closebar.style.display = "block";
}
function hideSidebar() {
    sidebar.style.display = "none";
    openbar.style.display = "block";
    closebar.style.display = "none";
}
function selectFilter(selected) {
    var selectionLi = selection.getElementsByTagName("li");
    for (var i = 0; i < selectionLi.length; i++) {
        var selectedItem = selectionLi[i];
        selectedItem.classList.remove("active");
        selected.classList.add("active");
    }
}
function taskLimit() {
    if (hold.children.length > 9) {
        newA.onclick = null;
        newB.onclick = null;
        alert("You have excceded the number of tasks for the beta version.");
    }
    else {
        newA.onclick = newTask;
        newB.onclick = newTask;
    }
}
function newTask() {
    var li = document.createElement("li");
    li.classList.add("center");
    li.classList.add("sorted");
    var dom_i = document.createElement("i");
    var dom_k = document.createElement("i");
    var dom_input = document.createElement("input");
    var dom_j = document.createElement("i");
    var count = 0;
    count++;
    dom_i.setAttribute("class", "fas fa-check-circle mark");
    dom_i.setAttribute("title", "Mark Complete");
    dom_i.addEventListener("click", function markComplete() {
        this.classList.toggle("completed");
    });
    dom_k.setAttribute("title", "starred");
    dom_k.setAttribute("class", "fas fa-star star");
    dom_k.addEventListener("click", function markStarred() {
        this.classList.toggle("starred");
    });
    dom_input.setAttribute("type", "text");
    dom_input.setAttribute("placeholder", "title");
    dom_input.classList.add("title");
    dom_input.setAttribute("id", "task-9");
    var a = document.querySelectorAll(".title");
    a.forEach(function (dom_input, index) {
        dom_input.removeAttribute("id");
        dom_input.setAttribute("id", "task-".concat(index));
    });
    dom_j.setAttribute("class", "fas fa-times close");
    dom_j.setAttribute("title", "Remove");
    dom_j.setAttribute("onclick", "this.parentElement.remove()");
    hold.appendChild(li);
    li.appendChild(dom_i);
    li.appendChild(dom_input);
    li.appendChild(dom_j);
    li.appendChild(dom_k);
    hideSidebar();
}
function home(a) {
    var holder = hold.getElementsByTagName("li");
    for (var a_1 = 0; a_1 < holder.length; a_1++) {
        var holderLi = holder[a_1];
        holderLi.style.display = "flex";
    }
    hideSidebar();
    selectFilter(a.parentElement.parentElement);
}
function dupelicateHome() {
    var holder = hold.getElementsByTagName("li");
    for (var a = 0; a < holder.length; a++) {
        var holderLi = holder[a];
        holderLi.style.display = "flex";
    }
    hideSidebar();
}
function showStarred(a) {
    var holder = hold.getElementsByTagName("li");
    for (var a_2 = 0; a_2 < holder.length; a_2++) {
        var holderLi = holder[a_2];
        var checking = holderLi.getElementsByClassName("starred");
        for (var i = 0; i < checking.length; i++) {
            var icon = checking[i];
            icon.parentElement.style.display = 'flex';
            var staring = document.getElementsByClassName("star");
            for (var i_1 = 0; i_1 < staring.length; i_1++) {
                var star = staring[i_1];
                if (star.classList.contains("starred") !== true) {
                    star.parentElement.classList.add("sorted");
                }
                else
                    (star.parentElement.classList.remove('sorted'));
                var sort = hold.getElementsByClassName("sorted");
                for (var i_2 = 0; i_2 < sort.length; i_2++) {
                    var filter = sort[i_2];
                    filter.style.display = "none";
                }
            }
        }
    }
    hideSidebar();
    selectFilter(a.parentElement.parentElement);
}
function showUpcoming(a) {
    dupelicateHome();
    var holder = hold.getElementsByTagName("li");
    for (var a_3 = 0; a_3 < holder.length; a_3++) {
        var holderLi = holder[a_3];
        var mark = holderLi.getElementsByClassName("mark");
        for (var a_4 = 0; a_4 < mark.length; a_4++) {
            var unmarked = mark[a_4];
            if (unmarked.classList.contains("completed") == true) {
                unmarked.parentElement.style.display = "none";
            }
        }
    }
    hideSidebar();
    selectFilter(a.parentElement.parentElement);
}
function completedTasks(a) {
    dupelicateHome();
    var holder = hold.getElementsByTagName("li");
    for (var a_5 = 0; a_5 < holder.length; a_5++) {
        var holderLi = holder[a_5];
        var mark = holderLi.getElementsByClassName("mark");
        for (var a_6 = 0; a_6 < mark.length; a_6++) {
            var unmarked = mark[a_6];
            if (unmarked.classList.contains("completed") !== true) {
                unmarked.parentElement.style.display = "none";
            }
        }
    }
    hideSidebar();
    selectFilter(a.parentElement.parentElement);
}
