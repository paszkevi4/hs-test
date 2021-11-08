import { useEffect, useState } from 'react'
import Hoc from '../../HOC'
import { generateData } from '../../utils'
import TreeController from '../tree'
import { GeneartePrompt } from './generatePrompt'
import './genearted.css'

export const GeneratedController = () => {
	const [list, setList] = useState([])
	const TreeComponent = Hoc(TreeController, list)

	return (
		<div>
			<GeneartePrompt getCalculation={setList} />
			<TreeComponent />
		</div>
	)
}

export default GeneratedController
