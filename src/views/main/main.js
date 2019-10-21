export default {
  name: "app",
  data() {
    return {
      navIndex: "1"
    };
  },
  watch: {
    $route: {
      handler() {
        this.navIndex = this.$route.meta.navIndex;
      },
      immediate: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleLogout() {
      this.$cookie.delete('login-token');
      this.$router.replace({
        name: 'login'
      })
    }
  }
};