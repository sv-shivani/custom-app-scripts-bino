var binomialCalculator = Class.create();
binomialCalculator.prototype = {
	initialize: function () {},

	// Function to calculate binomial coefficient (n choose k)
	binomialCoefficient: function (n, k) {
		if (k === 0 || k === n) {
			return 1;
		} else {
			var numerator = 1;
			var denominator = 1;
			for (var i = 0; i < k; i++) {
				numerator *= n - i;
				denominator *= i + 1;
			}
			return numerator / denominator;
		}
	},

	// Function to calculate binomial PMF
	binomialPMF: function (n, k, p) {
		const coefficient = this.binomialCoefficient(n, k);
		return coefficient * Math.pow(p, k) * Math.pow(1 - p, n - k);
	},

	// Function to calculate binomial CDF
	binomialCDF: function (n, k, p) {
		var cumulativeProbability = 0;
		for (var i = 0; i <= k; i++) {
			cumulativeProbability += this.binomialPMF(n, i, p);
		}
		return cumulativeProbability;
	},

	// Function to calculate binovalue
	binovalue: function (ep, p, n, k) {
		var result = 0;
		var pmfResult = this.binomialPMF(n, k, p);
		var cdfResult = this.binomialCDF(n, k, p);
		result = ep - ep * cdfResult + ep * pmfResult;
		return result;
	},
	//};

	type: "binomialCalculator ",
};
