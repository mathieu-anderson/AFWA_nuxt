<template lang="html">
  <div class="container">
    <section class="part1">
      <h1 class="title">
        Your search result :
      </h1>
      <a href="result.item">
        <p v-for="result in results">
          <span v-if="!element">{{result.item}},</span>
          <span v-if="element">{{result.element}},</span>
          <span v-for="nature in result.nature">{{nature}} </span>,
          <span v-for="year in result.year">{{year}} </span>,
        </p>
      </a>
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
        this.results = res.data
      })
      .then((results) => {
        console.log(this.results)
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
