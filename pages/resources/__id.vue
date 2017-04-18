<template lang="html">
  <div class="container">
    <section class="part1">
      <h1 class="title">
        Your resource :
      </h1>
      <p>Box : {{box}}</p>
      <p>Item : {{item}}</p>
      <!-- #if displayElement -->
      <p>Element : {{element}}</p>
      <!-- /if -->
      <p>Number of pages : {{pages}}</p>
      <p>Year : {{year}}</p>
      <p>Nature : {{nature}}</p>
      <!-- #if displayStory -->
      <p>Story : {{story}}</p>
      <!-- /if -->
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
export default {
  data () {
    return {
      box: '',
      item: '',
      element: '',
      pages: null,
      year: '',
      nature: '',
      story: '',
      content: '',
      digitized: ''
    }
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
