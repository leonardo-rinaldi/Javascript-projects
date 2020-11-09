$itemButton = $('#showForm');
$itemForm = $('#itemForm');
$addButton = $('#addButton');
$itemDescription = $('#itemDescription');
$list = $('ul');

$itemForm.hide();

/*
    Mostra il form per inserire un nuovo item
*/

$itemButton.on("click", function() {
    $('#newItemButton').hide();
    $itemForm.show();
});

/*
    Aggiunge l'elemento scritto alla lista
*/

$addButton.on("click", function() {
    var text = $itemDescription.val();
    var newListItem = "<li class=\"toDo\"> " + text + "</li>";
    $list.prepend(newListItem);
    $itemDescription.val("");   //elimina quello che ho già scritto nel campo
    $itemForm.hide();
    $('#newItemButton').show();
});

/*
    Se clicco su un elemento ancora da completare esso verrà marcato come 
    completo, altrimenti se lo + già verrà cancellato
*/

$list.on("click", 'li', function() {
    $this = $(this);

    if($this.hasClass('complete')) {
        $this.remove();
    } else {
        $text = $this.text();
        $this.remove();
        var completeElement = "<li class=\"complete\">" + $text + "</li>";
        $list.append(completeElement);
    }
});

