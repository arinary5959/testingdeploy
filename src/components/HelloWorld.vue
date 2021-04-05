<template>
  <div class="hello">
    <h1>Test Vue.js App Deploy</h1>
    <h2>뷰 배포 연습</h2>
    <!-- <h2>{{ msg }}</h2> -->
    <h2>왜 git push -f origin master 되지 않는 것일까</h2>
    <span>git add .  All</span><br/>
    <span>git add src/routes (filename)  All</span><br/>
    <span>git push -u origin master</span><br/>
    <span>git bash -> $ rm -f ./.git/index.lock</span><br/>
    <span>git commit -am "second commit"</span><br/>
    <span>git push -f origin master</span><br/>
    <span>git commit -am "third commit"</span><br/>
    <span>git push -f origin master</span>
    <br/><br/>
    <!-- <router-link to="/"></router-link> -->
    <router-link to="/menua">AA</router-link>
    <router-link to="/menub">BB</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
