<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <Row>
        <Button
          class="login-btn"
          type="primary"
          size="large"
          :loading="loading"
          @click="submitLogin"
          long
        >
          <span v-if="!loading">{{ 'login' }}</span>
          <span v-else>{{ 'logining' }}</span>
        </Button>
      </Row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  components: {
    //HelloWorld
  },
  methods:{
    submitLogin(){
      this.getRequest('/authUser/getAll', {
        //accessToken: 'b4016b71-43b8-4e24-afe5-8033542bf727'
      }).then(res => {
        //console.log(res)
      }).catch(e => {
        //console.error(e)
      });      
    }
  }
}
</script>
