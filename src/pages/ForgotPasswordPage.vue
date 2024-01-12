<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handlerPasswordForget">
      <p class="col-12 text-h5 text-center">Forgot Password</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input label="Email" v-model="email" />
        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
            class="full-width"
            label="Send Reset Email"
            color="red"
            rounded
            outlined
            type="submit"
          />
          <q-btn
            class="full-width"
            label="Back"
            color="dark"
            rounded
            flat
            :to="{ name: 'login' }"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import useAuthUser from "src/composables/UseAuthUser";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ForgotPasswordPage",
  setup() {
    const { sendPasswordRestEmail } = useAuthUser();

    const email = ref("");

    const handlerPasswordForget = async () => {
      try {
        // debugger
        await sendPasswordRestEmail(email.value);
        alert(`Password reset email sent to: ${email.value}`);
      } catch (error) {
        alert(error.message);
      }
    };

    return {
      email,
      handlerPasswordForget,
    };
  },
});
</script>
