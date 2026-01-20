import Taro from '@tarojs/taro'
import type { CloudResult } from '@/types/cloud'

let cloudInited = false

export function ensureCloudInited() {
  if (cloudInited) return
  if (!Taro.cloud) {
    // In Taro weapp runtime, `Taro.cloud` exists when the Cloud capability is enabled.
    // If it doesn't, we keep it a no-op to avoid runtime crashes in non-weapp builds.
    return
  }
  Taro.cloud.init({
    // env can be set in WeChat DevTools (recommended) or specified here.
    // env: 'your-env-id'
    traceUser: true
  })
  cloudInited = true
}

export async function cloudCall<T>(
  name: string,
  data?: Record<string, unknown>,
  options?: { loadingTitle?: string; silent?: boolean }
): Promise<CloudResult<T>> {
  ensureCloudInited()

  const loadingTitle = options?.loadingTitle ?? '加载中...'
  if (!options?.silent) {
    Taro.showLoading({ title: loadingTitle, mask: true })
  }

  try {
    const res = await Taro.cloud.callFunction({ name, data })
    const result = res.result as CloudResult<T>
    return result
  } catch (e) {
    const msg = e instanceof Error ? e.message : '网络或服务异常'
    return { success: false, error: msg }
  } finally {
    if (!options?.silent) {
      Taro.hideLoading()
    }
  }
}

