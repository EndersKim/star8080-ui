import { ExtractPropTypes } from 'vue'

export const Props = {
  // 输入值
  modelValue: String,

  // 选项
  options: Object,
}

export type Props = ExtractPropTypes<typeof Props>
