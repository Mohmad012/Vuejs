/*global console , $*/

var vm = new Vue({

	el: '.head',
	data:{
		name: 'Mohmad'
	},



	methods: {

		// This Is Normal Function
		word: function(){

			return 'Hello Fom DOM';
		},

		// This Is Function To Access On ===> [ data Object ]
		sayName: function(){

			return this.name
		}
	}

})