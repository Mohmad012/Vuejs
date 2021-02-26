/*global console , $*/



Vue.component('app-count' ,{

	data: function(){

		return {

			name:'Mohmad',
			count:0
		}

	},

	props:['source' ,'url'],

	template:'<p @click="count++">Hello {{ name }} Your source From data  Is: {{ source }} And Your URL From data Is: {{ url }}</p>'


})

Vue.component('app-article' ,{

	data: function(){

		return {

			name:'Mohmad',
			count:0
		}

	},

	props:['title','id' , 'auther'], // This Will Make Node Between main data And This Component

	template:'<p @click="count++">Hello {{ name }} Your Title From data  Is: {{ title }} And Your Auther From data Is: {{ auther }} And Your ID From Data Is: {{ id }}</p>'


})


// This Must Be Found To Work The Vue 
var vm = new Vue({

	el: '.head',
	data:{
		source: 'From Net',
		url:'WWW.GOOgle.COM',
		posts:[

			{id: 1 , auther:'mohmad' , title:'Artical One'},
			{id: 2 , auther:'Ali' , title:'Artical Tow'},
			{id: 3 , auther:'Ahmed' , title:'Artical Three'},
			{id: 4 , auther:'Safe' , title:'Artical Four'}
		]
	}

})