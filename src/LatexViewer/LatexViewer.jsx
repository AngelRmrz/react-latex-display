import React, { useState } from 'react';
import './styles.css';
import formula from '../assets/formula.svg'
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import CopyToClipboard from 'react-copy-to-clipboard';

const LatexViewer = () => {

	const [text, setText] = useState('')

	const config = {
		loader: { load: ["[tex]/html"] },
		tex: {
			packages: { "[+]": ["html"] },
			inlineMath: [
				["$", "$"],
				["\\(", "\\)"]
			],
			displayMath: [
				["$$", "$$"],
				["\\[", "\\]"]
			]
		}
	};

	return <div className='container'>
		<div className='title'>
			<img src={formula} alt='formula' />
			<h1>Latex Viewer</h1>
		</div>

		<div className='latex__text'>
			<h2>Texto latex:</h2>
			<textarea
				className='latex-input'
				placeholder='Escribe tu texto latex aquí'
				onChange={(e) => setText(e.target.value)}
			/>
		</div>

		<div className='latex__viewer'>
			<h2>Visualización:</h2>
			<div>
				<MathJaxContext config={config}>
					<MathJax>{text}</MathJax>
				</MathJaxContext>
				<CopyToClipboard text={text}
					onCopy={() => { }}>
					<button type="button" className='btn__copy'>Copiar</button>
				</CopyToClipboard>
			</div>
		</div>

	</div>;
};

export default LatexViewer;
