import { LayoutDashboard, LineChart, Settings } from "lucide-react";

export const SIDEBAR_LINKS = [
	{
		label: "Dashboard",
		icon: LayoutDashboard,
		href: "/dashboard",
		color: 'text-sky-500'
	},
	{
		label: "Visualizer",
		icon: LineChart,
		href: "/visualizer",
		color: 'text-violet-500'
	},
	{
		label: "Settings",
		icon: Settings,
		href: "/settings",
		color: 'text-gray-700'
	},
]