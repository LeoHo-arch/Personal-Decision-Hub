import type { NewsItem } from "@/types/news";

export const MOCK_NEWS: NewsItem[] = [
  {
    id: "news-1101",
    title: "示例：多国就关键矿产出口许可框架达成初步共识",
    region: "global",
    primaryTopic: "energy",
    tags: ["关键矿产", "出口许可"],
    importance: "high",
    summary:
      "演示事件：多个资源出口国与进口国的代表在闭门磋商后，就关键矿产出口许可的通报机制达成初步框架。具体执行细节尚未公布。",
    whyItMatters:
      "关键矿产直接关系到电池、电网和高端制造的原材料供应，出口许可规则的变化会影响相关产业链的成本与交付节奏。",
    sourceNames: ["Reuters", "Financial Times"],
    publishedAt: "2026-11-06T08:30:00+08:00",
    eventDate: "2026-11-05",
    detail: [
      "以下为演示占位内容，用于展示页面结构，并非真实报道。",
      "据演示稿件描述，各方同意在出口许可审批中增加信息通报环节，并在未来数月内讨论统一的数据格式。",
    ],
    mediaReports: [
      {
        source: "Reuters",
        headline: "示例报道：关键矿产出口许可进入框架讨论阶段",
        publishedAt: "2026-11-06T08:30:00+08:00",
      },
      {
        source: "Financial Times",
        headline: "示例报道：产业界关注出口许可对供应链的影响",
        publishedAt: "2026-11-06T09:15:00+08:00",
      },
    ],
    officialInformation: [
      {
        source: "演示占位：参与方联合声明",
        content: "演示内容：各方表示将继续推进技术磋商，暂未公布时间表。",
      },
    ],
    potentialImpacts: [
      {
        area: "供应链",
        content: "分析判断：若通报机制落地，相关企业或需要更早规划采购与库存。",
      },
      {
        area: "国际贸易",
        content: "分析判断：规则细节将决定其对跨境贸易成本的实际影响。",
      },
    ],
  },
  {
    id: "news-1102",
    title: "示例：某经济体调整对外投资审查规则",
    region: "us",
    primaryTopic: "policy",
    tags: ["投资审查", "产业安全"],
    importance: "high",
    summary:
      "演示事件：一项对外投资审查规则的调整草案被公布，拟扩大对关键技术领域投资的审查范围，并延长审查周期。",
    whyItMatters:
      "投资审查规则直接影响跨境并购和合资项目，可能改变企业的海外布局决策与融资预期。",
    sourceNames: ["AP", "Reuters"],
    publishedAt: "2026-11-06T09:10:00+08:00",
    eventDate: "2026-11-06",
    detail: [
      "以下为演示占位内容，用于展示页面结构，并非真实报道。",
      "演示稿件称，草案将进入公开意见征集阶段，正式生效时间尚未确定。",
    ],
    mediaReports: [
      {
        source: "AP",
        headline: "示例报道：投资审查草案扩大技术领域覆盖范围",
        publishedAt: "2026-11-06T09:10:00+08:00",
      },
    ],
    officialInformation: [
      {
        source: "演示占位：主管部门公告",
        content: "演示内容：公告表示欢迎各界就草案提出意见，征集期限待定。",
      },
    ],
    potentialImpacts: [
      {
        area: "产业与投资",
        content: "分析判断：相关技术领域的跨境合作项目或面临更长的审批周期。",
      },
      {
        area: "宏观经济",
        content: "分析判断：如影响跨境资本流动，可能间接影响汇率与融资成本。",
      },
    ],
  },
  {
    id: "news-1103",
    title: "示例：欧洲多国磋商跨境数字服务税框架",
    region: "europe",
    primaryTopic: "trade",
    tags: ["数字服务", "跨境税收"],
    importance: "medium",
    summary:
      "演示事件：欧洲若干成员国的财政官员讨论统一的跨境数字服务税框架，各国在税率与适用门槛上仍存在分歧。",
    whyItMatters:
      "跨境数字服务的税收规则会影响平台企业的定价和市场准入，也关系到不同经济体之间的税收协调。",
    sourceNames: ["BBC", "Financial Times"],
    publishedAt: "2026-11-06T10:00:00+08:00",
    eventDate: "2026-11-06",
    detail: [
      "以下为演示占位内容，用于展示页面结构，并非真实报道。",
      "演示稿件称，磋商尚未形成正式提案，各方同意在下一轮会议中继续讨论适用门槛。",
    ],
    mediaReports: [
      {
        source: "BBC",
        headline: "示例报道：欧洲各国就数字服务税分歧仍然明显",
        publishedAt: "2026-11-06T10:00:00+08:00",
      },
      {
        source: "Financial Times",
        headline: "示例报道：平台企业密切关注税率讨论",
        publishedAt: "2026-11-06T11:30:00+08:00",
      },
    ],
    officialInformation: [],
    potentialImpacts: [
      {
        area: "国际贸易",
        content: "分析判断：若框架落地，跨境数字服务的成本结构可能随之调整。",
      },
    ],
  },
  {
    id: "news-1104",
    title: "示例：某国发布外贸通关便利化新措施",
    region: "china",
    primaryTopic: "trade",
    tags: ["外贸便利化", "通关"],
    importance: "medium",
    summary:
      "演示事件：一项外贸通关便利化措施的方案被公布，内容包括压缩部分单证审核时间，并推广电子化申报流程。",
    whyItMatters:
      "通关效率直接影响出口企业的交付周期和资金占用，也是衡量贸易环境变化的常用观察点。",
    sourceNames: ["Reuters", "BBC"],
    publishedAt: "2026-11-06T11:20:00+08:00",
    eventDate: "2026-11-06",
    detail: [
      "以下为演示占位内容，用于展示页面结构，并非真实报道。",
      "演示稿件描述了方案的主要方向，具体实施时间表和覆盖范围将在后续文件中公布。",
    ],
    mediaReports: [
      {
        source: "Reuters",
        headline: "示例报道：通关便利化方案聚焦单证与电子申报",
        publishedAt: "2026-11-06T11:20:00+08:00",
      },
    ],
    officialInformation: [
      {
        source: "演示占位：部门新闻发布",
        content: "演示内容：发布会表示方案将分阶段推进，细则以正式文件为准。",
      },
    ],
    potentialImpacts: [
      {
        area: "出口企业",
        content: "分析判断：若执行到位，出口企业的通关等待时间或将缩短。",
      },
    ],
  },
  {
    id: "news-1105",
    title: "示例：主要经济体央行会议纪要释放利率路径信号",
    region: "global",
    primaryTopic: "macro",
    tags: ["利率", "央行沟通"],
    importance: "medium",
    summary:
      "演示事件：多家主要经济体央行公布的会议纪要显示，决策者对通胀回落速度的判断存在分歧，市场对利率路径的预期出现调整。",
    whyItMatters:
      "央行利率路径是全球资产定价和融资成本的重要锚点，会议纪要的措辞变化常被视为政策方向的先行信号。",
    sourceNames: ["Financial Times", "AP"],
    publishedAt: "2026-11-06T13:00:00+08:00",
    eventDate: "2026-11-06",
    detail: [
      "以下为演示占位内容，用于展示页面结构，并非真实报道。",
      "演示稿件称，纪要中多次提及数据依赖，但未给出明确的降息或加息时间点。",
    ],
    mediaReports: [
      {
        source: "Financial Times",
        headline: "示例报道：央行纪要措辞显示内部分歧",
        publishedAt: "2026-11-06T13:00:00+08:00",
      },
      {
        source: "AP",
        headline: "示例报道：市场对利率路径的预期出现调整",
        publishedAt: "2026-11-06T14:10:00+08:00",
      },
    ],
    officialInformation: [
      {
        source: "演示占位：央行会议纪要",
        content: "演示内容：纪要原文记录了委员对通胀与就业数据的不同看法。",
      },
    ],
    potentialImpacts: [
      {
        area: "宏观经济与金融",
        content: "分析判断：利率预期的波动可能影响债券收益率与汇率走势。",
      },
    ],
  },
  {
    id: "news-1106",
    title: "示例：区域安全对话机制启动新一轮会晤",
    region: "global",
    primaryTopic: "geopolitics",
    tags: ["区域安全", "多边对话"],
    importance: "normal",
    summary:
      "演示事件：某区域安全对话机制宣布启动新一轮会晤，议题包括海上通道安全与危机沟通渠道，具体成果有待观察。",
    whyItMatters:
      "区域安全对话的进展会影响航运路线、保险费率与相关地区的投资环境。",
    sourceNames: ["BBC"],
    publishedAt: "2026-11-06T15:40:00+08:00",
    eventDate: "2026-11-06",
    detail: [
      "以下为演示占位内容，用于展示页面结构，并非真实报道。",
      "演示稿件称，会晤安排为期两天，各方同意在会后发布简要通报。",
    ],
    mediaReports: [
      {
        source: "BBC",
        headline: "示例报道：区域安全对话重启会晤",
        publishedAt: "2026-11-06T15:40:00+08:00",
      },
    ],
    officialInformation: [],
    potentialImpacts: [
      {
        area: "航运与能源",
        content: "分析判断：若议题取得进展，相关海上通道的风险溢价可能下降。",
      },
    ],
  },
  {
    id: "news-1107",
    title: "示例：美国财政部更新资本流动数据披露口径",
    region: "us",
    primaryTopic: "macro",
    tags: ["资本流动", "数据披露"],
    importance: "medium",
    summary:
      "演示事件：美国财政部宣布更新跨境资本流动数据的披露口径，新增部分机构投资者的分类统计。",
    whyItMatters:
      "资本流动数据是判断跨境资金方向的基础指标，口径调整会影响市场对资金面的解读。",
    sourceNames: ["AP", "Financial Times"],
    publishedAt: "2026-11-05T09:00:00+08:00",
    eventDate: "2026-11-05",
    detail: [
      "以下为演示占位内容，用于展示页面结构，并非真实报道。",
      "演示稿件称，新口径将从下一期数据开始适用，历史数据是否回溯调整未作说明。",
    ],
    mediaReports: [
      {
        source: "AP",
        headline: "示例报道：资本流动数据口径调整",
        publishedAt: "2026-11-05T09:00:00+08:00",
      },
    ],
    officialInformation: [
      {
        source: "演示占位：财政部说明",
        content: "演示内容：说明文件列出了新增分类的定义，历史回溯安排待定。",
      },
    ],
    potentialImpacts: [
      {
        area: "金融市场",
        content: "分析判断：口径变化可能使短期数据对比出现偏差，需谨慎解读。",
      },
    ],
  },
  {
    id: "news-1108",
    title: "示例：某省启动新能源装备产业扶持政策",
    region: "china",
    primaryTopic: "policy",
    tags: ["产业政策", "新能源"],
    importance: "normal",
    summary:
      "演示事件：某省政府发布新能源装备制造产业扶持方案，涵盖用地、研发补贴和人才引进等方面的支持措施。",
    whyItMatters:
      "地方产业政策会影响区域投资布局，也反映出产业竞争在地方层面的具体展开方式。",
    sourceNames: ["Reuters"],
    publishedAt: "2026-11-05T14:00:00+08:00",
    eventDate: "2026-11-05",
    detail: [
      "以下为演示占位内容，用于展示页面结构，并非真实报道。",
      "演示稿件称，方案有效期为三年，具体补贴标准将由各地细化执行。",
    ],
    mediaReports: [
      {
        source: "Reuters",
        headline: "示例报道：地方出台新能源装备扶持方案",
        publishedAt: "2026-11-05T14:00:00+08:00",
      },
    ],
    officialInformation: [
      {
        source: "演示占位：省政府政策文件",
        content: "演示内容：文件列出了扶持项目的申报条件与评审程序。",
      },
    ],
    potentialImpacts: [
      {
        area: "产业竞争",
        content: "分析判断：地方补贴可能加剧同类产业的区域竞争。",
      },
    ],
  },
  {
    id: "news-1109",
    title: "示例：欧洲多国联合能源储备调度方案进入评审",
    region: "europe",
    primaryTopic: "energy",
    tags: ["能源储备", "联合调度"],
    importance: "high",
    summary:
      "演示事件：欧洲多国能源主管部门提交的联合储备调度方案进入正式评审，方案涉及跨境管道与储备释放的协调机制。",
    whyItMatters:
      "能源储备的协调调度直接关系到区域供应安全，也会影响能源价格的短期波动。",
    sourceNames: ["BBC", "Reuters"],
    publishedAt: "2026-11-05T17:30:00+08:00",
    eventDate: "2026-11-05",
    detail: [
      "以下为演示占位内容，用于展示页面结构，并非真实报道。",
      "演示稿件称，评审周期预计数周，最终方案需经过成员国的一致同意。",
    ],
    mediaReports: [
      {
        source: "BBC",
        headline: "示例报道：欧洲能源储备协调方案进入评审",
        publishedAt: "2026-11-05T17:30:00+08:00",
      },
      {
        source: "Reuters",
        headline: "示例报道：跨境管道调度成为讨论焦点",
        publishedAt: "2026-11-05T18:05:00+08:00",
      },
    ],
    officialInformation: [
      {
        source: "演示占位：能源主管部门通报",
        content: "演示内容：通报确认方案已提交评审，未公布具体释放规模。",
      },
    ],
    potentialImpacts: [
      {
        area: "能源与大宗商品",
        content: "分析判断：若储备调度机制生效，短期能源价格的波动幅度可能收窄。",
      },
      {
        area: "产业",
        content: "分析判断：能源密集型产业的成本预期或随之调整。",
      },
    ],
  },
  {
    id: "news-1110",
    title: "示例：多边机构发布半导体供应链风险报告",
    region: "global",
    primaryTopic: "trade",
    tags: ["供应链", "半导体"],
    importance: "medium",
    summary:
      "演示事件：一家多边机构发布半导体供应链风险报告，指出关键设备与材料的集中度较高，并建议加强多元化布局。",
    whyItMatters:
      "半导体是多个产业的基础元件，供应链集中度的讨论直接关系到产业竞争格局和政策取向。",
    sourceNames: ["Financial Times", "AP"],
    publishedAt: "2026-11-04T10:00:00+08:00",
    eventDate: "2026-11-04",
    detail: [
      "以下为演示占位内容，用于展示页面结构，并非真实报道。",
      "演示稿件称，报告为年度风险评估的一部分，结论基于演示数据，并不代表具体企业的情况。",
    ],
    mediaReports: [
      {
        source: "Financial Times",
        headline: "示例报道：半导体供应链集中度引发关注",
        publishedAt: "2026-11-04T10:00:00+08:00",
      },
    ],
    officialInformation: [],
    potentialImpacts: [
      {
        area: "产业竞争",
        content: "分析判断：多元化布局的讨论可能推动相关投资与政策支持的增加。",
      },
    ],
  },
  {
    id: "news-1111",
    title: "示例：两个经济体启动产业合作对话",
    region: "us",
    primaryTopic: "geopolitics",
    tags: ["产业合作", "双边对话"],
    importance: "normal",
    summary:
      "演示事件：两个经济体的官员宣布启动产业合作对话机制，首批议题涉及标准互认与人才交流。",
    whyItMatters:
      "双边对话机制的设立通常是关系走向的早期信号，其后续议题进展值得持续观察。",
    sourceNames: ["Reuters"],
    publishedAt: "2026-11-04T16:20:00+08:00",
    eventDate: "2026-11-04",
    detail: [
      "以下为演示占位内容，用于展示页面结构，并非真实报道。",
      "演示稿件称，对话的首次会议时间尚未确定，双方表示将另行通报。",
    ],
    mediaReports: [
      {
        source: "Reuters",
        headline: "示例报道：双边产业合作对话启动",
        publishedAt: "2026-11-04T16:20:00+08:00",
      },
    ],
    officialInformation: [
      {
        source: "演示占位：双方联合通报",
        content: "演示内容：通报列出了首批议题，但未包含具体成果指标。",
      },
    ],
    potentialImpacts: [
      {
        area: "国际关系",
        content: "分析判断：机制能否持续运行，将决定其对双边关系的实际影响。",
      },
    ],
  },
  {
    id: "news-1112",
    title: "示例：某地区发布地方债务化解阶段性进展",
    region: "china",
    primaryTopic: "macro",
    tags: ["地方债务", "财政"],
    importance: "normal",
    summary:
      "演示事件：某地区财政部门通报地方债务化解的阶段性进展，披露了部分隐性债务的置换与清理情况。",
    whyItMatters:
      "地方债务化解关系到财政可持续性与基础设施投资节奏，是宏观经济讨论的常见议题。",
    sourceNames: ["Reuters", "BBC"],
    publishedAt: "2026-11-03T11:00:00+08:00",
    eventDate: "2026-11-03",
    detail: [
      "以下为演示占位内容，用于展示页面结构，并非真实报道。",
      "演示稿件称，通报中的数字为演示用途，未覆盖全部地区。",
    ],
    mediaReports: [
      {
        source: "Reuters",
        headline: "示例报道：地方债务化解取得阶段性进展",
        publishedAt: "2026-11-03T11:00:00+08:00",
      },
      {
        source: "BBC",
        headline: "示例报道：地方财政压力仍是关注重点",
        publishedAt: "2026-11-03T12:30:00+08:00",
      },
    ],
    officialInformation: [
      {
        source: "演示占位：财政部门通报",
        content: "演示内容：通报表示将继续推进化解工作，具体进度以后续通报为准。",
      },
    ],
    potentialImpacts: [
      {
        area: "宏观经济",
        content: "分析判断：化解进展可能影响地方基础设施投资的节奏与融资环境。",
      },
    ],
  },
];
