$(document).ready(function () {

    var addEducation = document.getElementById("addEducation");

    var deleteEducation = document.getElementById("deleteEducation");

    var eduItem = document.getElementById("educationInputs");

    var addProject = document.getElementById("addProject");

    var deleteProject = document.getElementById("deleteProject");

    var projectItem = document.getElementById("projectItem");

    var eduDivCount = 0, projectDivCount = 0;

    addEducation.addEventListener("click", function () {

        var clone = eduItem.cloneNode(true); // "deep" clone
        clone.id = "educationInputs" + ++eduDivCount;
        // or clone.id = ""; if the divs don't need an ID
        eduItem.parentNode.append(clone);

    });

    deleteEducation.addEventListener("click", function () {

        var element = document.getElementById("educationInputs" + eduDivCount);
        element.parentNode.removeChild(element);
        eduDivCount--;


    });

    addProject.addEventListener("click", function () {

        var clone = projectItem.cloneNode(true); // "deep" clone
        clone.id = "projectItem" + ++projectDivCount;
        // or clone.id = ""; if the divs don't need an ID
        projectItem.parentNode.append(clone);

    });

    deleteProject.addEventListener("click", function () {

        var element = document.getElementById("projectItem" + projectDivCount);
        element.parentNode.removeChild(element);
        projectDivCount--;


    });

});