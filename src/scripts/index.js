var sidebar = document.getElementById("more-container");
var openbar = document.getElementById("openbar");
var closebar = document.getElementById("closebar");
var complete = document.getElementsByClassName("mark");
var starred = document.getElementsByClassName("star");
var trash = document.getElementById("close");
var hold = document.getElementById("notes-hold");
var selection = document.getElementById("selection");
var saveItems = document.getElementsByClassName("title");
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
function newTask() {
    var li = document.createElement("li");
    li.classList.add("center");
    li.classList.add("sorted");
    var dom_i = document.createElement("i");
    var dom_k = document.createElement("i");
    var dom_input = document.createElement("input");
    var dom_j = document.createElement("i");
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
function home() {
    var holder = hold.getElementsByTagName("li");
    for (var a = 0; a < holder.length; a++) {
        var holderLi = holder[a];
        holderLi.style.display = "flex";
    }
}
function showStarred() {
    var holder = hold.getElementsByTagName("li");
    for (var a = 0; a < holder.length; a++) {
        var holderLi = holder[a];
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
}
function showUpcoming() {
    var holder = hold.getElementsByTagName("li");
    for (var a = 0; a < holder.length; a++) {
        var holderLi = holder[a];
        var mark = holderLi.getElementsByClassName("mark");
        for (var a_1 = 0; a_1 < mark.length; a_1++) {
            var unmarked = mark[a_1];
            if (unmarked.classList.contains("completed") == true) {
                unmarked.parentElement.style.display = "none";
            }
        }
    }
}
function completedTasks() {
    var holder = hold.getElementsByTagName("li");
    for (var a = 0; a < holder.length; a++) {
        var holderLi = holder[a];
        var mark = holderLi.getElementsByClassName("mark");
        for (var a_2 = 0; a_2 < mark.length; a_2++) {
            var unmarked = mark[a_2];
            if (unmarked.classList.contains("completed") !== true) {
                unmarked.parentElement.style.display = "none";
            }
        }
    }
}
