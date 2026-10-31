interface StatCardProps {
  label: string;
  value?: string;
  change?: string;
}

export function StatCard({ label, value = "—", change }: StatCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-medium text-gray-500">{label}</p>
      <p className="mt-2 text-xl font-semibold text-slate-800">{value}</p>
      {change && (
        <p className="mt-1 text-xs text-gray-400">{change}</p>
      )}
    </div>
  );
}
