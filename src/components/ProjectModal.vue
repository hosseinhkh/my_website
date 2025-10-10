<template>
  <BModal
    v-if="modelValue"
    v-model="innerOpen"
    size="xl"
    centered
    no-header
    no-footer
    body-class="p-0"
    @hide="onHide"
  >
    <!-- close -->
    <span
      type="button"
      class="text-body position-absolute top-0 end-0 m-3 z-1"
      @click="close"
      aria-label="Close"
    >
      <Icon icon="fa6-solid:xmark" size="20" />
    </span>

    <div class="custom-model-main">
      <div class="custom-model-inner">
        <div class="custom-model-wrap">
          <div class="pop-up-content-wrap">
            <BRow>
              <BCol lg="12">
                <div class="opend-section">
                  <BRow>
                    <!-- LEFT: image + meta + summary -->
                    <BCol lg="7">
                      <div class="boxes-area">
                        <div class="img1" v-if="project?.image">
                          <img :src="project?.image" :alt="project?.title || 'project image'" />
                        </div>

                        <div class="content">
                          <!-- meta -->
                          <div class="tags-area" v-if="project?.year || project?.role">
                            <a v-if="project?.year" href="javascript:void(0)">{{ project?.year }}</a>
                            <a v-if="project?.role" href="javascript:void(0)">{{ project?.role }}</a>
                          </div>

                          <!-- title -->
                          <a href="javascript:void(0)">{{ project?.title }}</a>

                          <!-- summary -->
                          <p v-if="project?.summary">{{ project?.summary }}</p>

                          <!-- highlights -->
                          <template v-if="project?.highlights?.length">
                            <p class="pera"><b>Highlights</b></p>
                            <ul class="mb-3">
                              <li v-for="(h, i) in project!.highlights!" :key="i">{{ h }}</li>
                            </ul>
                          </template>

                          <!-- tech tags -->
                          <template v-if="project?.tech?.length">
                            <p class="pera"><b>Tech</b></p>
                            <div class="d-flex flex-wrap gap-2 mb-3">
                              <span
                                v-for="(t, i) in project!.tech!"
                                :key="i"
                                class="badge rounded-pill"
                                style="background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);"
                              >
                                {{ t }}
                              </span>
                            </div>
                          </template>

                          <!-- links -->
                          <div class="btn-area1" v-if="project?.links?.length">
                            <a
                              v-for="(l, i) in project!.links!"
                              :key="i"
                              class="vl-btn1 me-2 mb-2"
                              :href="l.url"
                              target="_blank"
                              rel="noopener"
                            >
                              {{ l.label }}
                              <Icon icon="fa6-solid:arrow-right" class="ms-1" width="12" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </BCol>

                    <!-- RIGHT: fast facts panel -->
                    <BCol lg="5">
                      <div class="contact-from-area" data-aos="flip-right" data-aos-duration="1000">
                        <h3>Project Details</h3>

                        <div class="mt-3">
                          <div class="d-flex justify-content-between py-2"
                               v-if="project?.year">
                            <span class="text-secondary">Year</span>
                            <span>{{ project?.year }}</span>
                          </div>

                          <div class="d-flex justify-content-between py-2"
                               v-if="project?.role">
                            <span class="text-secondary">Role</span>
                            <span>{{ project?.role }}</span>
                          </div>

                          <div class="py-2" v-if="project?.summary">
                            <span class="text-secondary d-block">Summary</span>
                            <span>{{ project?.summary }}</span>
                          </div>

                          <div class="py-2" v-if="project?.highlights?.length">
                            <span class="text-secondary d-block">Key Points</span>
                            <ul class="mb-0">
                              <li v-for="(h, i) in project!.highlights!" :key="i">{{ h }}</li>
                            </ul>
                          </div>

                          <div class="py-2" v-if="project?.tech?.length">
                            <span class="text-secondary d-block">Stack</span>
                            <div class="d-flex flex-wrap gap-2">
                              <span
                                v-for="(t, i) in project!.tech!"
                                :key="i"
                                class="badge rounded-pill"
                                style="background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);"
                              >
                                {{ t }}
                              </span>
                            </div>
                          </div>

                          <div class="py-2" v-if="project?.links?.length">
                            <span class="text-secondary d-block">Links</span>
                            <div class="d-flex flex-wrap gap-2">
                              <a
                                v-for="(l, i) in project!.links!"
                                :key="i"
                                class="text-decoration-none"
                                :href="l.url"
                                target="_blank"
                                rel="noopener"
                                style="color:#00e6c3;border-bottom:1px dashed rgba(0,230,195,.35)"
                              >
                                {{ l.label }} →
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </BCol>
                  </BRow>
                </div>
              </BCol>
            </BRow>
          </div>
        </div>
      </div>
    </div>
  </BModal>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { BCol, BModal, BRow } from 'bootstrap-vue-next'

type Link = { label: string; url: string }
type Project = {
  id: string
  title: string
  year?: string | number
  role?: string
  summary: string
  highlights?: string[]
  tech?: string[]
  links?: Link[]
  image: string
}

const props = defineProps<{
  modelValue: boolean
  project: Project | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: boolean): void
}>()

/** Keep BModal’s v-model in sync with parent v-model */
const innerOpen = ref<boolean>(props.modelValue)
watch(
  () => props.modelValue,
  v => (innerOpen.value = v)
)
const onHide = () => emit('update:modelValue', false)
const close = () => emit('update:modelValue', false)

/** Expose project for template */
const project = props.project
</script>
