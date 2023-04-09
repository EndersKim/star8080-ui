import { ExtractPropTypes } from 'vue'

// size 属性类型
export const RadioSize = ['midium', 'small', 'mini']

export const radioProps = {
  // 绑定值
  value: String,
  // 绑定值的数据
  label: [String, Number, Boolean],
  disabled: Boolean,
  border: Boolean,
  size: {
    type: String,
    // 限制size属性，对RadioSize内不包括的属性直接过滤
    validator(value: string) {
      return RadioSize.includes(value)
    },
  },
  // 绑定值
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  onChange: {
    type: Function,
    default: () => {
      return null
    },
  },
}

export type radioProps = ExtractPropTypes<typeof radioProps>
