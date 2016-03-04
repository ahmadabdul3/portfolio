$(function() {
	$('.search-input').on('focusin', function() {
		$(this).parent().addClass('focused');
	}).on('focusout', function() {
		$(this).parent().removeClass('focused');
	});

	$('.search-icon-box').on('click', function() {
		var superParent = $(this).parent().parent();
		$(superParent).find('input').focus();
		$(superParent).addClass('focused');
	});
});