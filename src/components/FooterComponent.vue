<template>
  <div class="footer">
    <p>© 2016 G3 Trasportation.</p>
    <div class="footer-link">
      <v-btn
        v-for="link in links"
        :key="link"
        text
      >
        {{ link }}
      </v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      links: [
        'Privacy',
        'Terms',
      ],
    }),
  }
</script>
<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.footer {
    background: $white;
    padding: 15px 30px;
    border-top: 1px solid #e3e1e0;
    display: flex;
    align-items: center;
    justify-content: end;
    p {
      font-size: 14px;
      line-height: 18px;
      color: #828181;
    }
    .footer-link {
      .v-btn {
        color: $red;
        font-size: 14px;
        text-transform: none;
        height: auto;
        border-radius: 0;
        &:not(:last-child) {
          border-right: 1px solid #d9d9d9; 
        }
      }
    }
}
</style>
