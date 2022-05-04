<template>
  <div class="bg-gradient-to-r from-violet-500 to-fuchsia-500">
    <div class="flex">
      <div class="w-56 bg-black h-full flex-none"></div>
      <nav
        class="w-56 bg-black h-full fixed flex flex-col justify-start items-center"
      >
        <img src="./assets/spotify.png" alt="Spotify" class="w-3/4" />
        <hr class="w-full mt-5 mb-5" />
        <router-link
          to="/"
          class="w-full text-2xl rounded px-3 flex items-center text-center text-white hover:bg-violet-700"
          ><span class="material-icons mr-2">home</span> Home</router-link
        >
        <router-link
          to="/search"
          class="w-full text-2xl rounded px-3 flex items-center text-center text-white hover:bg-violet-700"
          ><span class="material-icons mr-2">search</span>Search</router-link
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
