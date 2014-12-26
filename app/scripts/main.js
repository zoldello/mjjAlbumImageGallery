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
	'./ko.bindingHandlers/ko.bindingHandlers.showDefaultCarousel'], function(ko, $, _, data, viewModel, twitterBootstrap) {
	var before = function (data) {
			var i = 0;
		},
		success = _.bind(function (data) {
			var vm = viewModel();

			vm.imagesModel(data.photos.photo);	
			window.mjjSongGallery = window.mjjSongGallery || {}; // app namespace
			window.mjjSongGallery.viewModel = vm;

			window.ko.applyBindings(window.mjjSongGallery.viewModel);

		}, { viewModel: viewModel}),
		error = function (data) {
			var i = 0;
		},
		complete = function (data) {
			var i = 0;
		};

		window.ko = window.ko || ko;

		data.images(before, success, error, complete)

});