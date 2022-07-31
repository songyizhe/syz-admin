<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  account: '',
  password: ''
})

const login = () => {
  console.log(form.value)
}

</script>
<template>
  <div class="login-page f-c">
    <div class="login-container">
      <div class="title">syz管理后台</div>
      <div class="login-form">
        <el-form>
          <el-form-item props="account" label="账号">
            <el-input v-model="form.account" />
          </el-form-item>
           <el-form-item props="account" label="密码">
            <el-input v-model="form.password" type="password" />
          </el-form-item>
          <el-row justify="end">
            <el-button type="primary" @click="login">登录</el-button>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.login-page {
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/clouds.png');
  background-color: #10AEFF;
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;

  .login-container {
    width: 400px;
    background: #fff;
    border-radius: 20px;
    padding: 20px;

    .title {
      font-size: 32px;
      color: #333;
      text-align: center;
      font-weight: bold;
    }

    .login-form {
      margin-top: 40px;
    }
  }
}
</style>