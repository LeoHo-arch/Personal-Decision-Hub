import { PageHeader, SectionCard } from "@/components/wireframe";
import { Globe, Database, Bell } from "lucide-react";

export function SettingsPage() {
  return (
    <div>
      <PageHeader
        title="设置"
        description="账户、通知、数据源与显示偏好设置。"
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SectionCard
          title="个人偏好"
          description="语言、显示密度等显示设置"
          actions={<Globe size={16} className="text-gray-400" />}
        >
          <div className="space-y-4">
            <SettingsRow label="界面语言" />
            <SettingsRow label="显示密度" />
            <SettingsRow label="时区" />
            <SettingsRow label="主题" />
          </div>
        </SectionCard>

        <SectionCard
          title="数据更新设置"
          description="更新频率与数据源"
          actions={<Database size={16} className="text-gray-400" />}
        >
          <div className="space-y-4">
            <SettingsRow label="宏观数据更新频率" />
            <SettingsRow label="价格数据更新频率" />
            <SettingsRow label="股票数据更新频率" />
            <SettingsRow label="数据源" />
          </div>
        </SectionCard>

        <SectionCard
          title="提醒设置"
          description="价格提醒与决策提醒"
          actions={<Bell size={16} className="text-gray-400" />}
        >
          <div className="space-y-4">
            <SettingsRow label="价格目标提醒" />
            <SettingsRow label="大幅波动提醒" />
            <SettingsRow label="决策复盘提醒" />
            <SettingsRow label="经济数据发布提醒" />
          </div>
        </SectionCard>

        <SectionCard title="账户" description="账户信息与安全">
          <div className="space-y-4">
            <SettingsRow label="账户信息" />
            <SettingsRow label="数据备份" />
            <SettingsRow label="清除缓存" />
          </div>
        </SectionCard>
      </div>
    </div>
  );
}

function SettingsRow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0">
      <span className="text-sm text-gray-600">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400">未设置</span>
        <div className="h-5 w-9 rounded-full bg-gray-200" />
      </div>
    </div>
  );
}
