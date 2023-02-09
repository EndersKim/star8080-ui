declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    starButton: typeof import('star8080-ui').Button
    starIcon: typeof import('star8080-ui').Icon
  }
}
export {}
