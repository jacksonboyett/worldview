import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Settings from '@/app/(dashboard)/(routes)/settings/page'

describe('Settings', () => {
	it('Renders the Settings page', () => {
		render(<Settings/>)

		const settings = screen.getByRole('Settings');

		expect(settings).toBeInTheDocument()
	})
})