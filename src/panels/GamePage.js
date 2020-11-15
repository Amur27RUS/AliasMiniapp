import React, { useState, useEffect } from 'react';
import Async from 'react-async';
import Swing from 'react-swing';
import PropTypes from 'prop-types';
import { platform, IOS, Text, Card, Spinner, Div } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { properties } from '../properties.js';

import persik from '../img/persik.png';
import './Persik.css';
import bridge from "@vkontakte/vk-bridge";

const osName = platform();

// Общее число карт
let countVar = 0;
// Количество правильных ответов
let scoreVar = 0;

let cardsArr = [];
let wordsArr = [];

fetch('https://vgorash-vk-app.herokuapp.com/api/words/6', {
	method: 'GET'//,
	// headers: {
	// 	'Accept': 'application/json',
	// 	'Content-Type': 'application/json',
	// 	'Access-Control-Allow-Origin': 'https://vgorash-vk-app.herokuapp.com/'
	// }
}).then(function (response) {
	return response.json();
}).then(function (data) {
	wordsArr.push(data)
	cardsArr.push(`card${countVar}`)
	countVar++
}).catch((e) => {
	console.log(e);
});

const GamePage = props => {
	//const [activePanel, setActivePanel] = useState('home');
	const [cards, setCards] = useState(cardsArr);
	const [words, setWords] = useState(wordsArr);
	const [score, setScore] = useState(scoreVar);
	const [count, setCount] = useState(countVar);
	const [finalScore, setFinalScore] = useState(0);

	useEffect(() => {

	}, [count]);

	return (
		<Panel id={props.id}>
			<PanelHeader
				left={<PanelHeaderButton onClick={props.go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</PanelHeaderButton>}
			>
				Начало игры
			</PanelHeader>
			<div className={'counter'}>{finalScore}</div>
			<div className={'allCardsDiv'}>
				<Div className={'cardDiv'}>
					<Swing className="cardDiv" id="cardStack"
						   //Обработка свайпа вправо:
						throwoutright={e => {
							let finScore = finalScore;
							finScore++;
							setFinalScore(finScore);
						}}

						throwout={e =>{
							let elemIndex = cardsArr.indexOf(e.target.id)
							cardsArr.splice(elemIndex, 1)
							wordsArr.splice(elemIndex, 1)
							scoreVar++;
							setScore(scoreVar);
							fetch('https://vgorash-vk-app.herokuapp.com/api/words/6', {
								method: 'GET'//,
							}).then(function (response) {
								return response.json();
							}).then(function (data) {
								wordsArr.push(data)
								cardsArr.push(`card${countVar++}`)
								setCount(countVar);
								setWords(wordsArr)
								setCards(cardsArr)
							}).catch((e) => {
								console.log(e);
							});
						}}
						>
						{
							cards.map(card => (
								<div key={card} id={card} className={'card'}>
									{words[cardsArr.indexOf(card)].map(word =>(
										<p key={word}>{word}</p>
									))}
								</div >
						))}
					</Swing>
				</Div>
			</div>
		</Panel>
	);
}

GamePage.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default GamePage;
