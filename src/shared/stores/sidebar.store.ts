import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface SidebarStore {
	isCollapsed: boolean
	setIsCollapsed: (value: boolean) => void
}

const sidebarStore = create(
	persist<SidebarStore>(
		set => ({
			isCollapsed: false,
			setIsCollapsed: (value: boolean) => set({ isCollapsed: value })
		}),
		{
			name: 'sidebar',
			storage: createJSONStorage(() => localStorage)
		}
	)
)

export function useSidebarStore() {
	const isCollapsed = sidebarStore(state => state.isCollapsed)
	const setIsCollapsed = sidebarStore(state => state.setIsCollapsed)

	const open = () => setIsCollapsed(false)
	const close = () => setIsCollapsed(true)

	return {
		isCollapsed,
		open,
		close
	}
}
