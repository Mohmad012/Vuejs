/*global console , $*/

var vm = new Vue({

	el: '.head',
	data:{
		skiles: [ 'HTML' , 'CSS' , 'Javascript' ],

		completeTest:[

			{
				testName: 'test 1',
				testResult: '80%'
			},

			{
				testName: 'test 2',
				testResult: '70%'
			},

			{
				testName: 'test 3',
				testResult: '90%'
			}

		]
	}

})