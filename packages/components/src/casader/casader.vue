<template>
  <div class="star-casader">
    <div class="star-casader-inputContainer" @click="showContain">
      <Input class="star-casader-input" :modelValue="modelValue" />
    </div>
    <div
      class="star-casader_container"
      v-if="isShow"
      :style="{ width: counted + 'px' }"
    >
      <casader_optionContainer
        :option="option"
        @countEvent="countEvent"
        :updateVaule="updateVaule"
      ></casader_optionContainer>
    </div>
  </div>
</template>

<script lang="ts">
  import './style/index.less'
  import { defineComponent, computed, ref, nextTick } from 'vue'
  import { casaderProps } from './types'
  import casader_optionContainer from '../casader-optionContainer'
  import Input from '../input'
  import { count } from 'console'

  export default defineComponent({
    name: 'star-casader',
    props: casaderProps,
    // eslint-disable-next-line vue/no-reserved-component-names
    components: { casader_optionContainer, Input },
    setup(props, context) {
      const styleClass = computed(() => {
        return {
          'is-disabled': props.disabled,
        }
      })
      let isShow = ref(false)
      let counted = ref<number>(250)
      const countEvent = (val: number) => {
        // console.log('++' + val)
        counted.value += 250 * val
      }

      const updateVaule = (value: any) => {
        isShow.value = false
        counted.value = 250
        context.emit('update:modelValue', value)
      }

      const showContain = () => {
        isShow.value = true
        // console.log('被点了' + isShow.value)
      }
      return {
        styleClass,
        isShow,
        showContain,
        counted,
        countEvent,
        updateVaule,
      }
    },
  })
</script>
<!-- <template>
  <div>
    <select v-model="selectedOption" @change="onOptionChange">
      <option value="">{{ placeholder }}</option>
      <option
        v-for="option in filteredOptions"
        :key="option.name"
        :value="option"
      >
        {{ option.name }}
      </option>
    </select>
    <cascade-selector
      v-if="selectedOption"
      :options="selectedOption.children"
      :value="selectedValue"
      @update:value="onValueUpdate"
    ></cascade-selector>
  </div>
</template>

<script>
  import { ref, computed, watch } from 'vue'

  export default {
    props: {
      options: {
        type: Array,
        required: true,
      },
      value: {
        type: Array,
        default: () => [],
      },
      placeholder: {
        type: String,
        default: '请选择',
      },
    },
    setup(props, { emit }) {
      const selectedOption = ref(null)
      const selectedValue = ref(props.value.slice(1))

      const filteredOptions = computed(() => {
        if (props.value.length === 0) {
          return props.options
        } else {
          const parentOption = props.options.find(
            (option) => option.name === props.value[0]
          )
          return parentOption ? parentOption.children : []
        }
      })

      const onOptionChange = () => {
        selectedValue.value = []
        emit('update:value', [selectedOption.value.name])
      }

      const onValueUpdate = (newValue) => {
        selectedValue.value = newValue
        emit('update:value', [selectedOption.value.name, ...newValue])
      }

      watch(
        () => props.value,
        (newValue) => {
          selectedOption.value = props.options.find(
            (option) => option.name === newValue[0]
          )
        }
      )

      return {
        selectedOption,
        selectedValue,
        filteredOptions,
        onOptionChange,
        onValueUpdate,
      }
    },
  }
</script> -->
