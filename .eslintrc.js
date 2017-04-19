module.exports = {
	"parser": "babel-eslint",
	"env": {
		"es6": true,
		"node": true,
		"browser": true
	},
	"plugins": [
		"react"
	],
	"extends": [
		"eslint:all",
		"plugin:react/all"
	],
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	/*
		"off" or 0 - turn the rule off
		"warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
		"error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
	*/
	"rules": {
		"capitalized-comments": "off",
		"class-methods-use-this": "off",
		"eol-last": "off",
		"func-style": "off",
		"id-length": "off",
		"indent": ["error", "tab"],
		"init-declarations": "off",
		"max-len": ["error", 180],
		"multiline-ternary": "off",
		"no-confusing-arrow": ["error", {"allowParens": true}],
		"no-console": "warn",
		"no-extra-parens": "off",
		"no-magic-numbers": "off",
		"no-shadow": "off",
		"no-tabs": "off",
		"no-ternary": "off",
		"no-undefined": "off",
		"object-curly-spacing": ["error", "always"],
		"one-var": "off",
		"padded-blocks": "off",
		"quote-props": "off",
		"quotes": "off",
		"react/forbid-prop-types": "off",
		"react/jsx-boolean-value": "off",
		"react/jsx-filename-extension": "off",
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		"react/jsx-max-props-per-line": ["error", {"maximum": 4}],
		"react/jsx-no-bind": "off",
		"react/jsx-no-literals": "off",
		"react/jsx-uses-react": "error",
		"react/no-array-index-key": "off",
		"react/no-set-state": "off",
		"react/no-string-refs": "off",
		"react/prefer-stateless-function": "off",
		"react/prop-types": "off",
		"react/require-optimization": "off",
		"require-jsdoc": "off"
	}
};
