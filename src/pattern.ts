import { SlotResult } from './slot';

export type PatternSymbol = number | "?";

export type Pattern = [PatternSymbol, PatternSymbol, PatternSymbol];

export function match(result: SlotResult, pattern: Pattern): boolean {
	for (let i = 0; i < result.length; i++) {
		if (pattern[i] !== "?" && result[i] !== pattern[i]) {
			return false;
		}
	}

	return true;
}
