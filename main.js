function selectButton(button){

    //unselect button
    let unselectedButton = document.querySelector(`#header > button.selected`);
    unselectedButton.classList.toggle("selected");

    //select button
    let selectedButton = document.querySelector(`#header > button.${button}`);
    selectedButton.classList.toggle("selected");

    // change divs + background color
    let bodyDiv = document.getElementById('body');
    let oldDiv = document.getElementById(bodyDiv.className);
    let newDiv = document.getElementById(button);

    oldDiv.hidden = true;
    newDiv.hidden = false;
    bodyDiv.className = button;
}