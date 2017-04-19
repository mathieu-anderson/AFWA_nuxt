<template>
  <div class="container">
    <section class="part1">
      <h1 class="title">
        Welcome!
      </h1>
      <p>
        Please use the form below to search through our treasures.
      </p>
    </section>
    <section class="part2">
      <h1 class="title">
        Search...
      </h1>
      <form class="search" action="resources/search" method="get">
        From <input label="yearStart" type="text" name="yearStart" value="" placeholder="1908"> to <input label="yearEnd" type="text" name="yearEnd" value="" placeholder="2008">
        <br /><br />
        By story :
        <select name="story">
          <option value="noStory">-</option>
          <option value="cultural">AF Wellington : a cultural institution</option>
          <option value="finlayson">Renée Finlayson : une femme du monde</option>
          <option value="genesis">The genesis : Harold Beauchamp</option>
          <option value="ww2">World War 2</option>
          <option value="fragments">Fragments of history</option>
        </select>
        <br /><br />
        By nature : <br />
        <input type="checkbox" name="nature" value="document" checked> Document<br />
        <input type="checkbox" name="nature" value="letter" checked> Letter<br />
        <input type="checkbox" name="nature" value="photo" checked> Photography / Negatives<br />
        <input type="checkbox" name="nature" value="press" checked> Press cutting<br />
        <input type="checkbox" name="nature" value="artefact" checked> Artefact<br />
        <input type="checkbox" name="nature" value="photocopy" checked> Photocopy
        <br /><br />
        Digitized : <br />
        <input type="radio" name="digitized" value="yes" checked> Yes<br />
        <input type="radio" name="digitized" value="no" checked> No<br />
        <br />
        <input type="submit" name="submit" value="search">
      </form>
    </section>
  </div>
</template>
<script>
export default {
  data ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head () {
    return {
      title: `About Page (${this.name}-side)`
    }
  }
}
</script>

<style scoped>

.part1, .part2
{
  padding-top: 0.1em;
  padding-bottom: 1em;
  background-color: #EDF2F4;
}

.part1
{
  text-align: center;
}

.part2
{
margin-top: 1em;
margin-bottom: 1em;
}

.title {
  text-align: center;
}

/*.search {
  display: flex;
  flex-flow: wrap;
}*/
</style>
