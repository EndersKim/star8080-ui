import { ExtractPropTypes } from 'vue'

export const SizeOptions = ['small', 'middle', 'large']

export const Props = {
  src: String, //头像地址

  name: String, //名称，当未提供头像地址时会显示名称的第一个字符

  //大小
  size: {
    type: String,
    default: 'middle',
    validator(value: string) {
      return SizeOptions.includes(value)
    },
  },
}

export type Props = ExtractPropTypes<typeof Props>
