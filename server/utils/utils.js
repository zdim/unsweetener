exports.trimName = name => {
    var upcFoundAt = name.indexOf(', UPC: ');
    if(upcFoundAt > 0) {
        name = name.slice(0, upcFoundAt);
    }

    var unpreparedFoundAt = name.indexOf(', UNPREPARED');
    if(unpreparedFoundAt > 0) {
        name = name.slice(0, unpreparedFoundAt);
    }

    var preparedFoundAt = name.indexOf(', PREPARED');
    if(preparedFoundAt > 0) {
        name = name.slice(0, preparedFoundAt);
    }
    return name;
            //.slice(0, name.indexOf(', UPC: '))
            //.slice(0, name.indexOf(', UNPREPARED, '))
            //.slice(0, name.indexOf(', PREPARED, '));
}