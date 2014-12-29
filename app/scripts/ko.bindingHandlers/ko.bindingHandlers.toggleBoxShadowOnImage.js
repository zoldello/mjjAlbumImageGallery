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

	window.ko.bindingHandlers.toggleBoxShadowOnImage = {
		init: function (element) {

			$(element).on('change', function () {
				var $this = $(this),
					isChecked = $this.is(':checked');

				$('[role="imageContainer"]')[isChecked ? 'addClass' : 'removeClass']('greenBoxShadow');
			});
		}
	};
});
