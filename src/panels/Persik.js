import React from 'react';
import Async from 'react-async';
import PropTypes from 'prop-types';
import { platform, IOS, Text} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
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
	
const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Начало игры
		</PanelHeader>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
		<Card size="l" mode="outline">
			<div style={{ height: 96 }}>
				<Async promiseFn={loadCards}>
					{({ data, err, isLoading }) => {
					if (isLoading) return "Loading..."
					if (err) return `Something went wrong: ${err.message}`

					if (data)
						return (
						<div>
							{data.map(card=> (
							<div>
								<p>{card}</p>
							</div>
							))}
						</div>
						)
					}}
				</Async>
			</div>
        </Card>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
