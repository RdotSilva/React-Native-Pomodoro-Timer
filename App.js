import React from 'react';
import { StyleSheet, Text, View, Vibration } from 'react-native';
import Timer from './src/components/Timer';
import Buttons from './src/components/Buttons';
import Label from './src/components/Label';
import Menu from './src/components/Menu';

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	menuContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});

vibrate = () => Vibration.vibrate([500, 500, 500]);

formatTime = time => {
	if (parseInt(time) < 10) {
		return '0' + time.toString();
	} else {
		return time.toString();
	}
};

getTime = val => {
	return formatTime(val) + ':00';
};

class App extends React.Component {
	constructor(props) {
		super(props),
			(this.state = {
				currentTime: '25:00',
				workTime: '25:00',
				breakTime: '05:00',
				working: true,
				timer: null,
				paused: false,
				playing: false
			});
	}

	setWorkTimer = val => {
		let newTime = getTime(val);
		this.setState({
			workTime: newTime
		});
		if (!this.state.timer) {
			this.setState({
				currentTime: newTime
			});
		}
	};

	setBreakTimer = val => {
		let newTime = getTime(val);
		this.setState({
			breakTime: newTime
		});
	};

	playButton = () => {
		if (this.state.paused === true || this.state.playing === false) {
			this.setState({
				timer: setInterval(this.countdown, 1000),
				paused: false,
				playing: true
			});
		}
	};

	pauseButton = () => {
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
	};

	resetButton = () => {
		this.pauseButton();
		this.setState({
			currentTime: this.state.workTime,
			playing: false,
			paused: false,
			working: true,
			timer: null
		});
	};

	countdown = () => {
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
	};

	toggleStatus = () => {
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
	};

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
			</View>
		);
	}
}

export default App;
