$(document).ready(
    () => {
        /*$('.ui.sticky')
            .sticky({
                context: '#top'
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