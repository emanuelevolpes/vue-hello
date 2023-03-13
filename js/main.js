'use strict';

const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        image: 'img/evan-you.jpg'
      }
    }
  }).mount('#app');