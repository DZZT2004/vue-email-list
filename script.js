const app = new Vue({
    el: '.root',
    data: {
        emailArr: []
    },
    methods: {
        generaEmail(){
            this.emailArr = [];
            for (let index = 0; index < 10; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(ax =>{
                    this.emailArr.push(ax.data.response)
                });  
            }
            console.log(this.emailArr)
        }
    }
}) 