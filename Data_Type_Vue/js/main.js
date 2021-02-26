/*global console , $*/

var vm = new Vue({

	el: '.head',
	data:{
		name: 'Mohmad',
		age: 23,
		skiles:['HTML' , 'CSS' , 'Javascript'],
		issubscribed: false,
		completetest:[
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
				testResult: '60%'
			}

		]
	}

})