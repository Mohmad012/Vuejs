/*global console , $*/

/*
	Method ==> This Use When Is Found Function Will Be Work When I Make Event Like ==>[ Click Or Hover Or ... ]
		   ==> Wright In HTML Page Like This [ namefunction() ]
		   ==> This Will Run Olways
		   ==> This When You Make Rerender Will Do Run Olso
	
	Computed ==> This Is Like Methods But It Is Different In Same Points:
			 	==> This Use When Is Found Function Will Be Work After Reload To Browese Direct
			 	==> Wright In HTML Page Like This [ namefunction ]
			 	==> This Will Run One Time [ This Make Cache In Browser ]
			 	==> This When You Make Rerender Will Not Do Run
	
*/

// This Must Be Found To Work The Vue 
var vm = new Vue({

            el: '.head',
            data: {
                age: 23,
                firstName: 'Mohmad',
                lastName: ' Gamal',
                finalLang: '',
                'username': '',
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

            methods: {

                calc3: function() {

                    console.log('Run From Method');
                    return this.age * 3

                },

                nameing: function() {

                    console.log('Run');
                    return this.firstName + ' ' + this.lastName
                },
                validationName1: function() { // This Will Do Validation All Time Each Do Render

                    if (!this.username) {

                        return ' Username Cant Be Empty';

                    } else if (this.username.length < 8) {

                        return 'Username Is Too Short';

                    } else if (!isNaN(this.username)) {

                        return 'Username Cant Be Numbers'

                    } else {

                        return 'Hello ' + this.username + ' EvryTHing Is Good';
                    }
                }
            }

                computed: {

                    calc6: function() {

                        console.log('Run From Computed');
                        return this.age * 6

                    },

                    nameing1: function() {

                        console.log('Run');
                        return this.firstName + ' ' + this.lastName
                    },

                    filterLanguages: function() {

                        var filtering = new RegExp(this.finalLang, 'i');
                        return this.languages.filter((el) => el.match(filtering));
                    },

                    validationName: function() { // This Will Do Validation After Do One Render Only

                        if (!this.username) {

                            return ' Username Cant Be Empty';

                        } else if (this.username.length < 8) {

                            return 'Username Is Too Short';

                        } else if (!isNaN(this.username)) {

                            return 'Username Cant Be Numbers'

                        } else {

                            return 'Hello ' + this.username + ' EvryTHing Is Good';
                        }
                    }
                }



            })