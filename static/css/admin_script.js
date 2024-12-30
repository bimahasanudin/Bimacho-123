let body = document.body;
let profile = document.querySelector('header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
    profile.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    profile.classList.remove('acvite')

}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

window.onscroll = () =>{
    profile.classList.remove('active');
    searchForm.classList.remove('active');

    if (windows.innerwidth < 1200) {
        sideBar.classList.remove('active');
        body.classList.remove('active');
    }
}

// ---------------counter-----------

(() =>{
    const counter = document.querySelectorAll('.counter');
    // convert to array
    const array = Array.from(counter);
    array.map((item) =>{
        let counterInnerText = item.textContent;
        item.textContent = 0;
        let count = 1;
        let speed = item.dataset.speed / counterInnerText;

        function counterUp() {
            item.textContent = count++;
            if (counterInnerText < count) {
                clearInterval(stop);
            }
        }
        const stop = setInterval(() => {
            counterUp();
        }, speed)
    })
})()