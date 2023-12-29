import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Visualizer from '@/app/(dashboard)/(routes)/visualizer/page'

describe('Visualizer', () => {
	it('Renders the Visualizer page', () => {
		render(<Visualizer/>)

		const visualizer = screen.getByRole('Visualizer');

		expect(visualizer).toBeInTheDocument()
	})
})