import { ExtractPropTypes } from 'vue'

export const switchType = []

export const switchSize = []

export const switchProps = {
  disabled: Boolean,
  mimicry: Boolean,
  // 选中颜色
  activeColor: {
    type: String,
    default: '#409eff',
  },
  // 未选中颜色
  inactiveColor: {
    type: String,
    default: '#dcdfe6',
  },
  // 开关回调
  onChange: {
    type: Function,
  },
  // 绑定值
  modelValue: {
    type: [Boolean],
    default: '',
  },
}

export type switchProps = ExtractPropTypes<typeof switchProps>
