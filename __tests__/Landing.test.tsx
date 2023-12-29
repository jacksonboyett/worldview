import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Landing from "@/app/(landing)/page";

describe('Landing', () => {
	it('Renders the Landing page', () => {
		render(<Landing/>)

		const landing = screen.getByRole('Landing');

		expect(landing).toBeInTheDocument()
	})
})