<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">
          <a href="/">Страница модальных окон</a><br>
          <!-- modal with validate -->
          <button class="btn btnPrimary" @click="signIn = !signIn">sign In</button>
          <signIn v-show="signIn" @close="signIn = false" @change-modal="signIn = false;signUp = true"/>

          <!-- modal with validate -->
          <button class="btn btnPrimary" @click="signUp = !signUp">sign Up</button>
          <signUp v-show="signUp" @close="signUp = false" @change-modal="signUp = false;signIn = true"/>

        </div>
      </section>


    </div>
  </div>
</template>

<script>
import modals from '@/components/UI/Modal.vue'
import signIn from '@/components/SignIn.vue'
import signUp from '@/components/SignUp.vue'

export default {
  components: { modals, signIn,  signUp},
  data () {
    return {
      signIn: false,
      signUp: false
    }
  },
  methods: {}
}
</script>
