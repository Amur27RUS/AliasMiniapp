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
let counter = 0;
const osName = platform();

const loadCards = () =>
  fetch(properties.host + "/api/cards")
    .then(response => (response.ok ? response : Promise.reject(response)))
	.then(response => response.json())
	
const Persik = props => {
	//const [activePanel, setActivePanel] = useState('home');
	const [cardsArr, setCardsArr] = useState(['card','card2','card33','card444','card5555','card66666']);
	const [cardsStack, setCardsStack] = useState(['card1','card2','card3','card4','card5','card6']);
	const [words, setWords] = useState([]);
	const [count, setCount] = useState(counter);

	useEffect(() => {
		counter = 0;
		//todo Здесь запрос не работает, его нужно поместить в другое место

		/* fetch('https://vgorash-vk-app.herokuapp.com/api/words/5', {
		 	method: 'GET',
		 	headers: {
		 		'Accept': 'application/json',
				'Content-Type': 'application/json',
		 		'Access-Control-Allow-Origin': 'https://vgorash-vk-app.herokuapp.com/'
		 	}
		 }).then(function (response) {
		 	return response.json();
		 }).then(function (data) {
		 		setWords(data)
		 	}).catch((e) => {
		 	console.log(e);
		 }) */
	}, []);

	return (
		<Panel id={props.id}>
			<PanelHeader
				left={<PanelHeaderButton onClick={props.go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</PanelHeaderButton>}
			>
				Начало игры
			</PanelHeader>
			<div className={'counter'}>{count}</div>
			<div className={'allCardsDiv'}>
				<Div className={'cardDiv'}>
					<Swing className="cardDiv"
						   //Обработка свайпа вправо:
						throwoutright={async e=>{
							let cards = document.getElementsByClassName('card');
							cards[cards.length-1].hidden = true;
							counter++;
							setCount(counter);
						}}
						throwout={e =>{
							console.log(e);
						}}
					>
					{cardsArr.map(card => (
					<div key={card} className={'card'}>
						{words.map(word =>(
							<p>{word}</p>
						))}
					</div >
						))}
					</Swing>
				</Div>
			</div>
		</Panel>
	);
}

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
