$(document).ready(
    () => {
        /*$('.ui.sticky')
            .sticky({
                context: 'body'
            });*/
        $('.item.home').click(() => {
            $('.menu .item').removeClass('active');
            $('.item.home').addClass('active');

            $('.content').removeClass('hide');
            $('.content.faq').addClass('hide');
            $('.content.meet').addClass('hide');
        });
        $('.item.faq').click(() => {
            $('.menu .item').removeClass('active');
            $('.item.faq').addClass('active');

            $('.content').removeClass('hide');
            $('.content.home').addClass('hide');
            $('.content.meet').addClass('hide');
        });
        $('.item.meet').click(() => {
            $('.menu .item').removeClass('active');
            $('.item.meet').addClass('active');

            $('.content').removeClass('hide');
            $('.content.home').addClass('hide');
            $('.content.faq').addClass('hide');
        });
        $.get("/getStats", data => {
            const stats = data;
            $("#sessions").text(stats.sessions);
            $("#hours").text(stats.hours);
            $("#tutors").text(stats.tutors);
        });
        $.get("/getFeed", data => {
            const feed = data;
            let feedHTML = '';
            for (let i = 0; i < feed.length; i++) {
                const { date, summary } = feed[i];
                let eventHTML = `<div class="event">
                <div class="label">
                  <img src="/client/img/faqbackground.jpg">
                </div>
                <div class="content">
                  <div class="date">
                    ${date}
                  </div>
                  <div class="summary">
                    ${summary}
                  </div>
                </div>
              </div>`;
                feedHTML += eventHTML;

            }
            $("#feed").html(feedHTML);
        });
        $.get("/getTutors", data => {
            const tutors = data;
            let tutorsHTML = '';
            for (let i = 0; i < tutors.length; i++) {
                const { name, grade, desc, subj, imgFileName } = tutors[i];
                let cardHTML = `
                <div class="card">
                <div class="image">
                  <img src="/client/img/tutors/${imgFileName}">
                </div>
                <div class="content">
                  <div class="header">${name}</div>
                  <div class="meta">
                    <a>Grade ${grade}</a>
                  </div>
                  <div class="description">
                    ${desc}
                  </div>
                </div>
                <div class="extra content">
                  <span>
                    <i class="book icon"></i>
                    ${subj}
                  </span>
                </div>
              </div>`;
                tutorsHTML += cardHTML;
            }
            $("#tutorCards").html(tutorsHTML);
        });



        // $('.ui.sticky').sticky('refresh');
        /*initializeAttributes()
        $('.ui.sidebar')
            .sidebar({
                context: $('.bottom.segment'),
                dimPage: false
            });
        $('.menu .item').on('click', () => {
            $('.ui.sidebar')
            .sidebar('toggle');
        });

        $('.home.item').on('click', () => {
            $('.pusher .segment.home').removeClass('hide');
            $('.pusher .segment').addClass('hide');
            $('.pusher .segment.home').removeClass('hide');
            $('.pusher .segment.footer').removeClass('hide');
        });
        $('.faq.item').on('click', () => {
            $('.pusher .segment.faq').removeClass('hide');
            $('.pusher .segment').addClass('hide');
            $('.pusher .segment.faq').removeClass('hide');
            $('.pusher .segment.footer').removeClass('hide');
        });
        $('.schedule.item').on('click', () => {
            $('.pusher .segment.schedule').removeClass('hide');
            $('.pusher .segment').addClass('hide');
            $('.pusher .segment.schedule').removeClass('hide');
            $('.pusher .segment.footer').removeClass('hide');
        });
        $('.meet.item').on('click', () => {
            $('.pusher .segment.meet').removeClass('hide');
            $('.pusher .segment').addClass('hide');
            $('.pusher .segment.meet').removeClass('hide');
            $('.pusher .segment.footer').removeClass('hide');
        });*/
    }
);

/*function initializeAttributes() {
    $('.pusher .segment.faq').addClass('hide');
    $('.pusher .segment.schedule').addClass('hide');
    $('.pusher .segment.meet').addClass('hide');
}*/