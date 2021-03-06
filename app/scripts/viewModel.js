/// Knockout.js view model for the page
window.define(['../bower_components/knockout/dist/knockout.js'], function(ko) {
		'use strict';
		
	var viewModel = function() {
		var self = {};

			//Models						
			self.imagesModel = ko.observableArray([]);

			self.imageToDisplayModel = ko.pureComputed(function imageToDisplayModel() {
				var maxIndex = (self.paginationDivision * (self.currentPaginationNumber() + 1)) - 1,
					minIndex = maxIndex - (self.paginationDivision - 1);

					return ko.utils.arrayFilter(self.imagesModel(), function(item, index) {
						if (index >= minIndex && index <= maxIndex) {
							return item;
						}
					});
			});


			// Pagination
			self.paginationDivision = 24; 
			
			self.currentPaginationNumber = ko.observable(0);
			
			self.pagination = ko.observableArray();

			self.updatePagination = ko.computed(function pagination () {
				var count = Math.ceil(self.imagesModel().length / self.paginationDivision),
					i = 0;

				for (i=0; i< count; i++) {
					self.pagination.push(i + 1);
				}
			});

			self.updateCurrentPaginaton = function selectImageToDisplayRange(value) {
				var index = parseInt(ko.unwrap(value), 10);

				if (typeof index !== 'number') {
					if (!!console.error) { 
						console.error('The pagination index is not a number.');
					}

					return;
				}

				self.currentPaginationNumber(index);
			};

			// image activity
			self.getImageUrl = function getImageUrl(model) {
				return 'https://c4.staticflickr.com/' + model.farm + '/' + model.server + '/' + model.id + '_' + model.secret + '.jpg';
			};

			// Miscellenous
			self.convertValueToYesOrNo = function convertValueToYesOrNo(value) {
				var yesOrNo,
					no = 'No',
					yes = 'Yes';

				switch(value){

					case true:
					case '1':
					case 1:
						yesOrNo = yes;
						break; 
					case 0:
					case '0':
					case false:
						yesOrNo = no;
						break; 
					default:
						yesOrNo = 'N/A';
						break;
				}

				return yesOrNo;
			};

		return self; 
	};

	return viewModel;
});