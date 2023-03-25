<template>
  <div class="star-casader_optionContainer">
    <Scrollbar :width="250">
      <div
        class="star-casader-item"
        :class="{
          'star-casader-item-active': checkedItem == item,
        }"
        v-for="item in option"
        :key="item.value"
        @click="changeVal(item)"
      >
        <div>{{ item.label }}</div>
        <div class="star-casader-item_next" v-show="item.children">
          <Icon name="arrow-right"></Icon>
        </div>
      </div>
    </Scrollbar>
  </div>
  <star-casader-optionContainer
    @countEvent="submitCount"
    v-if="checkedItem?.children"
    :option="checkedItem.children"
    :updateVaule="updateVaule"
  ></star-casader-optionContainer>
</template>

<script lang="ts">
  import './style/index.less'
  import { defineComponent, ref, onMounted, computed, watch } from 'vue'
  import { casader_optionContainerProps, Item } from './types'
  import Scrollbar from '../scrollbar'
  import Icon from '../Icon'

  export default defineComponent({
    name: 'star-casader-optionContainer',
    props: casader_optionContainerProps,
    emits: ['close-child', 'countEvent', 'update:modelValue'],
    components: { Scrollbar, Icon },
    setup(props, context) {
      let checkedItem = ref<Item | null>(null)

      // 触发countEvent事件
      const submitCount = (val: number) => {
        context.emit('countEvent', val)
      }

      // 监控option有无改变，改变了则说明其祖先元素的选项改变了，因此，需关闭子组件选项框
      watch(
        () => props.option,
        () => {
          if (checkedItem.value != null && checkedItem.value.children != null) {
            checkedItem.value = null
            context.emit('countEvent', -1)
          }
        }
      )

      // 选值发生改变
      const changeVal = (item: Item) => {
        let hasChild = checkedItem.value != null
        checkedItem.value = item
        if (checkedItem.value.children != undefined && !hasChild) {
          submitCount(1)
        } else {
          props.updateVaule(item.value)
        }
      }

      // onMounted(() => {})
      return {
        checkedItem,
        changeVal,
        submitCount,
      }
    },
  })
</script>
