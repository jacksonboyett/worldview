import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Landing from "@/app/(landing)/page";
import { useAuth } from '@clerk/nextjs';

jest.mock('@clerk/nextjs')

describe('Landing', () => {
	(useAuth as jest.Mock).mockReturnValue({isSignedIn: true})

	it('Renders the Landing page', () => {
		render(<Landing/>)

		const landing = screen.getByRole('Landing');

		expect(landing).toBeInTheDocument()
	})
})