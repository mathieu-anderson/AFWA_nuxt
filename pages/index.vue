<template>
  <div class="container">
    <section class="part1">
      <h1 class="title">
        Welcome!
      </h1>
      <p>
        Please use the form below to search through our treasures.
      </p>
      <div class="red">
        Please allow a few minutes for the servers to "wake up" after you first request. This is hosted on a free space, which means it is very slow at first. It gets better!
      </div>
      <p class="disclaimer">Disclaimer : this is a very rough prototype to showcase one possible use of a properly maintained and digitized archives database. The "search" functionality may give funky results : it is advised to only use the "year" and "word" filters. You can also access individual resources directly by going to the URL http://afwa.herokuapp.com/resources/[item], like so : <a href="http://afwa.herokuapp.com/resources/AAF-9_01">http://afwa.herokuapp.com/resources/AAF-9_01</a></p>
    </section>
    <section class="part2">
      <h1 class="title">
        Search...
      </h1>
      <form class="search" action="resources/search" method="get">
        From <input class="date" label="yearStart" type="text" name="yearStart" value="" placeholder="1908"> to <input  class="date" label="yearEnd" type="text" name="yearEnd" value="" placeholder="2008">
        <br /><br />
        By word : <input label="word" type="word" name="word" value="" placeholder="a place, a name">
        <br /><br />
        By story :
        <select name="story">
          <option value="">-</option>
          <option value="cultural">AF Wellington : a cultural institution</option>
          <option value="finlayson">Renée Finlayson : une femme du monde</option>
          <option value="genesis">The genesis : Harold Beauchamp</option>
          <option value="ww2">World War 2</option>
          <option value="fragments">Fragments of history</option>
        </select>
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
}
</script>

<style scoped>

.red
{
  color:  #D90429;
  border: 1px solid #D90429;
  font-weight: normal;
}

.disclaimer
{
  font-weight: bold;
}

.date
{
  width: 3em;
}

.part1, .part2
{
  padding-top: 0.1em;
  padding-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;
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
padding-left: 10vw;
padding-right: 10vw;
}

.title {
  text-align: center;
}

/*.search {
  display: flex;
  flex-flow: wrap;
}*/
</style>
