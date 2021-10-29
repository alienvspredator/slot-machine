import * as crypto from 'crypto';

export function getRandomInt(max: number): number {
	return crypto.randomInt(0, max);
}
