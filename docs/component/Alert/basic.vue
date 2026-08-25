<template>
  <e-space direction="vertical" style="width: 100%">
    <e-alert title="保存成功" type="success" :closable="false" />
    <e-alert title="请检查填写内容" description="仍有 2 个必填项尚未完成。" type="warning" />
    <e-alert title="连接失败" description="请稍后重试或检查网络设置。" type="danger" />
  </e-space>
</template>
