/*jslint browser: true*/
/*global $, jQuery*/


$(document).ready(function () {
	"use strict";
	$('ul.tabs li').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li', '.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	});

});

