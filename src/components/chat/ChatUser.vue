<template>
  <div class="chat-user">
    <div class="chat-user__avatar">
      <img :src="image" />
    </div>

    <div class="chat-user__title">
      <strong>{{ fullName }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useUserDetails } from "@/utils/user";
  import { defineProps, PropType } from "vue";
  import { IUser } from "@/types/user";

  const props = defineProps({
    user: {
      type: Object as PropType<IUser>,
      required: true,
    },
  });
  const { fullName, shortName, image } = useUserDetails(props.user);
</script>

<style lang="scss" scoped>
  .chat-user {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid black;

    &__avatar {
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
      border: 1px solid black;

      img {
        width: inherit;
        height: inherit;
        border-radius: inherit;
      }
    }
  }
</style>
