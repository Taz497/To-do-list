// Dom elements

let sidebar = document.getElementById("more-container");
let openbar = document.getElementById("openbar");
let closebar = document.getElementById("closebar");
let complete = document.getElementsByClassName("mark");
let starred = document.getElementsByClassName("star");
let trash = document.getElementById("close");
let hold = document.getElementById("notes-hold");
let selection = document.getElementById("selection");
let showDate = document.getElementById("notes-text");
let delText = document.getElementById("closebtn");
let searchbar = document.getElementById("searchbar");
let title = document.querySelectorAll("title");
let newA = document.getElementById("newA");
let newB = document.getElementById("newB");


// Save tasks



// Search system

function searchSystem(){
    console.log("yo")
}

// Searchbar close/show

searchbar.addEventListener("click", () =>{
    delText.style.visibility = "visible";
} )

delText.addEventListener("click", () =>{
    delText.style.visibility = "hidden";
} )

// Clear searchbar

function clearSearch(){
    (<HTMLInputElement | null>searchbar).value = null;
}

// Display date

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day} - ${month} - ${year}`;

let createDate = showDate.innerText = "Created at \xa0 : \xa0" + currentDate + "";

// Sidebar show/hide

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


// Selection

function selectFilter(selected) {
    let selectionLi = selection.getElementsByTagName("li");

    for (let i = 0; i < selectionLi.length; i++) {
        const selectedItem = selectionLi[i];

        selectedItem.classList.remove("active");
        selected.classList.add("active");
    }
}

// Limit the tasks to 10 
function taskLimit(){
    if (hold.children.length > 9) {
    newA.onclick = null;
    newB.onclick = null;

    alert("You have excceded the number of tasks for the beta version.")
     }else {
       
    newA.onclick = newTask;
    newB.onclick = newTask;
 }
}

// New Task 

function newTask() {

    // Creates an li wih class "center" and i,i,input,i element

    let li = document.createElement("li");
    li.classList.add("center");
    li.classList.add("sorted");
    let dom_i = document.createElement("i");
    let dom_k = document.createElement("i");
    let dom_input = document.createElement("input");
    let dom_j = document.createElement("i")

    // For dom_input

    let count = 0;
    count++;

    // Sets attributes and events for the i,i,input,i elements inside li

    dom_i.setAttribute("class", "fas fa-check-circle mark");
    dom_i.setAttribute("title", "Mark Complete");
    dom_i.addEventListener("click", function markComplete() {
        this.classList.toggle("completed");
    })
    dom_k.setAttribute("title", "starred");
    dom_k.setAttribute("class", "fas fa-star star");
    dom_k.addEventListener("click", function markStarred() {
        this.classList.toggle("starred")
    })
    dom_input.setAttribute("type", "text");
    dom_input.setAttribute("placeholder", "title");
    dom_input.classList.add("title");
    dom_input.classList.add("task-9")
    

// Unique id for each list items

    let a = document.querySelectorAll(".title");

    a.forEach((dom_input, index) => {
        dom_input.classList.remove(`task-9`)
        dom_input.classList.add(`task-${index}`)
    });
    
   
    
    dom_j.setAttribute("class", "fas fa-times close");
    dom_j.setAttribute("title", "Remove");
    dom_j.setAttribute("onclick", "this.parentElement.remove()");

    // Appends all the elements inside hold(ul)   

    hold.appendChild(li);
    li.appendChild(dom_i);
    li.appendChild(dom_input);
    li.appendChild(dom_j);
    li.appendChild(dom_k);

    // Hides Sidebar after invoked (Mobile) 

    hideSidebar()

}



// Show all hiden elements

function home(a) {
    // Get all the childrens of hold(ul)

    let holder = hold.getElementsByTagName("li");

    // Iterate through the childrens of hold and place them in holderLi

    for (let a = 0; a < holder.length; a++) {
        const holderLi = holder[a];

        // Show all hold childrens

        holderLi.style.display = "flex";

    }
    hideSidebar()
    selectFilter(a.parentElement.parentElement)

}

// Duplicate of "home" to counter bugs

function dupelicateHome() {
    // Get all the childrens of hold(ul)

    let holder = hold.getElementsByTagName("li");

    // Iterate through the childrens of hold and place them in holderLi

    for (let a = 0; a < holder.length; a++) {
        const holderLi = holder[a];

        // Show all hold childrens

        holderLi.style.display = "flex";

    }
    hideSidebar()
}

// Sorting system according to "Starred" elements

function showStarred(a) {

    // Get all the childrens of hold(ul)

    let holder = hold.getElementsByTagName("li");

    // Iterate through the childrens of hold and place them in holderLi

    for (let a = 0; a < holder.length; a++) {
        const holderLi = holder[a];


        // Get the "Starred" elements

        let checking = holderLi.getElementsByClassName("starred") as HTMLCollectionOf<HTMLElement>;

        // Iterate through the "Starred" elements and place them in icon

        for (let i = 0; i < checking.length; i++) {
            const icon = checking[i];

            // Set all "starred" elements to flex

            icon.parentElement.style.display = 'flex';

            // Get all the elements with the class star

            let staring = document.getElementsByClassName("star");

            // Iterate through staring and place them in star

            for (let i = 0; i < staring.length; i++) {
                const star = staring[i];

                // if star items does not contain the class "starred" ,then add the class "sorted" to their parent elements ,else remove "sorted"

                if (star.classList.contains("starred") !== true) {

                    star.parentElement.classList.add("sorted");
                }
                else (
                    star.parentElement.classList.remove('sorted')
                )

                // Get all the elements with class "sorted" inside hold

                let sort = hold.getElementsByClassName("sorted") as HTMLCollectionOf<HTMLElement>;

                // Iterate through sort and place them in filter

                for (let i = 0; i < sort.length; i++) {
                    const filter = sort[i];

                    // Hide all elements that contains the class "sorted"

                    filter.style.display = "none";
                }
            }
        }
    }
    hideSidebar()
    selectFilter(a.parentElement.parentElement)
}




// Sorting system according to "Upcoming" elements

function showUpcoming(a) {

    dupelicateHome()
    let holder = hold.getElementsByTagName("li");

    for (let a = 0; a < holder.length; a++) {
        const holderLi = holder[a];

        let mark = holderLi.getElementsByClassName("mark");

        for (let a = 0; a < mark.length; a++) {
            const unmarked = mark[a];

            if (unmarked.classList.contains("completed") == true) {
                unmarked.parentElement.style.display = "none";


            }
        }
    }
    hideSidebar()
    selectFilter(a.parentElement.parentElement)
}


// Sorting system according to "Completed" elements 

function completedTasks(a) {

    dupelicateHome()
    let holder = hold.getElementsByTagName("li");

    for (let a = 0; a < holder.length; a++) {
        const holderLi = holder[a];

        let mark = holderLi.getElementsByClassName("mark");

        for (let a = 0; a < mark.length; a++) {
            const unmarked = mark[a];

            if (unmarked.classList.contains("completed") !== true) {
                unmarked.parentElement.style.display = "none";

            }
        }
    }
    hideSidebar()
    selectFilter(a.parentElement.parentElement)
 
}

