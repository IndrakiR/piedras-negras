<template>
  <div class="rich-text">
    <template v-for="(node, index) in content.root.children" :key="index">
      <!-- Párrafos -->
      <p v-if="node.type === 'paragraph'" class="mb-4">
        <template v-for="(child, childIndex) in node.children" :key="childIndex">
          <span v-if="child.type === 'text'" :class="getTextClasses(child)">{{ child.text }}</span>
        </template>
      </p>

      <!-- Listas -->
      <ul v-else-if="node.type === 'list'" class="mb-4 list-none pl-0">
        <li v-for="(item, itemIndex) in node.children" 
            :key="itemIndex" 
            class="flex items-center gap-2 mb-2">
          <!-- Checkbox para listas de tipo check -->
          <template v-if="node.listType === 'check'">
            <input type="checkbox" 
                   :checked="item.checked" 
                   disabled 
                   class="form-checkbox h-4 w-4 text-[#5e1210] rounded border-gray-300"/>
            <span>{{ item.children[0]?.text }}</span>
          </template>
          <!-- Otros tipos de lista -->
          <template v-else>
            <span class="ml-4">{{ item.children[0]?.text }}</span>
          </template>
        </li>
      </ul>

      <!-- Encabezados -->
      <component 
        :is="node.tag" 
        v-else-if="node.type === 'heading'" 
        class="font-bold mb-4"
        :class="{
          'text-4xl': node.tag === 'h1',
          'text-3xl': node.tag === 'h2',
          'text-2xl': node.tag === 'h3',
          'text-xl': node.tag === 'h4',
          'text-lg': node.tag === 'h5',
          'text-base': node.tag === 'h6'
        }">
        {{ node.children[0]?.text }}
      </component>
    </template>
  </div>
</template>

<script setup lang="ts">
interface TextNode {
  type: string
  text: string
  format: number
  style: string
}

const props = defineProps<{
  content: any
}>()

function getTextClasses(node: TextNode) {
  const classes = []
  if (node.format & 1) classes.push('font-bold')
  if (node.format & 2) classes.push('italic')
  if (node.format & 4) classes.push('underline')
  if (node.format & 8) classes.push('line-through')
  if (node.format & 16) classes.push('text-code font-mono bg-gray-100 rounded px-1')
  return classes
}
</script>

<style scoped>
.rich-text {
  @apply text-gray-800 leading-relaxed;
}
</style>
