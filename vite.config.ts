/*
 * @Author: 蒋文斌
 * @Date: 2021-03-08 21:19:23
 * @LastEditors: 蒋文斌
 * @LastEditTime: 2021-03-09 12:51:19
 * @Description: 自动生成
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({})
  ]
})
