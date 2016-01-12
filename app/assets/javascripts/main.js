(function ($) {

    function getRel(num) {
        $.ajax({
            metdhod: 'GET',
            url: 'baby-steps.json',
            dataType: 'json',
        })
            .done(function (info) {
                var text = [],
                    message = '';

                info.friends.filter(function(value) {

                    if(value.babyStep == num) {
                        text.push( '<a href="#">' + value.firstName + ' ' + value.lastName + '</a>');
                    }
                });

                switch (text.length) {
                    case 0:
                        message = '';
                    break;
                    case 1:
                        message = (text.join('') + ' is also in Baby Step ' + num);
                    break;
                    case 2:
                        message = (text.join('') + ' are also in Baby Step ' + num);
                    break;
                    case 3:
                        message = (text.slice(0, 2).join('') + ' and 1 other friend also in Baby Step ' + num);
                    break;
                    default:
                        var tempCounter = text.length - 2;
                        message = (text.join('') + ' and ' + tempCounter + 'other friends are also in Baby Step ' + num);
                    break;
                }

                $('#additional-message').html(message);
            })
            .fail(function () {

            });
    }

    $('.baby-steps-list .baby-steps-item a').on('click', function(e) {
        e.preventDefault();
        var related = $(this).attr('data-rel');

        $('.content-container:not([data-rel = "' + related +'"])').addClass('hidden');
        $('.content-container[data-rel = "' + related +'"]').removeClass('hidden');

        $('.baby-steps-list .baby-steps-item.active').removeClass('active');

        $(this)
            .closest('.baby-steps-item')
                .addClass('active');

        getRel(related);
    })


    $(window).ready(function() {
        var activeNum = 1;
        if(!$('.baby-steps-list .baby-steps-item.active').length) {
            $($('.baby-steps-list .baby-steps-item')[0]).addClass('active');
        } else {
            activeNum = $('.baby-steps-list .baby-steps-item.active')
                            .find('a').attr('data-rel');
        }

        $('.content-container:not([data-rel = "' + activeNum +'"])').addClass('hidden');
        $('.content-container[data-rel = "' + activeNum +'"]').removeClass('hidden');

        getRel(activeNum);
    });

})(jQuery);
