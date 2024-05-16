
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var destination = document.getElementById('destination').value;
    var seatType = document.querySelector('input[name="seat-type"]:checked');
    

    if (name == "" || email == "" || destination == "" || seatType == null) {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}