<template lang="html">

  <div v-if="loading" class="container">
    <section class="part1">
      <h1 class="title">
        Loading
      </h1>
    </section>
  </div>

  <div v-else-if="box" class="container">
    <section class="part1">
      <h1 class="title">
        Your resource :
      </h1>
      <a class="img" v-if="item === 'AAF-9_01'" href="http://i.imgur.com/2AvggOd.jpg"><img class="demo" src="http://i.imgur.com/2AvggOd.jpg"></a>
      <a class="img" v-else href="http://placehold.it/700x1000"><img src="http://placehold.it/350x500"></a>
      <div class="info">
        <p>Box : {{box}}</p>
        <p>Item : {{item}}</p>
        <p v-if="element">Element : {{element}}</p>
        <p>Number of pages : {{volume}}</p>
        <p>Year :
          <span v-for="year in years">
            <span v-if="years.indexOf(year) === years.length - 1">{{year}}</span>
            <span v-else>{{year}}, </span>
          </span>
        </p>
        <p>Nature :
          <span v-for="nature in natures">
            <span v-if="natures.indexOf(nature) === natures.length - 1">{{nature}}</span>
            <span v-else>{{nature}}, </span>
          </span>
        </p>
        <p v-if="story">Story : {{story}}</p>
        <p>Content : {{content}}</p>
        <p>Digitized : {{digitized}}</p>
      </div>
    </section>
    <section class="part2">
      <h1 class="title">
        Back to list
      </h1>
    </section>
  </div>

  <div v-else class="container">
    <section class="part1">
      <h1 class="title">
        No such resource :(
      </h1>
    </section>
    <section class="part2">
      <h1 class="title">
        <a href="/">Back to search</a>
      </h1>
    </section>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loading: '',
      box: '',
      item: '',
      element: '',
      volume: null,
      years: '',
      natures: '',
      story: '',
      content: '',
      digitized: ''
    }
  },
  created: function () {
    this.loading = true
    axios.get(`https://afwaapi.herokuapp.com/api/v1/resources/${this.$route.params.id}`)
      .then((res) => {
        if (res.data.length === 0) {
          this.loading === false
        } else {
          this.box = res.data[0].box
          this.item = res.data[0].item
          this.element = res.data[0].element
          this.volume = res.data[0].volume
          this.years = res.data[0].year
          this.natures = res.data[0].nature
          this.story = res.data[0].story
          this.content = res.data[0].content
          this.digitized = res.data[0].digitized
        }
      })
      .then((res) => {
        this.loading = false
      })
  }
}
</script>

<style lang="css">

.demo
{
  padding-top: 15vh;
  max-width: 30vw;
}

.part1, .part2
{
  padding-top: 0.1em;
  padding-bottom: 0.5em;
  background-color: #EDF2F4;
}

.part1
{
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}

.img
{
  flex: 1 0 0;
}

.info
{
  flex: 1 0 0;
  text-align: left;
}

.part2
{
margin-top: 1em;
}

.title {
  text-align: center;
  flex: 1 0 0;
  flex-basis: 100%;
}

</style>
