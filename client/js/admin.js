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
});