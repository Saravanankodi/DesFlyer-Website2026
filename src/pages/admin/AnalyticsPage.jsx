import { useEffect, useState } from 'react'
import {
  ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend,
} from 'recharts'
import { api } from '../../lib/api'

const COLORS = ['#2E6FFF', '#5C8CFF', '#0F2557', '#8FB2FF']

function ChartCard({ title, children }) {
  return (
    <div className="border border-[var(--border)] rounded-2xl p-6">
      <h2 className="font-display font-semibold text-base text-[var(--fg)] mb-5">{title}</h2>
      {children}
    </div>
  )
}

export default function AnalyticsPage() {
  const [data, setData] = useState(null)

  useEffect(() => {
    api.getAnalytics().then(setData)
  }, [])

  if (!data) {
    return (
      <div className="p-6 lg:p-10">
        <div className="h-64 rounded-2xl border border-[var(--border)] animate-pulse bg-[var(--surface-2)]" />
      </div>
    )
  }

  return (
    <div className="p-6 lg:p-10">
      <h1 className="font-display font-bold text-2xl lg:text-3xl text-[var(--fg)] mb-2">Website Analytics</h1>
      <p className="text-sm text-[var(--fg)]/50 mb-8">
        Sample data — connect a real analytics provider (e.g. GA4 or a custom tracking endpoint) to replace these charts with live numbers.
      </p>

      <div className="grid lg:grid-cols-2 gap-5 mb-5">
        <ChartCard title="Daily Visitors">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={data.dailyVisitors}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="day" stroke="var(--fg)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--fg)" fontSize={12} tickLine={false} axisLine={false} width={32} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Line type="monotone" dataKey="visitors" stroke="#2E6FFF" strokeWidth={2.5} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Monthly Visitors">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={data.monthlyVisitors}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--fg)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--fg)" fontSize={12} tickLine={false} axisLine={false} width={40} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="visitors" fill="#2E6FFF" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Traffic Sources">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={data.trafficSources} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={3}>
                {data.trafficSources.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Device Types">
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={data.deviceTypes} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={3}>
                {data.deviceTypes.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Most Viewed Pages">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={data.mostViewedPages} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis type="number" stroke="var(--fg)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis type="category" dataKey="page" stroke="var(--fg)" fontSize={12} tickLine={false} axisLine={false} width={80} />
              <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="views" fill="#2E6FFF" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Contact Conversion Rate">
          <div className="h-[260px] flex flex-col items-center justify-center">
            <p className="font-display font-bold text-5xl text-signal">{data.summary.contactConversionRate}</p>
            <p className="text-sm text-[var(--fg)]/50 mt-3">Visitors who submitted a contact form</p>
          </div>
        </ChartCard>
      </div>
    </div>
  )
}
