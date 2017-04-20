<template lang="html">
  <div class="container">
    <section class="part1">
      <h1 class="title">
        Your search result :
      </h1>
      <p> a bunch of stuff</p>
    </section>
    <section class="part2">
      <h1 class="title">
        Back to search
      </h1>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      results: []
    }
  },
  created: function () {
    console.log(this.$route.query)
    axios.get(`http://localhost:3000/api/v1/resources/search?yearStart=${this.$route.query.yearStart}&yearEnd=${this.$route.query.yearEnd}&word=${this.$route.query.word}&story=${this.$route.query.story}&digitized=${this.$route.query.digitized}`)
      .then((res) => {
        console.log(res)
      })
  }
}
</script>

<style lang="css">

.part1, .part2
{
  padding-top: 0.1em;
  padding-bottom: 0.5em;
  background-color: #EDF2F4;
}

.part1
{
  text-align: center;
}

.part2
{
margin-top: 1em;
}

.title {
  text-align: center;
}
</style>
