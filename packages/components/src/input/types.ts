import { ExtractPropTypes } from 'vue'

export const Props = {
  // 输入值
  modelValue: String,

  // // 最大页码
  // max: Number,
}

export type Props = ExtractPropTypes<typeof Props>
