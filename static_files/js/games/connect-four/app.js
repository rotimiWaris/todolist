
$(document).ready(function () {
    // TODO: Draw a grid
    const connectFour = new ConnectFour('#grid');

    connectFour.onPlayerMove = function () {
        $('#current-player').text(connectFour.player);
    }

    $('#refresh').click(function () {
        connectFour.refresh();
    })
});