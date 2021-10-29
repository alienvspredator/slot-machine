import { ReelWeights, weightsConfig } from './weights';
import { getPayoutMultiplierFor } from './payout';
import { getRandomInt } from './helper';

export type SlotResult = [number, number, number];

export function getRandomWeighted(weights: ReelWeights): number {
	const indexedWeights = weights.map((v, i) => ({ idx: i, weight: v })).sort((a, b) => a.weight - b.weight);
	let total = 0;
	for (const w of indexedWeights) {
		w.weight += total;
		total = w.weight;
	}

	const n = getRandomInt(1000);
	for (const w of indexedWeights) {
		if (n < w.weight) {
			return w.idx;
		}
	}

	throw new Error('Unreachable');
}

export function getSlotSymbols(): SlotResult {
	return [getRandomWeighted(weightsConfig[0]), getRandomWeighted(weightsConfig[1]), getRandomWeighted(weightsConfig[2])];
}

export interface SpinResult {
	symbols: SlotResult;
	payout: number;
}

export function spinSlotMachine(bet: number): SpinResult {
	const symbols = getSlotSymbols();
	const payout = bet * getPayoutMultiplierFor(symbols);
	return { payout, symbols };
}
