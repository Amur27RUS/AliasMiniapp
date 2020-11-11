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
let countVar = 1;
// Количество правильных ответов
let scoreVar = 0;

let cardsMap = new Map();


const GamePage = props => {
	//const [activePanel, setActivePanel] = useState('home');
	const [cards, setCards] = useState(cardsMap);
	//const [words, setWords] = useState(wordsVar);
	const [score, setScore] = useState(scoreVar);
	const [count, setCount] = useState(countVar);

	// const foo = async () => await fetch('https://vgorash-vk-app.herokuapp.com/api/words/6', {
	// 	method: 'GET'//,
	// 	/*headers: {
	// 		'Accept': 'application/json',
	// 	   'Content-Type': 'application/json',
	// 		'Access-Control-Allow-Origin': 'https://vgorash-vk-app.herokuapp.com/'
	// 	}*/
   	// }).then(function (response) {
	//    return response.json();
  	//  }).then(function (data) {
	//    cardsMap.set(`card${count}`, data)
   	// }).catch((e) => {
	// 	console.log(e);
	// });
	   
	// foo()

	useEffect(() => {

		const foo = async () => await fetch('https://vgorash-vk-app.herokuapp.com/api/words/6', {
		 	method: 'GET'//,
		 	/*headers: {
		 		'Accept': 'application/json',
				'Content-Type': 'application/json',
		 		'Access-Control-Allow-Origin': 'https://vgorash-vk-app.herokuapp.com/'
		 	}*/
		}).then(function (response) {
			return response.json();
		}).then(function (data) {
			cardsMap.set(`card${count}`, data)
			setCards(cardsMap)
		}).catch((e) => {
		 	console.log(e);
		});

		foo()
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
			<div className={'counter'}>{score}</div>
			<div className={'allCardsDiv'}>
				<Div className={'cardDiv'}>
					<Swing className="cardDiv" id="cardStack"
						   //Обработка свайпа вправо:
						throwoutright={async e =>{
							scoreVar++;
							setScore(scoreVar);
						}}
						throwout={async e =>{
							let cards = document.getElementsByClassName('card');
							cards[cards.length-1].hidden = true;
							countVar++;
							setCount(countVar);
							console.log(e);
						}}
					>
						{cards.forEach((key, value) => 
							<div key={key} class={card}>
								{value.map(word => 
									<p>{word}</p>
								)}
							</div>
						)}
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
