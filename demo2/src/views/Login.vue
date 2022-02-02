<template>
    <form class="form-wrapper">
      <div class="info">欢迎登录</div>
      <div class="form-input">
        <label>登录名</label>
        <input type="text" v-model="name">
      </div>
      <div class="form-input">
        <label>密码</label>
        <input type="password" v-model="password">
      </div>
      <div class="btns">
        <button type="button" @click="login()">登录</button>
        <button type="button" @click="()=>{this.$router.push({name:'Reg'})}">注册</button>
      </div>
    </form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (localStorage.getItem('name') === this.name && localStorage.getItem('password') === this.password) {
        this.$router.push({ name: 'List' })
      } else {
        alert('登录失败，请检查用户名与密码')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.info{
  padding: 30px;
  font-size: 18px;
  font-weight: bold;
}
</style>
