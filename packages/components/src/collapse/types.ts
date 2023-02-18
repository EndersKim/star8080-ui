import { ExtractPropTypes } from 'vue'

export const Props = {
  // 是否开启
  modelValue: Boolean,
}

export type Props = ExtractPropTypes<typeof Props>
