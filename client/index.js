Template.body.helpers({
    answer: function (num) {
        return Session.get(num);
    },
    questions: function () {
        return [1, 2];
    }
});

Template.body.events({
    'click .btn': function (evt) {
        var q = $(evt.target).data('q');
        Session.set(q, AnswerMe(q));
    }
});