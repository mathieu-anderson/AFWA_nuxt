<template lang="html">
  <div class="container">
    <section class="part1">
      <h1 class="title">
        Your resource :
      </h1>
      <p>Box : {{box}}</p>
      <p>Item : {{item}}</p>
      <p v-if="element">Element : {{element}}</p>
      <p>Number of pages : {{volume}}</p>
      <p>Year :
        <span v-for="year in years">
          {{year}},
        </span>
      </p>
      <p>Nature :
        <span v-for="nature in natures">
          {{nature}},
        </span>
      </p>
      <p v-if="story">Story : {{story}}</p>
      <p>Content : {{content}}</p>
      <p>Digitized : {{digitized}}</p>
    </section>
    <section class="part2">
      <h1 class="title">
        Back to list
      </h1>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
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
    axios.get(`http://localhost:3000/api/v1/resources/${this.$route.params._id}`)
      .then((res) => {
        console.log(res.data[0])
        this.box = res.data[0].box
        this.item = res.data[0].item
        this.element = res.data[0].element
        this.volume = res.data[0].volume
        this.years = res.data[0].year
        this.natures = res.data[0].nature
        this.story = res.data[0].story
        this.content = res.data[0].content
        this.digitized = res.data[0].digitized
      })
  },
  methods () {
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
