$(document).ready(() => {
    $("#stats-submit").click(() => {
        const data = { sessions: $("#sessions").val(), hours: $("#hours").val(), tutors: $("#tutors").val() };
        $.post("/stats", data, (data) => {
            console.log("success");
        });
    });
    $("#feed-submit").click(() => {
        const data = { feed: $("#feed").val() };
        $.post("/feed", data, (data) => {
            console.log("success");
        });
    });
    $("#tutors-submit").click(() => {
        const data = { tutors: $("#tutorCards").val() };
        $.post("/tutors", data, (data) => {
            console.log("success");
        });
    });
    $("#faqs-submit").click(() => {
        const data = { faqs: $("#faqs").val() };
        $.post("/faqs", data, (data) => {
            console.log("success");
        });
    });
});