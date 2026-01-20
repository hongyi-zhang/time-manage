export function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n)
}

export function formatYMD(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
}

export function todayYMD(): string {
  return formatYMD(new Date())
}

