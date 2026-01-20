import Taro from '@tarojs/taro'

const KEY_OPENID = 'tm_openid'

export function getOpenId(): string | null {
  const v = Taro.getStorageSync(KEY_OPENID)
  return typeof v === 'string' && v ? v : null
}

export function setOpenId(openid: string) {
  Taro.setStorageSync(KEY_OPENID, openid)
}

export function clearOpenId() {
  Taro.removeStorageSync(KEY_OPENID)
}

