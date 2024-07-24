class Multipliers {
  private static instance: Multipliers;

  private constructor() {}

  public static get(): Multipliers {
    if (!Multipliers.instance) {
      Multipliers.instance = new Multipliers();
    }

    return Multipliers.instance;
  }

  public options(selectedOptions: number, multipliers: number[]): number[] {
    let options = multipliers;
    options = options.sort(() => Math.random() - 0.5).slice(0, selectedOptions);
    options = options
      .concat(options)
      .concat(options)
      .sort(() => Math.random() - 0.5);
    return options;
  }
}

export default Multipliers;
