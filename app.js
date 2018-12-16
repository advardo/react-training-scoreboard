const players = [
	{
		name: "Eduard",
		score: 55,
		id: 1
	}, 
	{
		name: "Misha",
		score: 47,
		id: 2
	}, 
	{
		name: "Sasha",
		score: 228,
		id: 3
	}, 
	{
		name: "Hex",
		score: 1488,
		id: 4
	}
];

const Header = (props) => {
 return (
 	<header>
 		<h1>{props.title}</h1>
 		<span className="stats"> Players: {props.totalPlayers}</span>
 	</header>
 )
 };

const Counter = (props) => (
	<div className="counter">
		<button className="counter-action decrement"> - </button>
		<span className="counter-score">{props.score}</span>
		<button className="counter-action increment"> + </button>
	</div>
);

const Player = (props) => (
	<div className="player">
		<span className="player-name">
			{props.name}
		</span>
		<Counter 
			score={props.score}
		/>
	</div>
); 

const App = (props) => (
	<div className="scoreboard">
		<Header 
		title="Scoreboard" 
		totalPlayers={props.initialPlayers.length} 
		/>

		{/* Player List*/}
		{props.initialPlayers.map( player=>
			<Player 
				name={player.name}
				score={player.score}
				key={player.id.toString()}
			/>
			)}
		<div className="card">...</div>
	</div>
);

ReactDOM.render(
	<App initialPlayers={players} />,
	document.getElementById('root')
);