<template>
  <section class="chat">
    <ChatUsersList class="chat__list" :users="USERS" @selected="selectUser"></ChatUsersList>
    <ChatMessages
      v-if="selectedUser"
      class="chat__messages"
      :user="selectedUser"
      :messages="MESSAGES"
    ></ChatMessages>
  </section>
</template>

<script setup lang="ts">
  import ChatUsersList from "@/components/chat/ChatUsersList.vue";
  import ChatMessages from "@/components/chat/ChatMessages.vue";

  import { USERS } from "@/fixtures/users";
  import { MESSAGES } from "@/fixtures/messages";
  import { ref } from "vue";
  import { IUser } from "@/types/user";
  const selectedUser = ref<IUser | null>(null);
  const selectUser = (user: IUser) => {
    selectedUser.value = user;
  };
</script>

<style lang="scss" scoped>
  .chat {
    display: flex;
    height: 100%;
    &__list {
      max-width: 20rem;
    }
    &__messages {
      flex-grow: 1;
    }
  }
</style>
