<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handlerPasswordReset">
      <p class="col-12 text-h5 text-center">Reset Password</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input label="New Password" v-model="password" />
        <div class="full-width q-pt-md q-gutter-y-sm">
          <q-btn
            class="full-width"
            label="Send Reset Email"
            color="red"
            rounded
            outlined
            type="submit"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
debugger;
import useAuthUser from "src/composables/UseAuthUser";
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
debugger
export default defineComponent({
  name: "ResetPasswordPage",

  setup() {
    const { resetPassword } = useAuthUser();
    const router = useRouter();
    const route = useRoute();
    const token = route.query.token;

    const password = ref("");

    const handlerPasswordReset = async () => {
      try {
        await resetPassword(password.value);
        router.push({ name: "login" });
      } catch (error) {
        alert(error.message);
      }
    };

    return {
      password,
      handlerPasswordReset,
    };
  },
});
</script>
