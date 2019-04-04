exports.trimName = name => {
    return name.slice(0, name.indexOf(', UPC: '));
}