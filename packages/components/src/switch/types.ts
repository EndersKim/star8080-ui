import { ExtractPropTypes } from 'vue'

// size 属性类型
export const SwitchSize = ['midium', 'small', 'mini']

export const switchProps = {
  disabled: Boolean,
  size: {
    type: String,
    // 限制size属性，对RadioSize内不包括的属性直接过滤
    validator(value: string) {
      return SwitchSize.includes(value)
    },
    default: 'mini',
  },
  // 绑定值
  modelValue: {
    type: Boolean,
    default: false,
  },

  onChange: {
    type: Function,
    default: () => {
      return 666
    },
  },
}

export type switchProps = ExtractPropTypes<typeof switchProps>
