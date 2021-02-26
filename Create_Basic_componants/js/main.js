/*global console , $*/



Vue.component('app-count' ,{

	data: function(){

		return {

			name:'Mohmad',
			count:0
		}

	},

	template:'<p @click="count++">Hello {{ name }} Your Count Is: {{ count }}</p>'


})


// This Must Be Found To Work The Vue 
var vm = new Vue({

	el: '.head'

})