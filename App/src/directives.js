import Vue from "vue";

// Make Bold Custom Directive
Vue.directive("bold" , {
	bind:function(el){

		el.style.fontWeight = "bold"
	}
});

// Make Font Size Dynamic Custom Directive
Vue.directive("format" , {
	bind:function(el, binding){

		el.style.fontSize = binding.value + 'px';

		// Bold Modifier
		if (binding.modifiers.bold) {
			el.style.fontWeight = "bold"
		};

		// Color Modifier
		if (binding.modifiers.red) {
			el.style.color = "red";
		};
	}
});