$(document).ready(
    () => {
        initializeAttributes()
        $('.ui.sidebar')
            .sidebar({
                context: $('.bottom.segment')
            });
        $('.menu .item').on('click', () => {
            $('.ui.sidebar')
            .sidebar('toggle');
        });

        $('.home.item').on('click', () => {
            $('.pusher .segment.home').removeClass('hide');
            $('.pusher .segment').addClass('hide');
            $('.pusher .segment.home').removeClass('hide');
        });
        $('.contact.item').on('click', () => {
            $('.pusher .segment.contact').removeClass('hide');
            $('.pusher .segment').addClass('hide');
            $('.pusher .segment.contact').removeClass('hide');
        });
        $('.faq.item').on('click', () => {
            $('.pusher .segment.faq').removeClass('hide');
            $('.pusher .segment').addClass('hide');
            $('.pusher .segment.faq').removeClass('hide');
        });
        $('.schedule.item').on('click', () => {
            $('.pusher .segment.schedule').removeClass('hide');
            $('.pusher .segment').addClass('hide');
            $('.pusher .segment.schedule').removeClass('hide');
        });
        $('.meet.item').on('click', () => {
            $('.pusher .segment.meet').removeClass('hide');
            $('.pusher .segment').addClass('hide');
            $('.pusher .segment.meet').removeClass('hide');
        });
    }
);

function initializeAttributes() {
    $('.pusher .segment.contact').addClass('hide');
    $('.pusher .segment.faq').addClass('hide');
    $('.pusher .segment.schedule').addClass('hide');
    $('.pusher .segment.meet').addClass('hide');
}