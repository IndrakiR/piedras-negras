<!-- components/RichText.vue -->
<template>
  <ClientOnly>
    <ErrorBoundary>
      <div v-if="isLoading" class="animate-pulse space-y-4">
        <div class="h-4 bg-gray-200 rounded w-3/4"></div>
        <div class="h-4 bg-gray-200 rounded"></div>
      </div>
      
      <div v-else-if="error" class="text-red-600">
        Error loading content: {{ error.message }}
      </div>

      <div v-else class="rich-text">
        <template v-if="content?.root">
          <template v-for="(node, index) in content.root.children" :key="index">
            <!-- Paragraphs -->
            <p v-if="node.type === 'paragraph'" class="mb-4">
              <template v-for="(child, childIndex) in node.children" :key="childIndex">
                <!-- Text Formatting -->
                <span v-if="child.type === 'text'" :class="getTextClasses(child)">
                  {{ child.text }}
                </span>

                <!-- Links -->
                <a 
                  v-else-if="child.type === 'link'"
                  :href="child.url" 
                  :target="child.newTab ? '_blank' : '_self'"
                  class="text-[#5e1210] hover:underline"
                >
                  {{ child.children[0]?.text }}
                </a>
              </template>
            </p>

            <!-- Lists -->
            <component 
              :is="node.listType === 'number' ? 'ol' : 'ul'" 
              v-else-if="node.type === 'list'" 
              class="mb-4 pl-6"
              :class="{
                'list-none': node.listType === 'check',
                'list-disc': node.listType === 'bullet',
                'list-decimal': node.listType === 'number'
              }"
            >
              <li 
                v-for="(item, itemIndex) in node.children" 
                :key="itemIndex" 
                class="mb-2 flex items-center gap-2"
              >
                <template v-if="node.listType === 'check'">
                  <input 
                    type="checkbox" 
                    :checked="item.checked" 
                    disabled 
                    class="form-checkbox h-4 w-4 text-[#5e1210] rounded border-gray-300"
                  />
                </template>
                <span>{{ item.children[0]?.text }}</span>
              </li>
            </component>

            <!-- Headings -->
            <component 
              :is="node.tag" 
              v-else-if="node.type === 'heading'" 
              class="font-bold mb-4"
              :class="headingClasses[node.tag]"
            >
              {{ node.children[0]?.text }}
            </component>

            <!-- Blockquotes -->
            <blockquote 
              v-else-if="node.type === 'quote'" 
              class="border-l-4 border-[#5e1210] pl-4 my-6 italic"
            >
              {{ node.children[0]?.text }}
            </blockquote>

            <!-- Uploads -->
            <figure 
              v-else-if="node.type === 'upload'" 
              class="my-6"
              :data-type="node.relationTo"
            >
              <img 
                v-if="node.relationTo === 'media'"
                :src="node.value?.url" 
                :alt="node.value?.alt" 
                class="rounded-lg mx-auto"
              />
              <figcaption v-if="node.value?.caption" class="text-center mt-2 text-sm">
                {{ node.value?.caption }}
              </figcaption>
            </figure>

            <!-- Horizontal Rules -->
            <hr 
              v-else-if="node.type === 'hr'" 
              class="my-8 border-t-2 border-gray-200"
            />

            <!-- Tables -->
            <table v-else-if="node.type === 'table'" class="w-full my-6 border-collapse">
              <tbody>
                <tr v-for="(row, rowIndex) in node.children" :key="rowIndex">
                  <td 
                    v-for="(cell, cellIndex) in row.children" 
                    :key="cellIndex"
                    class="border p-2"
                  >
                    {{ cell.children[0]?.text }}
                  </td>
                </tr>
              </tbody>
            </table>
          </template>
        </template>
      </div>
    </ErrorBoundary>
  </ClientOnly>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'

interface BaseNode {
  type: string;
  children?: any[];
}

interface TextNode extends BaseNode {
  type: 'text';
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

interface LinkNode extends BaseNode {
  type: 'link';
  url: string;
  newTab?: boolean;
  children: TextNode[];
}

interface UploadNode extends BaseNode {
  type: 'upload';
  relationTo: string;
  value: {
    url: string;
    alt?: string;
    caption?: string;
  };
}

interface TableCellNode extends BaseNode {
  type: 'tableCell';
  children: TextNode[];
}

interface TableRowNode extends BaseNode {
  type: 'tableRow';
  children: TableCellNode[];
}

interface TableNode extends BaseNode {
  type: 'table';
  children: TableRowNode[];
}

interface QuoteNode extends BaseNode {
  type: 'quote';
  children: Array<{ text: string }>;
}

interface ListItemNode extends BaseNode {
  type: 'listItem';
  children: TextNode[];
  checked?: boolean;
}

interface ListNode extends BaseNode {
  type: 'list';
  listType: 'bullet' | 'number' | 'check';
  children: ListItemNode[];
}

interface HeadingNode extends BaseNode {
  type: 'heading';
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: TextNode[];
}

interface ParagraphNode extends BaseNode {
  type: 'paragraph';
  children: (TextNode | LinkNode)[];
}

interface HrNode extends BaseNode {
  type: 'hr';
}

type RichTextNode = TextNode | LinkNode | UploadNode | TableNode | QuoteNode | ListNode | HeadingNode | ParagraphNode | HrNode;

interface SerializedEditorState {
  root: {
    children: RichTextNode[];
  };
}

const props = defineProps<{
  content: SerializedEditorState | null;
}>();

const isLoading = ref(false)
const error = ref<Error | null>(null)

const headingClasses = {
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  h4: 'text-xl',
  h5: 'text-lg',
  h6: 'text-base'
} as const

const getTextClasses = (node: TextNode) => {
  const classes = []
  if (node.bold) classes.push('font-bold')
  if (node.italic) classes.push('italic')
  if (node.underline) classes.push('underline')
  if (node.code) classes.push('font-mono bg-gray-100 p-1 rounded')
  return classes.join(' ')
}

// Error boundary component
const ErrorBoundary = defineComponent({
  setup(_, { slots }) {
    const error = ref<Error | null>(null)
    
    onErrorCaptured((err) => {
      error.value = err
      return false
    })

    return () => error.value 
      ? h('div', { class: 'text-red-600' }, `Error: ${error.value.message}`)
      : slots.default?.()
  }
})
</script>

<style>
.rich-text {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.5;
  color: #374151;
}

.rich-text h1 {
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #111827;
}

.rich-text h2 {
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 0.875rem;
  font-weight: 700;
  color: #111827;
}

.rich-text h3 {
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #111827;
}

.rich-text p {
  margin-bottom: 1rem;
}

.rich-text a {
  color: #5e1210;
  text-decoration: none;
}

.rich-text a:hover {
  text-decoration: underline;
}

.rich-text ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.rich-text ol {
  list-style-type: decimal;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.rich-text li {
  margin-bottom: 0.5rem;
}

.rich-text blockquote {
  border-left: 4px solid #5e1210;
  padding-left: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: #4B5563;
}

.rich-text hr {
  border: 0;
  border-top: 2px solid #E5E7EB;
  margin: 2rem 0;
}

.rich-text figure {
  margin: 1.5rem 0;
}

.rich-text figcaption {
  text-align: center;
  font-size: 0.875rem;
  color: #6B7280;
  margin-top: 0.5rem;
}

.rich-text img {
  border-radius: 0.5rem;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}
</style>