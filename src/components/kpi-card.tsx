import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function KPICard({
  title,
  value,
  subtext,
  trend,
  trendType = 'positive',
}: {
  title: string
  value: string | number
  subtext?: string
  trend?: string
  trendType?: 'positive' | 'negative' | 'neutral'
}) {
  const trendColors: Record<string, string> = {
    positive: 'text-success',
    negative: 'text-critical',
    neutral: 'text-slate-500',
  }

  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</p>
          <p className="text-2xl font-semibold text-slate-900 mt-1">{value}</p>
          {subtext && <p className="text-sm text-slate-400 mt-0.5">{subtext}</p>}
        </div>
        {trend && (
          <Badge variant="default" className={`ml-auto mt-1 ${trendColors[trendType]}`}>
            {trend}
          </Badge>
        )}
      </div>
    </Card>
  )
}
