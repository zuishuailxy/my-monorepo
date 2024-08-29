<template>
    <!-- 可视区域 -->
    <div ref="listRef" class="infinite-list-container" @scroll="scrollEvent()">
        <!-- 虚拟高度占位符 -->
        <div
            class="infinite-list-phantom"
            :style="{ height: listHeight + 'px' }"
        ></div>

        <!-- 动态渲染数据的区域 -->
        <div class="infinite-list" :style="{ transform: getTransform }">
            <div
                class="infinite-list-item"
                v-for="item in visibleData"
                :key="item.id"
                :style="{
                    height: itemSize + 'px',
                    lineHeight: itemSize + 'px',
                }"
            >
                {{ item.value }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive, onMounted, ref } from 'vue';

// 定义接收的属性
const props = defineProps({
  listData: Array,
  itemSize: {
    type: Number,
    default: 50
  }
});

// 反应式状态
const state = reactive({
  screenHeight: 0, // 可视区域高度
  startOffset: 0, // 当前偏移量
  start: 0, // 开始索引
  end: 0 // 结束索引
});

// 计算属性
const visibleCount = computed(() => {
  return Math.ceil(state.screenHeight / props.itemSize); // 可视区域内能显示的项目数量
});


const visibleData = computed(() => {
  return props.listData.slice(state.start, Math.min(state.end, props.listData.length)); // 当前可视数据
});
const listHeight = computed(() => {
  return props.listData.length * props.itemSize; // 列表总高度
});

const getTransform = computed(() => {
  return `translateY(${state.startOffset}px)`; // 计算transform值
});
// 引用元素
const listRef = ref(null);

// 生命周期钩子
onMounted(() => {
  state.screenHeight = listRef.value.clientHeight; // 初始化可视区域高度
  state.end = state.start + visibleCount.value; // 初始化结束索引
});

// 滚动事件处理
const scrollEvent = () => {
  const scrollTop = listRef.value.scrollTop; // 当前滚动距离
  state.start = Math.floor(scrollTop / props.itemSize); // 计算开始索引
  state.end = state.start + visibleCount.value; // 更新结束索引
  state.startOffset = scrollTop - (scrollTop % props.itemSize); // 更新偏移量
};

</script>

<style lang="css" scoped>
.infinite-list-container {
  height: 100%; /* 占满整个父容器高度 */
  overflow: auto; /* 允许滚动 */
  position: relative; /* 使内部元素可以相对于它定位 */
}

.infinite-list-phantom {
  position: absolute; /* 绝对定位 */
  left: 0;
  right: 0; /* 宽度充满整个容器 */
  top: 0; /* 顶部对齐 */
  z-index: -1; /* 放在底层 */
}

.infinite-list {
  position: absolute; /* 绝对定位 */
  left: 0;
  right: 0; /* 宽度充满整个容器 */
  top: 0; /* 顶部对齐 */
  text-align: center; /* 文本居中 */
}

.infinite-list-item {
  border-bottom: 1px solid #eee; /* 分隔线 */
  box-sizing: border-box; /* 包含边框和内边距 */
}
</style>


