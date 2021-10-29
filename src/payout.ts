import { Pattern, match } from './pattern';
import { SlotResult } from './slot';


export function getPayoutMultiplierFor(result: SlotResult): number {
	for (const m of multipliers) {
		if (match(result, m.pattern)) {
			return m.multiplier
		}
	}

	return 0;
}

interface ResultMultiplier {
	pattern: Pattern;
	multiplier: number;
}

const multipliers: ResultMultiplier[] = [
	{
		pattern: [1, 1, 1],
		multiplier: 200,
	},
	{
		pattern: [2, 2, 2],
		multiplier: 100,
	},
	{
		pattern: [3, 3, 3],
		multiplier: 100,
	},
	{
		pattern: [4, 4, 4],
		multiplier: 18,
	},
	{
		pattern: [5, 5, 5],
		multiplier: 14,
	},
	{
		pattern: [6, 6, 6],
		multiplier: 10,
	},
	{
		pattern: [7, 7, "?"],
		multiplier: 5,
	},
	{
		pattern: [7, "?", "?"],
		multiplier: 2,
	},
];
