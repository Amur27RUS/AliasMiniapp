import React, { useState } from 'react';
import Async from 'react-async';
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

const osName = platform();

const loadCards = () =>
  fetch(properties.host + "/api/cards")
    .then(response => (response.ok ? response : Promise.reject(response)))
	.then(response => response.json())
	
const Persik = props => {
	//const [activePanel, setActivePanel] = useState('home');

	return (
		<Panel id={props.id}>
			<PanelHeader
				left={<PanelHeaderButton onClick={props.go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</PanelHeaderButton>}
			>
				Начало игры
			</PanelHeader>
			<div className={'allCardsDiv'}>
				<Div className={'cardDiv'}>
					<div className={'card'} size="m" mode="outline">
						<h2>Title</h2>
						<p>1. Test text</p>
						<p>2. Looooooong text</p>
						<p>3. Mid size text</p>
						{/*<Div style={{height: 96}}>*/}

						{/*	<Async promiseFn={loadCards}>*/}
						{/*		{({data, err, isLoading}) => {*/}
						{/*			if (isLoading) return <Spinner/>*/}
						{/*			if (err) return `Something went wrong: ${err.message}`*/}

						{/*			if (data)*/}
						{/*				return (*/}
						{/*					<div>*/}
						{/*						{data.map(card => (*/}
						{/*							<div>*/}
						{/*								<p>{card}</p>*/}
						{/*							</div>*/}
						{/*						))}*/}
						{/*					</div>*/}
						{/*				)*/}
						{/*		}}*/}
						{/*	</Async>*/}
						{/*</Div>*/}
					</div >

					<div className={'card'} size="m" mode="outline">
						<h2>Title</h2>
						<p>1. Test text</p>
						<p>2. Looooooong text</p>
						<p>3. Mid size text</p>
						{/*<Div style={{height: 96}}>*/}
						{/*	<Async promiseFn={loadCards}>*/}
						{/*		{({data, err, isLoading}) => {*/}
						{/*			if (isLoading) return <Spinner/>*/}
						{/*			if (err) return `Something went wrong: ${err.message}`*/}

						{/*			if (data)*/}
						{/*				return (*/}
						{/*					<div>*/}
						{/*						{data.map(card => (*/}
						{/*							<div>*/}
						{/*								<p>{card}</p>*/}
						{/*							</div>*/}
						{/*						))}*/}
						{/*					</div>*/}
						{/*				)*/}
						{/*		}}*/}
						{/*	</Async>*/}
						{/*</Div>*/}
					</div>
					<div className={'card'} size="m" mode="outline">
						<h2>Title</h2>
						<p>1. Test text</p>
						<p>2. Looooooong text</p>
						<p>3. Mid size text</p>
						{/*<Div style={{height: 96}}>*/}
						{/*	<Async promiseFn={loadCards}>*/}
						{/*		{({data, err, isLoading}) => {*/}
						{/*			if (isLoading) return <Spinner/>*/}
						{/*			if (err) return `Something went wrong: ${err.message}`*/}

						{/*			if (data)*/}
						{/*				return (*/}
						{/*					<div>*/}
						{/*						{data.map(card => (*/}
						{/*							<div>*/}
						{/*								<p>{card}</p>*/}
						{/*							</div>*/}
						{/*						))}*/}
						{/*					</div>*/}
						{/*				)*/}
						{/*		}}*/}
						{/*	</Async>*/}
						{/*</Div>*/}
					</div>
					<div className={'card'} size="m" mode="outline">
						<h2>Title</h2>
						<p>1. Test text</p>
						<p>2. Looooooong text</p>
						<p>3. Mid size text</p>
						{/*<Div style={{height: 96}}>*/}
						{/*	<Async promiseFn={loadCards}>*/}
						{/*		{({data, err, isLoading}) => {*/}
						{/*			if (isLoading) return <Spinner/>*/}
						{/*			if (err) return `Something went wrong: ${err.message}`*/}

						{/*			if (data)*/}
						{/*				return (*/}
						{/*					<div>*/}
						{/*						{data.map(card => (*/}
						{/*							<div>*/}
						{/*								<p>{card}</p>*/}
						{/*							</div>*/}
						{/*						))}*/}
						{/*					</div>*/}
						{/*				)*/}
						{/*		}}*/}
						{/*	</Async>*/}
						{/*</Div>*/}
					</div>
					<div className={'card'} size="m" mode="outline">
						<h2>Title</h2>
						<p>1. Test text</p>
						<p>2. Looooooong text</p>
						<p>3. Mid size text</p>
						{/*<Div style={{height: 96}}>*/}
						{/*	<Async promiseFn={loadCards}>*/}
						{/*		{({data, err, isLoading}) => {*/}
						{/*			if (isLoading) return <Spinner/>*/}
						{/*			if (err) return `Something went wrong: ${err.message}`*/}

						{/*			if (data)*/}
						{/*				return (*/}
						{/*					<div>*/}
						{/*						{data.map(card => (*/}
						{/*							<div>*/}
						{/*								<p>{card}</p>*/}
						{/*							</div>*/}
						{/*						))}*/}
						{/*					</div>*/}
						{/*				)*/}
						{/*		}}*/}
						{/*	</Async>*/}
						{/*</Div>*/}
					</div>

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
