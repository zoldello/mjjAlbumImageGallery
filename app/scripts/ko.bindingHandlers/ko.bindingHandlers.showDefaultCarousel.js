/// ko binding handler for dealing with showinf default carousel
window.require.config({
	paths: {
		'jquery': '../../../bower_components/jquery/dist/jquery.min',
		'knockout': '../../bower_components/knockout/dist/knockout'
	}
});

window.require(['knockout', 'jquery'], function(ko, $) {
	'use strict';

	window.ko = window.ko || ko; 

	window.ko.bindingHandlers.showDefaultCarousel = {
		init: function (element) {
			
			$(element).on('click', function() {
				var id = $('[role="albumWrapper"]').first().data('id'); 

				$('[role="carouselCollection"] [role="carouselItem"]').removeClass('active');
				$('[role="carouselItem"][data-id="' + id + '"]').addClass('active')
				$('[role="imageGalleryListing"]').hide();
				$('[role="imageCarousel"]').show();	
			});
		}
	};
});
