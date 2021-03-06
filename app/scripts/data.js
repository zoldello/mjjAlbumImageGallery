/// data used by application
window.require.config({
	paths: {
		'jquery': '../../bower_components/jquery/dist/jquery.min',
	}
});

window.define(['jquery'], function ($) {
	'use strict';
	
	window.$ = window.$ || $;

	var  data = {
		_url: function() {
			var key = '8d964ebf3f04d8b592a1296225ca2d33',
				userId = '23065440@N03'; // Not a security problem! This is used as per Flickr's convention

			return 'https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=' + key + '&user_id=' + userId + '&format=json&nojsoncallback=1';
		},

		images: function (before, success, error, complete) {
			//to satisfy IE 9: http://stackoverflow.com/a/15066169/178550

			window.$.support.cors = true;

			window.$.ajax({
				url: this._url(),
				crossDomain: true,
				type: 'GET',
				dataType: 'JSON',
				before: before,
				success: success,
				error: error, 
				complete: complete
			});
		} 
	};

	return data;
});