import { spinSlotMachine } from './slot';

function performSlotMachineTests(bet: number): number {
	let totalWasted = 0;
	let totalWon = 0;
	for (let i = 0; i < 100000; i++) {
		totalWasted += bet;
		const spinResult = spinSlotMachine(bet);
		totalWon += spinResult.payout;
	}

	return totalWon / totalWasted;
}

console.log(performSlotMachineTests(1));
console.log(performSlotMachineTests(2));
console.log(performSlotMachineTests(3));
