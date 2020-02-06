$(document).ready(function () {
    $('.t_r_1').hover(function () {
        $('#tstar_1').css("display", "block");
    }, function () {
        $('#tstar_1').css("display", "none");
    });

    $('.t_r_2').hover(function () {
        $('#tstar_2').css("display", "block");
    }, function () {
        $('#tstar_2').css("display", "none");
    });

    $('.t_r_4').hover(function () {
        $('#tstar_4').css("display", "block");
    }, function () {
        $('#tstar_4').css("display", "none");
    });
});

$(document).ready(function () {
    $('#b_1').hover(function () {
        $('#star_1').css("display", "block");
    }, function () {
        $('#star_1').css("display", "none");
    });

    $('#b_2').hover(function () {
        $('#star_2').css("display", "block");
    }, function () {
        $('#star_2').css("display", "none");
    });

    $('#b_3').hover(function () {
        $('#star_3').css("display", "block");
    }, function () {
        $('#star_3').css("display", "none");
    });

    $('#b_4').hover(function () {
        $('#star_4').css("display", "block");
    }, function () {
        $('#star_4').css("display", "none");
    });

    $('#b_5').hover(function () {
        $('#star_5').css("display", "block");
    }, function () {
        $('#star_5').css("display", "none");
    });

    $('#b_6').hover(function () {
        $('#star_6').css("display", "block");
    }, function () {
        $('#star_6').css("display", "none");
    });

    $('#b_7').hover(function () {
        $('#star_7').css("display", "block");
    }, function () {
        $('#star_7').css("display", "none");
    });

    $('#b_8').hover(function () {
        $('#star_8').css("display", "block");
    }, function () {
        $('#star_8').css("display", "none");
    });

    $('#b_9').hover(function () {
        $('#star_9').css("display", "block");
    }, function () {
        $('#star_9').css("display", "none");
    });

    $('#b_10').hover(function () {
        $('#star_10').css("display", "block");
    }, function () {
        $('#star_10').css("display", "none");
    });

    $('#b_11').hover(function () {
        $('#star_11').css("display", "block");
    }, function () {
        $('#star_11').css("display", "none");
    });
});



$(document).ready(function () {
    $('.t_r_3').mouseover(function () {
        $('#tstar_3').css("display", "block");
        $('.bottom_bg').css("display", "block");
        $('.b_i').css("display", "block");
    });

    $('#header').mouseleave(function () {
        $('.bottom_bg').css("display", "none");
        $('.b_i').css("display", "none");
        $('#tstar_3').css("display", "none");
    });

    $('.t_r_1,.t_r_2,.t_r_4').mouseover(function () {
        $('#tstar_3').css("display", "none");
        $('.bottom_bg').css("display", "none");
        $('.b_i').css("display", "none");
    });
});

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
