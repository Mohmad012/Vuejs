/*global console , $*/

/*
	
*/

// This Must Be Found To Work The Vue 
var vm = new Vue({

	el: '.head',
	data:{
		age:23,
		eg:0,
		sar:0,
		hour:0,
		minute:0,
		second:0,
		languages: [
			'HTML',
			'CSS',
			'Javascript',
			'PHP',
			'MySQL',
			'Python',
			'C#',
			'Java'
		]
	},

	methods:{

	},

	computed:{

	},

	watch:{ // This Will Make Change At Once

		hour: function(v){

			this.minute = v * 60;
			console.log('Run Hour');
		},
		minute: function(v){

			this.hour = v / 60;
			this.second = v * 60;
			console.log('Run Minute');
		},
		second: function(v){

			this.minute = v / 60;
			console.log('Run Second');
		}
	}


})