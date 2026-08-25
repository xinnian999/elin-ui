<template>
  <div class="icon-catalog vp-raw">
    <div class="catalog-toolbar">
      <div>
        <strong>{{ filteredCount }}</strong>
        <span>{{ keyword ? ` / ${totalCount} 个匹配图标` : ' 个可用图标' }}</span>
      </div>
      <e-input v-model="keyword" clearable placeholder="搜索图标名称，例如 Home、User、File…" />
    </div>

    <div v-if="filteredCount" class="catalog-groups">
      <section v-for="group in filteredGroups" :key="group.title" class="catalog-group">
        <div class="group-heading">
          <h3>{{ group.title }}</h3>
          <span>{{ group.icons.length }}</span>
        </div>
        <ul class="icon-list">
          <li v-for="[name, icon] in group.icons" :key="name">
            <button type="button" :title="`复制 <${name} />`" @click="handleCopy(name)">
              <component :is="icon" :size="24" aria-hidden="true" />
              <span>{{ name.slice(4) }}</span>
            </button>
          </li>
        </ul>
      </section>
    </div>

    <e-empty v-else :image-size="108" :description="`没有找到“${keyword}”相关图标`">
      <template #action><e-button @click="keyword = ''">清除搜索</e-button></template>
    </e-empty>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import * as icons from '@/assets/icons'
import { EMessage } from 'elin-ui'

type IconEntry = [string, (typeof icons)[keyof typeof icons]]

const keyword = ref('')
const iconEntries = Object.entries(icons).sort(([a], [b]) => a.localeCompare(b)) as IconEntry[]
const totalCount = iconEntries.length

const categoryRules = [
  {
    title: '方向与导航',
    test: /Arrow|Chevron|Corner|Compass|Cursor|Dashboard|Fullscreen|Grid|Home|Locate|Map|Maximize|Menu|Minimize|Move|Navigation|Panel|Route|Sidebar|Signpost/
  },
  {
    title: '用户与安全',
    test: /Accessibility|BadgeCheck|Briefcase|Building|CircleUser|Contact|Crown|IdCard|Key|Lock|LogIn|LogOut|Shield|Store|Unlock|User/
  },
  {
    title: '沟通与连接',
    test: /Airplay|AtSign|Bell|Bluetooth|Globe|Inbox|Mail|Message|Mic|Network|Phone|Podcast|Radio|Rss|Send|Wifi/
  },
  {
    title: '文件与内容',
    test: /Archive|Book|Bookmark|Box|Clipboard|File|Folder|Image|Import|Layers|Newspaper|Notebook|Package|Paperclip|Receipt/
  },
  {
    title: '媒体与设备',
    test: /Camera|FastForward|Film|Headphones|Laptop|Monitor|Music|Pause|Play|Repeat|Rewind|Shuffle|Skip|Smartphone|Tablet|Video|Volume/
  },
  {
    title: '数据与开发',
    test: /Activity|BarChart|Braces|Brackets|Chart|Code|Cpu|Database|Gauge|Git|HardDrive|LineChart|Memory|PieChart|Server|Table|Terminal|Trending/
  },
  {
    title: '状态与反馈',
    test: /Award|Ban|Check|Circle|Error|Flag|Help|Info|LifeBuoy|Loader|Medal|Octagon|Sparkles|Star|Success|Thumbs|TriangleAlert|Trophy|Warning|X$/
  },
  {
    title: '商业与物流',
    test: /Banknote|Barcode|Calculator|Coins|CreditCard|Dollar|Gift|Percent|QrCode|Shopping|Tag|Ticket|Truck|Wallet/
  },
  {
    title: '天气与自然',
    test: /Cloud|Droplets|Flame|Leaf|Moon|Snowflake|Sun|Thermometer|Wind/
  },
  {
    title: '文本编辑',
    test: /Align|Bold|Heading|Indent|Italic|List|Quote|Strikethrough|Type|Underline/
  }
]

const getCategory = (name: string) =>
  categoryRules.find((category) => category.test.test(name))?.title || '常用操作'

const filteredGroups = computed(() => {
  const query = keyword.value.trim().toLowerCase()
  const filtered = query
    ? iconEntries.filter(([name]) => name.slice(4).toLowerCase().includes(query))
    : iconEntries

  return [...categoryRules.map(({ title }) => title), '常用操作']
    .map((title) => ({ title, icons: filtered.filter(([name]) => getCategory(name) === title) }))
    .filter((group) => group.icons.length)
})

const filteredCount = computed(() =>
  filteredGroups.value.reduce((count, group) => count + group.icons.length, 0)
)

const handleCopy = async (name: string) => {
  await navigator.clipboard.writeText(`<${name} />`)
  EMessage.success(`已复制 <${name} />`)
}
</script>

<style scoped>
.icon-catalog {
  margin-top: 20px;
}

.catalog-toolbar {
  position: sticky;
  z-index: 5;
  top: 64px;
  display: grid;
  grid-template-columns: auto minmax(220px, 360px);
  gap: 24px;
  align-items: center;
  padding: 14px 16px;
  border: 1px solid var(--elin-border-color);
  border-radius: 12px;
  background: color-mix(in srgb, var(--elin-bg-color) 92%, transparent);
  box-shadow: 0 12px 32px rgb(15 23 42 / 8%);
  backdrop-filter: blur(14px);
}

.catalog-toolbar strong {
  color: var(--elin-primary-color);
  font-size: 24px;
}

.catalog-toolbar span {
  color: var(--elin-text-color-regular);
  font-size: 13px;
}

.catalog-groups {
  display: grid;
  gap: 34px;
  margin-top: 34px;
}

.catalog-group {
  margin: 0;
}

.group-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 12px;
}

.group-heading h3 {
  margin: 0;
  border: 0;
  font-size: 17px;
}

.group-heading span {
  color: var(--elin-text-color-placeholder);
  font-size: 12px;
}

.icon-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--elin-border-color-lighter);
  border-radius: 12px;
  list-style: none;
}

.icon-list li {
  min-width: 0;
  border-right: 1px solid var(--elin-border-color-lighter);
  border-bottom: 1px solid var(--elin-border-color-lighter);
}

.icon-list button {
  display: flex;
  width: 100%;
  min-height: 94px;
  padding: 14px 8px;
  border: 0;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  background: var(--elin-bg-color);
  color: var(--elin-text-color-regular);
  cursor: pointer;
  transition:
    color 160ms ease,
    background 160ms ease,
    transform 160ms ease;
}

.icon-list button:hover {
  position: relative;
  z-index: 1;
  background: var(--elin-primary-color-9);
  color: var(--elin-primary-color);
  transform: translateY(-2px);
}

.icon-list button span {
  max-width: 100%;
  overflow: hidden;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 900px) {
  .icon-list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .catalog-toolbar {
    position: static;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .icon-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
