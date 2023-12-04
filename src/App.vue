<template>
  <section class="wrapper">
    <header>
      <a href="#default" class="logo">
        <img
          src="https://cdn-bmljn.nitrocdn.com/axdPDBGGSGripjjXdRFbqweeyGUkvXWw/assets/images/optimized/rev-caaced7/prospus.com/wp-content/uploads/2022/09/Prospus-Logo-Black.png"
          alt="Prospus"
        />
      </a>
    </header>
    <main class="wrapper__content">
      <router-view />
    </main>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .wrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    &__content {
      height: calc(100vh - 5rem);
    }
    header {
      overflow: hidden;
      background-color: #f1f1f1;
      padding: 10px 10px;
      a {
        float: left;
        color: black;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 18px;
        line-height: 25px;
        border-radius: 4px;
      }

      img {
        width: 8rem;
      }
    }
  }
</style>
