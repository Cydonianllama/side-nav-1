const toggleSideNav = document.getElementById('toggle-side-nav');
const itemsSideNav = document.querySelector('.side-nav-container-items').querySelectorAll('button');
const sideNav = document.querySelector('.side-nav');

const toggleWithRelative = (sideNav,content) => {

    let items = document.querySelector('.side-nav-container-items').querySelectorAll('.text-item');

    if (sideNav.dataset.openSideNav === 'false') {

        sideNav.dataset.openSideNav = 'true'
        sideNav.style.width = '250px';
        content.style.width = '80%';

        items.forEach(textItem => {
            textItem.style.display = 'block';
        })

    }
    else {

        sideNav.dataset.openSideNav = 'false'
        sideNav.style.width = '80px';
        content.style.width = '95%';

        items.forEach(textItem => {
            textItem.style.display = 'none';
        })
    }

}

const toggleWithRelativeEvent = (event) => {

    let sideNav = event.target.parentNode.parentNode;
    let content = sideNav.parentNode.querySelector('.content');
    toggleWithRelative(sideNav,content)

    event.preventDefault();
}

toggleSideNav.addEventListener('click', toggleWithRelativeEvent) 

itemsSideNav.forEach((button,index) => {

    button.addEventListener('click',(event) => {

        let container;
        let currentButton;

        if (event.target.tagName === 'BUTTON'){
            container = event.target.parentNode
            currentButton = event.target
        }
        else{
            container = event.target.parentNode.parentNode;
            currentButton = event.target.parentNode
        }
        
        let content = sideNav.parentNode.querySelector('.content');

        function resetItems(){
            container.querySelectorAll('button').forEach(button_ => {
                if (button_.dataset.selected === 'true') {
                    button_.querySelector('.text-item').classList.remove('side-nav-item-selected');
                    button_.querySelector('.icon-item').style.background = "rgba(105, 105, 105, 0.144)";
                }
                button_.dataset.selected = 'false'
            })
        }

        // side nav cerrado
        if(sideNav.dataset.openSideNav === 'false'){
            resetItems()
            currentButton.dataset.selected = 'true';
            currentButton.querySelector('.text-item').classList.add('side-nav-item-selected');
            currentButton.querySelector('.icon-item').style.background = "rgba(214, 214, 214, 0.144)";
            content.innerText = 'render position : ' + (index + 1).toString();
            
            toggleWithRelative(sideNav, content);

        } else if (sideNav.dataset.openSideNav === 'true'){
            // side nav abierto
            resetItems()
            currentButton.querySelector('.text-item').classList.add('side-nav-item-selected');
            currentButton.dataset.selected = 'true';
            currentButton.querySelector('.icon-item').style.background = "rgba(214, 214, 214, 0.144)";
            content.innerText = 'render position : ' + (index+1).toString();

        }

        event.preventDefault();
    })

})
