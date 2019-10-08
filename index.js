var imgselected = '';
var playerselected = 0;
var gamestart = 0;


$('button').hover(
    function(){
        $('.game-box').css('background-image',$(this).attr('imgsrc'));
    },
    function(){
        $('.game-box').css('background-image',imgselected);        
    }
);

$('.btn-arena').on('click', function(){
    $('.game-box').css('background-image',$(this).attr('imgsrc'));
    imgselected = $(this).attr('imgsrc');
});

$('.btn-next').on('click', function(){
    if(imgselected == ''){
        alert('Please select an arena.')
    }
    else{
        $('.arena').css('display','none');
        $('.player').css('display','inline-block');
    }
});

$('.select-one').change(function(){
    $(".player-one").remove()
    $(".game-box").append('<img class="player-one" src=\"' + $(this).val() + '\"></img>');
    playerselected++;
});

$('.select-two').change(function(){
    $(".player-two").remove()
    $(".game-box").append('<img class="player-two" src=\"' + $(this).val() + '\"></img>');
    playerselected++;
});

$('.btn-next2').on('click', function(){
    if(playerselected < 2){
        alert('Please select an player.')
    }
    else{
        $('.player').css('display','none');
        gamestart = 1;
    }
});

var oneX = 0; oneY = 0;
var twoX = 0; twoY = 0;

function drawPlayerTwo(twoX, twoY){
    $(".player-two").css('right', twoX);
    $(".player-two").css('bottom', twoY);
}

$(document).keydown(function(e){
    if(gamestart < 1){
        return;
    }
    if(e.code == 'ArrowUp' && twoY < 360){
        twoY += 20;
    }
    if(e.code == 'ArrowDown' && twoY > 0){
        twoY -= 20;
    }
    if(e.code == 'ArrowRight' && twoX > 0){
        twoX -= 20;
    }
    if(e.code == 'ArrowLeft' && twoX < 700){
        twoX += 20;
    }
drawPlayerTwo(twoX,twoY);
});

function drawPlayerOne(twoX, twoY){
    $(".player-one").css('left', oneX);
    $(".player-one").css('bottom', oneY);
}

$(document).keydown(function(e){
    if(gamestart < 1){
        return;
    }
    if(e.code == 'KeyW' && oneY < 360){
        oneY += 20;
    }
    if(e.code == 'KeyS' && oneY > 0){
        oneY -= 20;
    }
    if(e.code == 'KeyA' && oneX > 0){
        oneX -= 20;
    }
    if(e.code == 'KeyD' && oneX < 700){
        oneX += 20;
    }
drawPlayerOne(twoX,twoY);
});