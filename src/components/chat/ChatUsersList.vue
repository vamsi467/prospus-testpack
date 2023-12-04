<template>
  
  <div class="users">
    <ChatUser v-for="user in users" :key="user.id" :user="user" @click="selectedUser(user)"></ChatUser>
  </div>
</template>
<script setup lang="ts">
  import ChatUser from "./ChatUser.vue";

  import { defineProps, PropType, defineEmits } from "vue";
  import { IUser } from "@/types/user";

  defineProps({
    users: {
      type: Object as PropType<IUser[]>,
      required: true,
    },
  });
  const emit = defineEmits(["selected"]);
  const selectedUser = (user: IUser) => {
    emit("selected", user);
  };
</script>
<style lang="scss">
  .users {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
  }
</style>
