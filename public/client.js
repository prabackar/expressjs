$(function () {
	
	$.get('/blocks', appendToList);

/********************/
/* Chapter 2 */
/********************/
	/*
	function appendToList(blocks) {
		var list = [];
		for(var i in blocks) {
			list.push($('<li>', {text: blocks[i]}));
		}
		$('.block-list').append(list);
	}*/

/********************/
/* Chapter 4 */
/********************/
	function appendToList(blocks) {
		var list = [];
		var content, block;
		for(var i in blocks) {
			block = blocks[i];
			content = '<a href="/blocks/' + block + '">' + block + '</a>' +
			'<a href="#" data-block="' + block + '"><img class="delete" src="delete.jpg"></a>';
			list.push($('<li>', {html: content}));
		}
		$('.block-list').append(list);
	}	

	$('form').on('submit', function(event) {
		event.preventDefault();
		var form = $(this);
		var blockData = form.serialize();
		$.ajax({
			type: 'POST',
			url: '/blocks',
			data: blockData
		}).done(function(blockName) {
			appendToList([blockName]);
			form.trigger('reset');
		})
	});

	$('.block-list').on('click', 'a[data-block]', function(event) {
		if (!confirm('Are you sure?')) {
			return false;
		}

		var target = $(event.currentTarget);

		$.ajax({
			type: 'DELETE', url: '/blocks/' + target.data('block')
		}).done(function(){
			target.parent('li').remove();
		});
	});

/********************/
/* Chapter 5 */
/********************/	


});