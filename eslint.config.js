// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  rules: {
    // カスタムルールをここに追加
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off",
  },
};
