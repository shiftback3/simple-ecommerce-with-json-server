<template>
  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  <router-view />
</template>

<script>
// import Header from "./../components/ui/Header.vue";
// import Navbar from "./../components/ui/Navbar.vue";
// import Sidebar from "./../components/ui/Sidebar.vue";
// import Footer from "./../components/ui/Footer.vue";
import Home from "./../components/ui/Footer.vue";

export default {
  name: "Layout",
  components: {
    // AppNavbar: Navbar,
    // AppSidebar: Sidebar,
    // AppHeader: Header,
    // AppFooter: Footer
    AppFooter: Home,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
