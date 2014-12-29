/// ko binding handler for dealing with clicking on an image
window.require.config({
	paths: {
		'jquery': '../../../bower_components/jquery/dist/jquery.min',
		'knockout': '../../bower_components/knockout/dist/knockout'
	}
});

window.require(['knockout', 'jquery'], function(ko, $) {
	'use strict';

	window.ko = window.ko || ko; 

	window.ko.bindingHandlers.paginationClicked = {
		init: function (element, valueAccessor) {
			var $element = $(element),
				value = ko.unwrap(valueAccessor());

			// TODO: Fix this. This needs to be re-considered, it is hacky
			// On creation, the first elment has no siblings. This fact is used to identify it and give it the active-class. The first 
			// element in pagination is active by default
			if ($element.parent().siblings().length === 0) {
				$element.parent().addClass('active');
			} 

			$element.on('click', { value: value }, function (e) {
				var $this = $(this),
					index = $this.data('index'),
					value = e.data.value;

					$this.closest('ul').children().removeClass('active');
					$this.closest('li').addClass('active');

					value(index);
			});
		}
	};
});
