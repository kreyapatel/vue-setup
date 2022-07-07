<template>
  <div class="login-wrap">
    <div class="login-form">
      <div class="login-logo">
        <router-link to="/home" title="G3 Trasportation">
          <img src="@/assets/images/login-logo.png" alt="G3 Trasportation" />
        </router-link>
      </div>
      <v-form>
        <v-row>
          <v-col>
            <v-text-field
              label="User Name"
              placeholder="Enter your user name"
              class="custom-input"
              persistent-placeholder="true"
            >
              <template v-slot:append>
                <img src="@/assets/images/user.png" alt="User" />
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              class="custom-input"
              v-model="password"
              :append-icon="login ? 'mdi-eye' : 'mdi-eye-off'"
              :type="login ? 'text' : 'password'"
              label="Password"
              placeholder="Password"
              persistent-placeholder="true"
              @click:append="login = !login"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="checkbox-password-wrap">
          <v-col>
            <v-checkbox
              v-model="checkbox"
              class="custom-checkbox"
              color="white"
            >
              <template v-slot:label>Remember me</template>
            </v-checkbox>
          </v-col>
          <v-col>
            <div class="forgot-password">
              <a href="#">Forgot your password?</a>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn block tile class="primary-btn link-inside">
              <router-link to="/home">Sign In</router-link>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",

  data() {
    return {
      login: false,
      // password: '12345678',
      checkbox: false,
    };
  },
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
    max-width: 603px;
    width: 100%;
    margin: 20px auto;
    background: #fff;
    padding: 36px 60px 43px;
    @include border-radius(5px);
    @include box-shadow(5px, 5px, 32px, $shadow);
    @include bp(sm-max) {
      padding: 20px;
      margin: 20px;
      max-width: 100%;
    }
  }
  .login-logo {
    display: block;
    text-align: center;
    margin-bottom: 53px;
    @include bp(sm-max) {
      margin-bottom: 15px;
    }
    a {
      display: inline-block;
    }
    img {
      @include bp(sm-max) {
        width: 150px;
      }
    }
  }
  .v-form {
    .checkbox-password-wrap {
      .col {
        padding-bottom: 32px;
        @include bp(sm-max) {
          padding-bottom: 20px;
        }
        @include bp(s-max) {
          max-width: 100%;
          flex: 0 0 100%;
          padding-bottom: 0;
        }
      }
    }
    .forgot-password {
      text-align: right;
        @include bp(s-max) {
          text-align: left;
          padding-bottom: 13px;
        }
      a {
        display: inline-block;
        font-size: 16px;
        line-height: 20px;
        border-bottom: 1px dotted $light-gray2;
        color: $primary-color;
        margin: 3px 0 0 0;
        letter-spacing: 0.23px;
        @include transition(0.3s all);
        margin: 5px 0;
        &:hover {
          border-color: $red;
          color: $red;
        }
      }
    }
  }
}
</style>