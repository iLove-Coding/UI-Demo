export default {
  data () {
    return {
      inputAccount: '',
      inputPwd: ''
    }
  },
  mounted () {
  },
  methods: {
    loginHandle() {
      console.log(this.inputAccount, this.inputPwd);
      this.$cookie.set('login-token', '12345', 1);
      this.$router.replace({
        name: 'Main'
      })
    }
  }
}