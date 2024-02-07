function valiadeForm() {
    let x = document.forms["myform"]["fname"].value;
    if (x  == "") {
        alert("Name field must be filled out");
        return false;
    }
}