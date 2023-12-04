<template>
  <div>
    <h3 class="title">{{ user.firstName }}</h3>
    <div class="messages">
      <Message
        v-for="(message, index) in messages"
        :key="message.id"
        :message-type="index % 2 === 0 ? 'sent' : 'received'"
        :message="message"
        :user="user"
      ></Message>
    </div>
    <div class="footer">
      <input type="text" />
      <button>Send</button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import Message from "../common/Message.vue";

  import { defineProps, PropType } from "vue";
  import { IMessage, IUser } from "@/types/user";

  defineProps({
    user: {
      type: Object as PropType<IUser>,
      required: true,
    },
    messages: {
      type: Object as PropType<IMessage[]>,
      required: true,
    },
  });
</script>
<style lang="scss">
  .title {
    height: 2rem;
    padding: 0.5rem;
  }
  .messages {
    display: flex;
    flex-direction: column-reverse;
    max-height: calc(100% - 10rem);
    overflow-y: scroll;
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
    input {
      width: 50%;
      padding: 12px 20px;
      margin: 8px;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    button {
      background-color: #4caf50;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }
</style>
