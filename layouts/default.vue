<template>
  <div>
    <appHeader/>
    <a name="start"></a>
    <nuxt/>
    <appFooter/>
  </div>
</template>

<script>
import appHeader from '~components/appHeader.vue'
import appFooter from '~components/appFooter.vue'

export default {
  components: {
    appHeader,
    appFooter
  }
}
</script>

<style>
</style>
