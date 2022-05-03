<template>
  <div class="bg-dark h-screen">
    <div class="flex" style="height: 100vh">
      <div class="w-56 bg-black h-full flex-none"></div>
      <nav class="w-56 bg-black h-full flex-none fixed">
        <router-link
          to="/"
          class="w-full rounded px-3 flex items-center justify-start"
          >Home</router-link
        >
        <router-link
          to="/search"
          class="w-full rounded px-3 flex items-center justify-start"
          >Search</router-link
        >
      </nav>
      <div class="w-full h-full relative">
        <router-view class="w-fill sticky top-o p-2" />
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
