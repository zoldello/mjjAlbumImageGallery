/// ko component for handling meta data
window.require(['../../../bower_components/knockout/dist/knockout.js'], function (ko) {
	ko.components.register('metaDataTable', {
    	viewModel: function($root) {
    		this.$root = $root;
    	},
    	template: '<table class="table table-bordered table-striped" style="display:none;" data-bind="visible: $root.isImageSelected">
            <caption>
              Picture Information
            </caption>
            <tr>
              <td>Id</td>
              <td><span data-bind="text: $root.currentSelectedImageModelToDisplay().id"></span></td>
            </tr>
            <tr>
              <td>Title</td>
              <td><span data-bind="text: $root.currentSelectedImageModelToDisplay().title"></span></td>
            </tr>
            <tr>
              <td>Publicly Accessible?</td>
              <td><span data-bind="text: $root.convertValueToYesOrNo($root.currentSelectedImageModelToDisplay().ispublic)"></span></td>
            </tr>
            <tr>
              <td>Friend-Visible?</td>
              <td><span data-bind="text: $root.convertValueToYesOrNo($root.currentSelectedImageModelToDisplay().isfriend)"></span></td>
            </tr>
            <tr>
              <td>Family-Visble?</td>
              <td><span data-bind="text: $root.convertValueToYesOrNo($root.currentSelectedImageModelToDisplay().isfamily)"></span></td>
            </tr>
		</table>'
});