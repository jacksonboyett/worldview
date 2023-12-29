import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Dashboard from '@/app/(dashboard)/(routes)/dashboard/page'

describe('Dashboard', () => {
	it('Renders the Dashboard page', () => {
		render(<Dashboard/>)

		const dashboard = screen.getByRole('Dashboard');

		expect(dashboard).toBeInTheDocument()
	})
})