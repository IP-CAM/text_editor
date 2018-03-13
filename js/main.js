/**
 * Created by RomancTuras on 8/8/2017.
 */
$( document ).ready(function() {
    console.log( "ready!" );
    
    //inserting all pasted text as plain text
    $('#editor').bind('paste', function(event){
        event.preventDefault();
        var clipboardData = event.originalEvent.clipboardData.getData('text/plain');
        // clipboardData.replaceAll("<[^>]*>", "");
        document.execCommand("inserttext", true, clipboardData);
        console.log(clipboardData);
    });
});

//Pattern of headers for description of the product
function erasePattern() {
    console.log('erasing');
    var txt = '<p class="pattern">Характеристики:</p>' +
        '<br>' +
        '<br>' +
        '<br>' +
        '<p class="pattern"> Особенности:</p>' +
        '<br>' +
        '<br>' +
        '<br>' +
        '<p class="remark">* Характеристики и комплектация товара могут изменяться производителем без уведомления</p>';
    $('#editor').html(txt);
}