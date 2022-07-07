<template>
  <div class="login-wrap">
    <div class="login-form">
      <div class="login-logo">
        <router-link to="/home" title="G3 Trasportation">
          <img src="@/assets/images/login-logo.png" alt="G3 Trasportation" />
        </router-link>
      </div>
      <form>
        <v-row>
          <v-col>
            <v-text-field label="User Name">
              <template v-slot:append>
                <v-icon><img src="@/assets/images/user.png" alt="User" width="24"
                  height="24"></v-icon>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
      </form>
    </div>
  </div>
</template>

<script>
// <!-- import user from "@/assets/images/user.png"; -->
export default {
  name: "LoginPage",
  // components: {
  //   user,
  // },
  data: () => ({}),
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.login-wrap {
  background-image: url("@/assets/images/login-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-form {
    width: 603px;
    margin: 20px auto;
    background: #fff;
    padding: 36px 60px 43px;
    @include border-radius(5px);
    @include box-shadow(5px, 5px, 32px, $shadow);
  }
  .login-logo {
    display: block;
    text-align: center;
    margin-bottom: 53px;
    a {
      display: inline-block;
    }
  }
}
</style>