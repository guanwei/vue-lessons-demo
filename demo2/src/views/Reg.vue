<template>
  <form class="form-wrapper">
    <div class="info">请输入以下信息</div>
    <div class="form-input">
      <label>登录名</label>
      <input type="text" v-model="name">
    </div>
    <div class="form-input">
      <label>密码</label>
      <input type="password" v-model="password">
    </div>
    <div class="form-input">
      <label>再次密码</label>
      <input type="password" v-model="passwordRepeat">
    </div>
    <div class="btns">
      <button type="button" @click="reg()">确定</button>
      <button type="button" @click="()=>{this.$router.back()}">取消</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Reg',
  data () {
    return {
      name: '',
      password: '',
      passwordRepeat: ''
    }
  },
  methods: {
    reg () {
      if (this.password === this.passwordRepeat && this.name !== '') {
        localStorage.setItem('name', this.name)
        localStorage.setItem('password', this.password)
        this.$router.push({ name: 'Login' })
      } else {
        alert('两次密码输入不一致')
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
