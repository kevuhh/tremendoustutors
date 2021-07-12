$(document).ready(() => {
    $("#stats-submit").click(() => {
        $("#error").css("display", "none");
        const data = { sessions: $("#sessions").val(), tutors: $("#tutors").val(), students: $("#students").val() };
        $.post("/stats", data, (data) => {
            $("#sessions").val("");
            $("#tutors").val("");
            $("#students").val("");
            if (data.status === "error") {
                $("#error").css("display", "block");
            }
        });
    });
    $("#feed-submit").click(() => {
        $("#error").css("display", "none");
        const data = { feed: $("#feed").val() };
        $.post("/feed", data, (data) => {
            $("#feed").val("");
            if (data.status === "error") {
                $("#error").css("display", "block");
            }
        });
    });
    $("#tutors-submit").click(() => {
        $("#error").css("display", "none");
        const data = { tutors: $("#tutorCards").val() };
        $.post("/tutors", data, (data) => {
            $("#tutorCards").val("");
            if (data.status === "error") {
                $("#error").css("display", "block");
            }
        });
    });
    $("#faqs-submit").click(() => {
        $("#error").css("display", "none");
        const data = { faqs: $("#faqs").val() };
        $.post("/faqs", data, (data) => {
            $("#faqs").val("");
            if (data.status === "error") {
                $("#error").css("display", "block");
            }
        });
    });
});