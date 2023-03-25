<template>
  <button>{{ count }}</button>
  <testchild></testchild>
</template>
<script lang="ts">
  import { onMounted, ref, defineComponent } from 'vue'
  import testchild from './testchild.vue'

  export default defineComponent({
    components: { testchild },
    setuo() {
      let count = ref(1)
      return {
        count,
      }
    },
  })
</script>
