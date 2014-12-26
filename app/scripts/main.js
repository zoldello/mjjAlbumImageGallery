/// require.js' main file. It does page initializations
window.require.config({
	paths: {
		'jquery': '../../bower_components/jquery/dist/jquery.min',
		'underscore': '../../bower_components/underscore/underscore-min',
		'twitter-bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap.min'
	}
});


window.require(['../bower_components/knockout/dist/knockout.js', 
	'jquery', 
	'underscore', 
	'data', 
	'viewModel', 
	'twitter-bootstrap', 
	'./ko.bindingHandlers/ko.bindingHandlers.imageClick',
	'./ko.bindingHandlers/ko.bindingHandlers.closeImageCarousel',
	'./ko.bindingHandlers/ko.bindingHandlers.showDefaultCarousel',
	'./ko.bindingHandlers/ko.bindingHandlers.affixOptions'], function(ko, $, _, data, viewModel) {
		'use strict';
		


	var before = function () {
		},
		success = _.bind(function (data) {
			var vm = viewModel();

			vm.imagesModel(data.photos.photo);	
			window.mjjSongGallery = window.mjjSongGallery || {}; // app namespace
			window.mjjSongGallery.viewModel = vm;

			window.ko.applyBindings(window.mjjSongGallery.viewModel);

		}, { viewModel: viewModel}),
		error = function () {
			console.error('Could not get image-data');
		},
		complete = function () {
		};

		window.ko = window.ko || ko;
		window.$ = window.$ || $;

		data.images(before, success, error, complete);

});