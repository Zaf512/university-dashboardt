'use client';
import dynamic from 'next/dynamic';
import type { EChartsOption } from 'echarts';
const ReactECharts = dynamic(() => import('echarts-for-react'), { ssr: false });
export default function Chart({ option }: { option: EChartsOption }) {
  return <ReactECharts option={option} style={{ height: '100%', width: '100%' }} notMerge lazyUpdate />;
}
