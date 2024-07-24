"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Multipliers {
    constructor() { }
    static get() {
        if (!Multipliers.instance) {
            Multipliers.instance = new Multipliers();
        }
        return Multipliers.instance;
    }
    options(selectedOptions, multipliers) {
        let options = multipliers;
        options = options.sort(() => Math.random() - 0.5).slice(0, selectedOptions);
        options = options
            .concat(options)
            .concat(options)
            .sort(() => Math.random() - 0.5);
        return options;
    }
}
exports.default = Multipliers;
//# sourceMappingURL=multipliers.js.map