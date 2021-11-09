import { useState } from 'react'
import { generateData } from '../../utils'

export const GeneartePrompt = ({ getCalculation }) => {
	const [depth, setDepth] = useState('')
	const [number, setNumber] = useState('')

	const calculate = () => {
		getCalculation(generateData(depth, number))
	}

	return (
		<div className='genearte-prompt'>
			<h2>
				To generate mock data enter two digits: depth of JSON tree and
				number of children in each node. Then press "Calculate".
			</h2>
			<input
				value={depth}
				type='number'
				onChange={(e) => setDepth(e.currentTarget.value)}
			/>
			<input
				value={number}
				type='number'
				onChange={(e) => setNumber(e.currentTarget.value)}
			/>
			<button className='genearte-prompt__button' onClick={calculate}>
				Calculate
			</button>
		</div>
	)
}
