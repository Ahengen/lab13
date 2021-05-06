$(document).ready(function () {
    $("button").on("click", createStudent);


});
let calculatedForm;
function createStudent(event) {
        event.preventDefault();
        calculatedForm = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        pointsEarned: $("#pointsEarned").val(),
        pointsPossible: $("#pointsPossible").val(),
        percentage: this.pointsEarned / this.pointsPossible,

        getDisplayPercentage: function () {
            let percent = Math.round(this.pointsEarned / this.pointsPossible);
            return `${this.pointsEarned} / ${this.pointsPossible} (${percent}%)`;
        },

        getLetterGrade: function () {

            if (this.percentage > 89 && this.percentage < 101) {
                return "A";
            } else if (this.percentage > 79 && this.percentage < 90) {
                return "B";
            } else if (this.percentage > 69 && this.percentage < 80) {
                return "C";
            } else if (this.percentage > 59 && this.percentage < 70) {
                return "D";
            } else {
                return "E";
            }


        }
    }
    displayContents();
}

function displayContents() {

    $("#output").append(`${calculatedForm.firstName}`);
    $(".output").show();

    $("#output").append(`${calculatedForm.lastName}<br>`);
    $(".output").show();

    $("#output").append(`${calculatedForm.getDisplayPercentage()}<br>`);
    $(".output").show();

    $("#output").append(`${calculatedForm.getLetterGrade()}`);
    $(".output").show();

}


