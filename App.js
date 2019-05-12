import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import Timer from './src/components/Timer';
import Buttons from './src/components/Buttons';
import Label from './src/components/Label';

fomartTime = time => {
	if (parseInt(time) < 10) {
		return '0' + time.toString();
	} else {
		return time.toString();
	}
};

getTime = x => {
	return formatTime(x) + ':00';
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTime: '25:00',
			workTime: '25:00',
			breakTime: '05:00',
			working: true,
			timer: null,
			paused: false,
			playing: false
		};
		this.setWorkTimer = this.setWorkTimer.bind(this);
		this.setBreakTimer = this.setBreakTimer.bind(this);
		this.playButton = this.playButton.bind(this);
		this.pauseButton = this.pauseButton.bind(this);
		this.resetButton = this.resetButton.bind(this);
		this.countdown = this.countdown.bind(this);
		this.toggleStatus = this.toggleStatus.bind(this);
	}

	setWorkTimer(x) {
		let newTime = getTime(x);
		this.setState({
			workTime: newTime
		});
		if (!this.state.timer) {
			this.setState({
				currentTime: newTime
			});
		}
	}

	setBreakTimer(x) {
		let newTime = getTime(x);
		this.setState({
			breakTime: newTime
		});
	}

	playButton() {
		if (this.state.paused === true || this.state.playing === false) {
			this.setState({
				timer: setInterval(this.countdown, 1000),
				paused: false,
				playing: true
			});
		}
	}

	pauseButton() {
		if (this.state.paused === false && this.state.playing === true) {
			clearInterval(this.state.timer);
			this.setState({
				paused: true,
				timer: null,
				playing: false
			});
			console.log(this.state.paused);
		} else if (this.state.paused === true && this.state.playing === false) {
			this.playButton();
		}
	}

	resetButton() {
		this.pauseButton();
		this.setState({
			currentTime: this.state.workTime,
			playing: false,
			paused: false,
			working: true
		});
	}

	countdown() {
		if (this.state.currentTime === '00:00' && this.state.playing === true) {
			console.log('finished');
			vibrate();
			this.toggleStatus();
		} else {
			let sec = this.state.currentTime.slice(3);
			let min = this.state.currentTime.slice(0, 2);
			if (sec === '00') {
				let newMin = formatTime(parseInt(min) - 1);
				let newTime = newMin + ':59';
				this.setState({
					currentTime: newTime
				});
			} else {
				let newSec = formatTime(parseInt(sec) - 1);
				let newTime = min + ':' + newSec;
				this.setState({
					currentTime: newTime
				});
			}
		}
	}

	toggleStatus() {
		if (this.state.working) {
			this.setState({
				working: false,
				currentTime: this.state.breakTime
			});
		} else {
			this.setState({
				working: true,
				currentTime: this.state.workTime
			});
		}
	}

	render() {
		return (
			<View style={style.container}>
				<Timer currentTime={this.state.currentTime} />
				<Label
					working={this.state.working}
					paused={this.state.paused}
					playing={this.state.playing}
				/>
				<View style={{ flexDirection: 'row' }}>
					<Buttons title="Play" onPress={this.playButton} />
					<Buttons title="Pause" onPress={this.pauseButton} />
					<Buttons title="Reset" onPress={this.resetButton} />
				</View>
				<View style={style.menuContainer}>
					<Text>Select work time (min): </Text>
					<Menu
						selected={Number(
							this.state.workTime.slice(0, 2)
						).toString()}
						onValueChange={this.setWorkTimer}
					/>
				</View>
				<View style={style.menuContainer}>
					<Text>Select break time (min): </Text>
					<Menu
						selected={Number(
							this.state.breakTime.slice(0, 2)
						).toString()}
						onValueChange={this.setBreakTimer}
					/>
				</View>
				<Info />
				<Picture />
			</View>
		);
	}
}

export default App;
