Mousetrap.bind('enter', function () {
    loadsoal(<?=$id_mapel . "," . $id_siswa . "," . $no_next . ",1"?>);
});

Mousetrap.bind('right', function () {
    loadsoal(<?=$id_mapel . "," . $id_siswa . "," . $no_next . ",1"?>);
});

Mousetrap.bind('left', function () {
    loadsoal(<?=$id_mapel . "," . $id_siswa . "," . $no_prev . ",1"?>);
});

Mousetrap.bind('a', function () {
    $('#A').click()
});

Mousetrap.bind('b', function () {
    $('#B').click()
});

Mousetrap.bind('c', function () {
    $('#C').click()
});

Mousetrap.bind('d', function () {
    $('#D').click()
});

Mousetrap.bind('e', function () {
    $('#E').click()
});

Mousetrap.bind('space', function () {
    $('input[type=checkbox]').click()
});
