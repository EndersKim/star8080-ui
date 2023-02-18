import { ExtractPropTypes } from 'vue'

export const Props = {
  // 当前页码
  modelValue: Number,

  // 最大页码
  max: Number,
}

export type Props = ExtractPropTypes<typeof Props>
