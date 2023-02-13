import { ExtractPropTypes } from 'vue'

// export const SizeOptions = ['small', 'middle', 'large']

export const Props = {
  tip: String, // 文字

  // num: Number, //数字

  // ripple: Boolean, //涟漪效果

  // //大小
  // size: {
  //   type: String,
  //   default: 'middle',
  //   validator(value: string) {
  //     return SizeOptions.includes(value)
  //   },
  // },
}

export type Props = ExtractPropTypes<typeof Props>
