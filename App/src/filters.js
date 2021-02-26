import Vue from "vue";

/* Make Uppercase */
Vue.filter("upperCase", v => {
	return v.toUpperCase();
});

/* Short Text */
Vue.filter(
	"short",
	(val, textLength, lastText) => val.substring(0, textLength) + lastText
);
