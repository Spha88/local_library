const Author = require('../models/author');

// Display list of all Authors.
exports.author_list = (req, res) => {
    res.send('NOT IMPLEMENTED: Author list');
};

// Display detail page for a specific author.
exports.author_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display Author create form on GET.
exports.author_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST.
exports.author_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET.
exports.author_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author update on POST.
exports.author_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Author update POST');
};