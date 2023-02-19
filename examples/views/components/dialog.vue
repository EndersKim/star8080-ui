<template>
  <div>
    <h1>对话框</h1>

    <p>
      需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用对话框在当前页面正中打开一个浮层，承载相应的操作。
    </p>

    <h2>基本用法</h2>

    <p>使用 v-model 绑定一个布尔值来打开或者关闭对话框：</p>
    <Button @click="open_dialog = true">打开对话框</Button>
    <Dialog v-model="open_dialog" title="这是一个对话框">
      <p>点击右上角或者对话框外关闭对话框。</p>
    </Dialog>
    <br />
    <pre><code v-text="code1"></code></pre>

    <h2>对话框标题</h2>

    <p>
      使用 title 属性为对话框指定标题，不使用 title
      则不显示标题和顶部的关闭按钮，适用于简单的对话框：
    </p>
    <Button @click="open_dialog1 = true">打开没有标题的对话框</Button>
    <Dialog v-model="open_dialog1">
      <p>这是一个没有标题的对话框。点击对话框外的区域关闭对话框。</p>
    </Dialog>
    <br />
    <pre><code v-text="code2"></code></pre>

    <h2>对话框滚动</h2>

    <p>
      当对话框内容很长时会显示滚动条，当向下滚动时，对话框标题会缩小并居中显示：
    </p>
    <Button @click="open_dialog2 = true">很多内容的对话框</Button>
    <Dialog v-model="open_dialog2" title="很多内容的对话框">
      <p>当对话框内容很多时会显示滚动条。</p>
      <br />
      <p>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development. After massive project practice and
        summaries, Ant Design, a design language for background applications, is
        refined by Ant UED Team, which aims to uniform the user interface specs
        for internal background projects, lower the unnecessary cost of design
        differences and implementation and liberate the resources of design and
        front-end development. We supply a series of design principles,
        practical patterns and high quality design resources ( Sketch and Axure
        ), to help people create their product prototypes beautifully and
        efficiently.
      </p>
      <p>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development. After massive project practice and
        summaries, Ant Design, a design language for background applications, is
        refined by Ant UED Team, which aims to uniform the user interface specs
        for internal background projects, lower the unnecessary cost of design
        differences and implementation and liberate the resources of design and
        front-end development. We supply a series of design principles,
        practical patterns and high quality design resources ( Sketch and Axure
        ), to help people create their product prototypes beautifully and
        efficiently.
      </p>
      <p>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development. After massive project practice and
        summaries, Ant Design, a design language for background applications, is
        refined by Ant UED Team, which aims to uniform the user interface specs
        for internal background projects, lower the unnecessary cost of design
        differences and implementation and liberate the resources of design and
        front-end development. We supply a series of design principles,
        practical patterns and high quality design resources ( Sketch and Axure
        ), to help people create their product prototypes beautifully and
        efficiently.
      </p>
      <p>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development. After massive project practice and
        summaries, Ant Design, a design language for background applications, is
        refined by Ant UED Team, which aims to uniform the user interface specs
        for internal background projects, lower the unnecessary cost of design
        differences and implementation and liberate the resources of design and
        front-end development. We supply a series of design principles,
        practical patterns and high quality design resources ( Sketch and Axure
        ), to help people create their product prototypes beautifully and
        efficiently.
      </p>
      <p>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development. After massive project practice and
        summaries, Ant Design, a design language for background applications, is
        refined by Ant UED Team, which aims to uniform the user interface specs
        for internal background projects, lower the unnecessary cost of design
        differences and implementation and liberate the resources of design and
        front-end development. We supply a series of design principles,
        practical patterns and high quality design resources ( Sketch and Axure
        ), to help people create their product prototypes beautifully and
        efficiently.
      </p>
      <p>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development. After massive project practice and
        summaries, Ant Design, a design language for background applications, is
        refined by Ant UED Team, which aims to uniform the user interface specs
        for internal background projects, lower the unnecessary cost of design
        differences and implementation and liberate the resources of design and
        front-end development. We supply a series of design principles,
        practical patterns and high quality design resources ( Sketch and Axure
        ), to help people create their product prototypes beautifully and
        efficiently.
      </p>
      <p>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development. After massive project practice and
        summaries, Ant Design, a design language for background applications, is
        refined by Ant UED Team, which aims to uniform the user interface specs
        for internal background projects, lower the unnecessary cost of design
        differences and implementation and liberate the resources of design and
        front-end development. We supply a series of design principles,
        practical patterns and high quality design resources ( Sketch and Axure
        ), to help people create their product prototypes beautifully and
        efficiently.
      </p>
      <p>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development. After massive project practice and
        summaries, Ant Design, a design language for background applications, is
        refined by Ant UED Team, which aims to uniform the user interface specs
        for internal background projects, lower the unnecessary cost of design
        differences and implementation and liberate the resources of design and
        front-end development. We supply a series of design principles,
        practical patterns and high quality design resources ( Sketch and Axure
        ), to help people create their product prototypes beautifully and
        efficiently.
      </p>
      <p>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development. After massive project practice and
        summaries, Ant Design, a design language for background applications, is
        refined by Ant UED Team, which aims to uniform the user interface specs
        for internal background projects, lower the unnecessary cost of design
        differences and implementation and liberate the resources of design and
        front-end development. We supply a series of design principles,
        practical patterns and high quality design resources ( Sketch and Axure
        ), to help people create their product prototypes beautifully and
        efficiently.
      </p>
      <p>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development. After massive project practice and
        summaries, Ant Design, a design language for background applications, is
        refined by Ant UED Team, which aims to uniform the user interface specs
        for internal background projects, lower the unnecessary cost of design
        differences and implementation and liberate the resources of design and
        front-end development. We supply a series of design principles,
        practical patterns and high quality design resources ( Sketch and Axure
        ), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    </Dialog>
    <br />
    <pre><code v-text="code3"></code></pre>
  </div>
</template>

<script lang="ts" setup>
  import { Dialog, Button } from 'star8080-ui'
  import { reactive, ref } from 'vue'

  const open_dialog = ref(false)
  const open_dialog2 = ref(false)
  const open_dialog1 = ref(false)

  const code1 = ref(
    `<template>
    <Button @click="open_dialog = true">打开对话框</Button>
    <Dialog v-model="open_dialog" title="这是一个对话框">
        <p>点击右上角或者对话框外关闭对话框。</p>
    </Dialog>
</template>

<script lang="ts" setup>
    const open_dialog = ref(false)
<\/script>`
  )

  const code2 = ref(
    `<template>
    <Button @click="open_dialog1 = true">打开没有标题的对话框</Button>
    <Dialog v-model="open_dialog1">
        <p>这是一个没有标题的对话框。点击对话框外的区域关闭对话框。</p>
    </Dialog>
</template>

<script lang="ts" setup>
    const open_dialog1 = ref(false)
<\/script>`
  )

  const code3 = ref(
    `<template>
    <Button @click="open_dialog2 = true">很多内容的对话框</Button>
    <Dialog v-model="open_dialog2" title="很多内容的对话框">
        <p>很长的内容</p>
    </Dialog>
</template>

<script lang="ts" setup>
    const open_dialog2 = ref(false)
<\/script>`
  )
</script>

<style lang="less"></style>
