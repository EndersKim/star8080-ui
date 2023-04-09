import { ExtractPropTypes } from 'vue'

interface Item {
  value: string | number
  label: string | number
  children: Array<Item>
}

export const casaderProps = {
  disabled: Boolean,

  // 绑定值
  modelValue: {
    type: [String, Number],
    default: false,
  },
  option: {
    type: Array<Item>,
    default: [{}],
  },
  onChange: {
    type: Function,
    default: () => {
      return 666
    },
  },
}

export type casaderProps = ExtractPropTypes<typeof casaderProps>
