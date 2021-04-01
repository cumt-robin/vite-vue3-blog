/*
 * @Author: 蒋文斌
 * @Date: 2021-04-01 20:53:17
 * @LastEditors: 蒋文斌
 * @LastEditTime: 2021-04-01 20:56:22
 * @Description: 自动生成
 */

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
  }
})