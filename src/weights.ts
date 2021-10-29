export type ReelWeights = [number, number, number, number, number, number, number, number];

export const weightsConfig: readonly [ReelWeights, ReelWeights, ReelWeights] = [
	[65, 11, 97, 4, 409, 290, 59, 65],
	[43, 22, 56, 220, 121, 220, 275, 43],
	[40, 2, 5, 409, 115, 185, 0, 244],
];

function validateReelWeights(weights: ReelWeights): boolean {
	let sum = 0;
	for (const w of weights) {
		sum += w;
	}

	return sum === 1000;
}

function shouldValidWeightsConfig(config: readonly [ReelWeights, ReelWeights, ReelWeights]) {
	for (let i = 0; i < config.length; i++) {
		if (!validateReelWeights(config[i])) {
			throw new Error(`Weights config for reel ${i} is not valid`);
		}
	}
}

shouldValidWeightsConfig(weightsConfig);
