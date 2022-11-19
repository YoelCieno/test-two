<script setup lang="ts">
// import { RouterLink } from 'vue-router'

defineProps<{ admin: boolean }>()

</script>
<template>
      <nav>
        <a href="/">Home</a>
        <span class="separator"> | </span>
        <a href="/about">About</a>
        <span class="separator"> | </span>
        <a href="/todo">Todo</a>
        <span class="separator"> | </span>
        <a id="profile" href="/profile">My Profile</a>
        <template v-if="admin">
          <span class="separator"> | </span>
          <a id="admin" href="/admin">Admin</a>
        </template>
      </nav>
</template>
<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav .separator {
  color: var(--color-border);
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav RouterLink {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
