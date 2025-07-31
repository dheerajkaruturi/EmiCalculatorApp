<template>
  <div class="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
    <!-- Title Section -->
    <div v-if="$slots.title" class="px-4 py-4 md:px-6 md:py-6 border-b border-gray-200 bg-gray-50">
      <slot name="title"></slot>
    </div>

    <!-- Content Section -->
    <div class="p-4 md:p-6">
      <slot name="content"></slot>
    </div>
  </div>
</template>
