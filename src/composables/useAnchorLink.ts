import { computed, nextTick, onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

export const FULLY_VISIBLE_EVENT = 'fully-visible'

interface UseAnchorLinkOptions {
  title: Ref<string>
  emitFullyVisible?: (anchorId: string) => void
  scrollRootSelector?: string
  copyToastDuration?: number
}

const DEFAULT_SCROLL_SELECTOR = '.snap-container'
const DEFAULT_TOAST_DURATION = 1800

const slugify = (value: string): string => value
  .toLowerCase()
  .replace(/\n/g, ' ')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9 ]/g, '')
  .trim()
  .replace(/\s+/g, '-')

export function useAnchorLink ({
  title,
  emitFullyVisible,
  scrollRootSelector = DEFAULT_SCROLL_SELECTOR,
  copyToastDuration = DEFAULT_TOAST_DURATION
}: UseAnchorLinkOptions) {
  const anchorId = computed(() => slugify(title.value))
  const displayTitle = computed(() => title.value.replace(/\n/g, '\n'))
  const rootEl = ref<HTMLElement | null>(null)
  const showCopied = ref(false)

  let scrollRoot: HTMLElement | null = null
  let scrollListenerAttached = false
  let ticking = false
  let copyToastTimeout: number | null = null

  const emitVisibility = () => {
    const id = anchorId.value
    if (!id) return
    emitFullyVisible?.(id)
    if (rootEl.value) {
      rootEl.value.dispatchEvent(new CustomEvent(FULLY_VISIBLE_EVENT, { bubbles: true, detail: { anchorId: id } }))
    }
  }

  const fullyVisible = (): boolean => {
    if (!rootEl.value) return false
    const elRect = rootEl.value.getBoundingClientRect()
    const rootRect = (scrollRoot
      ? scrollRoot.getBoundingClientRect()
      : { top: 0, bottom: window.innerHeight }) as DOMRect | { top: number; bottom: number }
    const elTop = Math.round(elRect.top)
    const elBottom = Math.round(elRect.bottom)
    const rootTop = Math.round(rootRect.top)
    const rootBottom = Math.round(rootRect.bottom)
    return elTop >= rootTop && elBottom <= rootBottom && (elBottom - elTop) > 0
  }

  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      if (fullyVisible()) {
        emitVisibility()
      }
      ticking = false
    })
  }

  const attachScrollListener = () => {
    if (scrollListenerAttached) return
    const target = scrollRoot || window
    target.addEventListener('scroll', onScroll, { passive: true })
    scrollListenerAttached = true
  }

  const detachScrollListener = () => {
    if (!scrollListenerAttached) return
    const target = scrollRoot || window
    target.removeEventListener('scroll', onScroll)
    scrollListenerAttached = false
  }

  const clearToastTimeout = () => {
    if (!copyToastTimeout) return
    window.clearTimeout(copyToastTimeout)
    copyToastTimeout = null
  }

  const copyAnchorLink = () => {
    const fullUrl = `${window.location.origin}${window.location.pathname}#${anchorId.value}`
    const tryClipboard = async () => {
      try {
        await navigator.clipboard.writeText(fullUrl)
      } catch {
        const temp = document.createElement('textarea')
        temp.value = fullUrl
        temp.style.position = 'fixed'
        temp.style.opacity = '0'
        document.body.appendChild(temp)
        temp.select()
        try {
          document.execCommand('copy')
        } catch {
          /* ignore */
        }
        document.body.removeChild(temp)
      }
      showCopied.value = false
      void nextTick(() => {
        showCopied.value = true
        clearToastTimeout()
        copyToastTimeout = window.setTimeout(() => {
          showCopied.value = false
          copyToastTimeout = null
        }, copyToastDuration)
      })
    }
    void tryClipboard()
  }

  onMounted(() => {
    scrollRoot = document.querySelector(scrollRootSelector) as HTMLElement | null
    attachScrollListener()
    if (fullyVisible()) {
      emitVisibility()
    }
  })

  onBeforeUnmount(() => {
    detachScrollListener()
    clearToastTimeout()
  })

  return {
    anchorId,
    displayTitle,
    rootEl,
    showCopied,
    copyAnchorLink
  }
}
