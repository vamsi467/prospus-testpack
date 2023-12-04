<template>
  <div class="message" :class="messageType">
    <div v-if="messageType === 'sent'" class="message__avatar">
      <img :src="user.image" />
    </div>

    <div class="message__title">
      <h4 v-if="messageType === 'sent'">{{ user.fullName }}</h4>
      <div>{{ message.body }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useUserDetails } from "@/utils/user";
  import { computed, defineProps, PropType } from "vue";
  import { IMessage, IUser } from "@/types/user";

  const props = defineProps({
    user: {
      type: Object as PropType<IUser>,
      required: true,
    },
    message: {
      type: Object as PropType<IMessage>,
      required: true,
    },
    messageType: {
      type: String as PropType<"sent" | "received">,
      required: true,
    },
  });
  const user = computed(() => {
    return useUserDetails(props.user);
  });
</script>

<style lang="scss" scoped>
  .sent {
    box-shadow: 0 1px 5px 0 #ddd;
    background-color: lightblue;
    border-radius: 0px 10px 10px 10px;
    border: unset;
  }
  .received {
    box-shadow: 0 1px 5px 0 hsl(0deg 0% 62% / 80%);
    color: black;
    border-radius: 10px 0 10px 10px;
    border: unset;
    background-color: lightgreen;
    align-self: flex-end;
  }
  .message {
    display: flex;
    padding: 0.5rem;
    margin: 1rem;
    max-width: 20rem;

    &__avatar {
      width: 3rem;
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 0.25rem;

      img {
        width: 3rem;
        border: 1px solid black;
        height: 3rem;
        border-radius: 100%;
      }
    }
  }
</style>
