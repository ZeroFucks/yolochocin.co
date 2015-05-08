$(document).ready(function() {
    // Switch to soundboard
    $(".poopdiv").click(function () {
        $(this).hide();
        $(".soundboard").show();
    });

    // Player
    $(".board-button").click(function () {
        var mp3 = $(this).attr("data-mp3")
        $("#player").attr("src", mp3)
        $("#player")[0].play()
    });

    // Preload some music
    $(".board-button").each(function () {
        var mp3 = $(this).attr("data-mp3");
        $.ajax({
            url: mp3,
            type: 'GET',
            success: function(res) {}
        });
    });
});
