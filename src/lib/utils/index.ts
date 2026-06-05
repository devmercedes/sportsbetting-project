import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatOdds(odds: number): string {
  return odds > 0 ? `+${odds}` : `${odds}`
}

export function confidenceLabel(confidence: number): 'Low' | 'Moderate' | 'High' {
  if (confidence >= 70) return 'High'
  if (confidence >= 60) return 'Moderate'
  return 'Low'
}

export function confidenceColor(confidence: number): string {
  if (confidence >= 70) return '#22c55e'
  if (confidence >= 60) return '#f59e0b'
  return '#ef4444'
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric'
  })
}

export function calculateROI(stake: number, profit: number): number {
  return Math.round((profit / stake) * 100 * 10) / 10
}
