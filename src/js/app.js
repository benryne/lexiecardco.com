import 'bootstrap';
import '../scss/style.scss';
import $ from 'jquery';
import AOS from 'aos';
// import 'aos/dist/aos.css';

AOS.init();
setTimeout(() => {AOS.refresh();}, 500);

$( "div.products-card" ).hover(
    function() {
        var styles = {
            padding: "0px",
            height: "100%",
            width: "100%",
            padding: "0",
            position: "absolute",
            left: "0%"
        };

        var styles2 = {
            position: "absolute",
            color: "white",
            padding: "10%",
            'z-index': "10"
        };
        $( this ).children(".check").show();
        $( this ).children(".products-card-image-container").css(styles);
        $( this ).children(".products-card-title").css(styles2);
        $( this ).children(".products-card-image-container").children(".products-card-image").addClass("xd");

    }, function() {
        var styles = {
            height: "250px",
            width: "100%",
            padding: "10%",
            position: "relative"
        };
        var styles2 = {
            position: "relative",
            color: "black",
            padding: "0px 10%",
            'z-index': "1"
        };
        $( this ).children(".check").hide();
        $( this ).children(".products-card-image-container").css(styles);
        $( this ).children(".products-card-title").css(styles2);
        $( this ).children(".products-card-image-container").children(".products-card-image").removeClass("xd");
    }
);

$( "div.products-card-middle" ).hover(
    function() {
        var styles = {
            padding: "0px",
            height: "100%",
            width: "100%",
            padding: "0",
            position: "absolute",
            left: "0%"
        };

        var styles2 = {
            position: "absolute",
            color: "white",
            padding: "10%",
            'z-index': "10"
        };
        $( this ).children(".check").show();
        $( this ).children(".products-card-image-container").css(styles);
        $( this ).children(".products-card-title").css(styles2);
        $( this ).children(".products-card-image-container").children(".products-card-image").addClass("xd");

    }, function() {
        var styles = {
            height: "250px",
            width: "100%",
            padding: "10%",
            position: "relative"
        };
        var styles2 = {
            position: "relative",
            color: "black",
            padding: '0px 10%',
            'z-index': "1"
        };
        $( this ).children(".check").hide();
        $( this ).children(".products-card-image-container").css(styles);
        $( this ).children(".products-card-title").css(styles2);
        $( this ).children(".products-card-image-container").children(".products-card-image").removeClass("xd");
    }
);

$( "div.blog-card" ).hover(
    function() {
        $( this ).children(".blog-card-text").children(".blog-card-subtext").hide();
        $( this ).children(".blog-card-text").children(".blog-card-check").show();
    },
    function() {
        $( this ).children(".blog-card-text").children(".blog-card-subtext").show();
        $( this ).children(".blog-card-text").children(".blog-card-check").hide();
    }
);
