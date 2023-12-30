import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Dashboard from '@/app/(dashboard)/(routes)/dashboard/page'
import { auth } from '@clerk/nextjs'

jest.mock('@clerk/nextjs')

describe('Dashboard', () => {
	(auth as jest.Mock).mockReturnValue({isSignedIn: true})
	it('Renders the Dashboard page', () => {
		render(<Dashboard/>)

		const dashboard = screen.getByRole('Dashboard');

		expect(dashboard).toBeInTheDocument()
	})
})